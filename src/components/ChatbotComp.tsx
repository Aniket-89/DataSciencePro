import React, { useState } from 'react';
import type { FormEvent } from 'react';

interface FlowStep {
  message: string | ((params: any) => string);
  options?: string[];
  path?: string | ((params: any) => string);
  chatDisabled?: boolean;
}

const flow: Record<string, FlowStep> = {
  start: {
    message: "Hi there 👋 I'm your assistant from Databitzy. What would you like help with today?",
    options: [
      '📊 Explore Research Reports',
      '📈 Understand Data Solutions',
      '🧠 Custom Research Requirements',
      '💬 Talk to an Expert',
    ],
    path: 'handleIntent',
  },
  handleIntent: {
    message: (params: { userInput: string }) => {
      switch (params.userInput) {
        case '📊 Explore Research Reports':
          return 'We cover 12+ industries — from Automotive to Healthcare. What sector are you interested in?';
        case '📈 Understand Data Solutions':
          return 'We help you build dashboards, predictive models & data-driven strategies. Want a breakdown of what we offer?';
        case '🧠 Custom Research Requirements':
          return "Tell us a bit about your custom need — domain, target market, or data type you're looking for.";
        case '💬 Talk to an Expert':
          return 'Great! I can set that up. Just share your email or WhatsApp, and someone from our team will reach out.';
        default:
          return 'Let me know how I can assist.';
      }
    },
    path: 'branching',
  },
  branching: {
    message: '', // dummy message for type safety
    path: (params: { userInput: string }) => {
      switch (params.userInput) {
        case '📊 Explore Research Reports':
          return 'reportSectorChoice';
        case '📈 Understand Data Solutions':
          return 'showDataServices';
        case '🧠 Custom Research Requirements':
          return 'collectCustomNeed';
        case '💬 Talk to an Expert':
          return 'collectLead';
        default:
          return 'collectLead';
      }
    },
  },
  reportSectorChoice: {
    message: "+Choose a sector you'd like a sample or insight on:",
    options: [
      '🚗 Automotive',
      '🏥 Healthcare',
      '📦 Logistics',
      '🔋 Energy',
      '🎯 Something Else',
    ],
    path: 'showReportPreview',
  },
  showReportPreview: {
    message: (params: { userInput: string }) => {
      return `Here's what we typically include in our ${params.userInput} reports:\n• Market size & forecasts\n• Competitive landscape\n• Consumer trends\nWant us to send you a free sample or set up a call?`;
    },
    options: ['📩 Send Sample', '📞 Schedule Call'],
    path: 'collectLead',
  },
  showDataServices: {
    message:
      'We offer:\n• KPI dashboards\n• Forecasting models\n• Market monitoring tools\n\nWant us to show a demo or scope a use case for you?',
    options: ['📈 Show Demo', '🧩 Scope Use Case'],
    path: 'collectLead',
  },
  collectCustomNeed: {
    message:
      "Please describe briefly what custom research you're looking for (e.g., target market, geography, challenge).",
    path: 'collectLead',
  },
  collectLead: {
    message:
      'Thanks! Please drop your email or WhatsApp so we can follow up with the right expert.',
    chatDisabled: true,
  },
};

type StepKey = keyof typeof flow;

interface HistoryEntry {
  step: StepKey;
  userInput: string | null;
  botMessage: string;
}

interface ChatbotCompProps {
  onClose?: () => void;
}

const ChatbotComp: React.FC<ChatbotCompProps> = ({ onClose }) => {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { step: 'start', userInput: null, botMessage: flow.start.message as string },
  ]);
  const [input, setInput] = useState('');
  const [chatDisabled, setChatDisabled] = useState(false);

  const current = history[history.length - 1];
  const stepConfig = flow[current.step];

  // Get options for current step
  const options = stepConfig.options;

  // Handle user input (button or text)
  const handleUserInput = (userInput: string) => {
    let nextStep = stepConfig.path;
    if (typeof nextStep === 'function') {
      nextStep = nextStep({ ...current, userInput });
    }
    if (nextStep && flow[nextStep as StepKey]) {
      if (flow[nextStep as StepKey].chatDisabled) setChatDisabled(true);
      const nextStepConfig = flow[nextStep as StepKey];
      let nextBotMessage: string = '';
      if (typeof nextStepConfig.message === 'function') {
        nextBotMessage = nextStepConfig.message({ ...current, userInput });
      } else {
        nextBotMessage = nextStepConfig.message;
      }
      setHistory((h) => [
        ...h,
        {
          step: nextStep as StepKey,
          userInput,
          botMessage: nextBotMessage,
        },
      ]);
      setInput('');
    }
  };

  // Handle text input submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleUserInput(input.trim());
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-xs md:max-w-sm">
      <div className="bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden flex flex-col h-[500px]">
        <div className="bg-[#27548A] text-white px-4 py-3 font-semibold text-lg flex items-center gap-2 justify-between">
          <span className="flex items-center gap-2"><span role="img" aria-label="bot">🤖</span> Databitzy Assistant</span>
          {onClose && (
            <button
              className="ml-2 text-white bg-transparent hover:text-[#DDA853] text-lg px-2 py-1 focus:outline-none"
              onClick={onClose}
              aria-label="Close Chatbot"
              title="Close"
            >
              ✕
            </button>
          )}
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 text-sm">
          {history.map((entry, idx) => (
            <React.Fragment key={idx}>
              {entry.userInput && (
                <div className="flex justify-end mb-1">
                  <div className="bg-[#DDA853] text-white px-3 py-2 rounded-lg max-w-[80%] text-right">{entry.userInput}</div>
                </div>
              )}
              <div className="flex items-start gap-2">
                <span className="text-[#27548A] text-lg">🤖</span>
                <div className="bg-gray-100 px-3 py-2 rounded-lg max-w-[80%] whitespace-pre-line">{entry.botMessage}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="border-t bg-white px-4 py-3">
          {!chatDisabled && options && (
            <div className="flex flex-wrap gap-2 mb-2">
              {options.map((opt: string) => (
                <button
                  key={opt}
                  className="px-3 py-2 bg-[#27548A] text-white rounded font-medium hover:bg-[#183B4E] transition-colors text-xs"
                  onClick={() => handleUserInput(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
          {!chatDisabled && !options && (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#27548A]"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={chatDisabled}
                autoFocus
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#27548A] text-white rounded font-medium hover:bg-[#183B4E] transition-colors text-xs"
                disabled={chatDisabled}
              >
                Send
              </button>
            </form>
          )}
          {chatDisabled && (
            <div className="text-xs text-gray-500 text-center">Chat closed. Our team will follow up soon!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatbotComp;