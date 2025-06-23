import React from 'react';
import ChatBot from 'react-chatbotify';
import type { Flow } from 'react-chatbotify';

const flow: Flow = {
  start: {
    message: "Hi there! I'm your assistant at DataBitzy. What's your name?",
    path: 'askName',
  },
  askName: {
    path: 'options',
  },
  options: {
    message: (params) =>
      `Nice to meet you, ${params.userInput}! What would you like to explore?`,
    // options must be string[] or { items: string[]; sendOutput?; }
    options: ['Market Research', 'Data Analytics', 'Custom Solutions'],
    path: 'handleChoice',
  },
  handleChoice: {
    message: (params) => {
      switch (params.userInput) {
        case 'Market Research':
          return 'Our Market Research Reports include forecasting, analysis & expert insights.';
        case 'Data Analytics':
          return 'We offer dashboards, predictive analytics, KPI tracking & risk scoring.';
        case 'Custom Solutions':
          return 'Custom solutions tailored to your goals. Let\'s talk!';
        default:
          return "I'm not sure about that option.";
      }
    },
    path: 'collectLead',
  },
  collectLead: {
    message: 'Please share your email or message, and we’ll get back to you soon.',
    chatDisabled: true,
  },
};


const settings = {
  general: {
    embedded: true,
    primaryColor: '#27548A',
    secondaryColor: '#FDF6EC',
    fontFamily: 'Inter, sans-serif',
    flowStartTrigger: 'ON_BUTTON_CLICK',
  },
  header: {
    title: <strong>Talk to DataBitzy</strong>,
    showAvatar: false,
  },
};

const styles = {
  headerStyle: { background: '#27548A', color: '#fff' },
  chatWindowStyle: { backgroundColor: '#FDF6EC' },
  botBubbleStyle: { backgroundColor: '#E6F0FB', color: '#183B4E' },
  userBubbleStyle: { backgroundColor: '#27548A', color: '#fff' },
  sendButtonStyle: { backgroundColor: '#27548A' },
};

const ChatbotComp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <ChatBot flow={flow} settings={settings} styles={styles} />
    </div>
  );
};

export default ChatbotComp;
