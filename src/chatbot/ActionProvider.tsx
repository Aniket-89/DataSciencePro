import React from "react";
import { industriesList } from "./industries";

// Define proper types for messages and state
interface ChatBotMessage {
  loading: boolean;
  widget?: string;
  delay?: number;
  payload?: any;
  message: string;
  type: string;
  id: number;
}

interface MessageOptions {
  widget?: string;
  delay?: number;
  payload?: any;
}

interface ChatBotState {
  messages: ChatBotMessage[];
  [key: string]: any;
}

interface ActionProviderProps {
  createChatBotMessage: (
    message: string,
    options?: MessageOptions
  ) => ChatBotMessage;
  setState: React.Dispatch<React.SetStateAction<ChatBotState>>;
  children: React.ReactNode;
}

const ActionProvider: React.FC<ActionProviderProps> = ({
  createChatBotMessage,
  setState,
  children,
}) => {
  // Add typing delay for natural conversation flow
  const TYPING_DELAY = 600;
  const MESSAGE_DELAY = 300;

  const updateState = (messages: ChatBotMessage | ChatBotMessage[]) => {
    setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        ...(Array.isArray(messages) ? messages : [messages]),
      ],
    }));
  };

  const createDelayedMessage = (
    message: string,
    options: MessageOptions = {}
  ) => {
    return createChatBotMessage(message, {
      ...options,
      delay: options.delay || TYPING_DELAY,
    });
  };

  const handleUserChoice = (choice: string) => {
    switch (choice) {
      case "know_more":
        updateState([
          createDelayedMessage(
            "We are a cutting-edge drone solutions company focused on innovation and precision.",
            { delay: TYPING_DELAY }
          ),
          createDelayedMessage("Visit our About Page:", {
            widget: "aboutLink",
            delay: TYPING_DELAY + MESSAGE_DELAY,
          }),
        ]);
        break;

      case "industries":
        updateState([
          createDelayedMessage("Here are the industries we serve:", {
            delay: TYPING_DELAY,
          }),
          ...industriesList.map((item, index) =>
            createDelayedMessage(item, {
              delay: TYPING_DELAY + (index + 1) * MESSAGE_DELAY,
            })
          ),
          createDelayedMessage("Would you like to:", {
            widget: "afterIndustryOptions",
            delay: TYPING_DELAY + (industriesList.length + 1) * MESSAGE_DELAY,
          }),
        ]);
        break;

      case "project":
        updateState([
          createDelayedMessage("Great! Please fill out the project form.", {
            delay: TYPING_DELAY,
          }),
          createDelayedMessage("👇", {
            widget: "formWidget",
            delay: TYPING_DELAY + MESSAGE_DELAY,
          }),
        ]);
        break;

      case "talk":
        updateState(
          createDelayedMessage("You can book a call with our executive here:", {
            widget: "bookCallLink",
            delay: TYPING_DELAY,
          })
        );
        break;
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // Type assertion to allow 'actions' prop
          return React.cloneElement(child as React.ReactElement<any>, {
            actions: {
              handleUserChoice,
            },
          });
        }
        return child;
      })}
    </div>
  );
};

export default ActionProvider;
