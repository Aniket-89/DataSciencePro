import React from "react";

interface MessageParserProps {
  children: any;
  actions: {
    handleUserChoice: (choice: string) => void;
  };
}

const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
  const parse = (message: string) => {
    const lowerMessage = message.toLowerCase();

    // Basic message parsing logic
    if (lowerMessage.includes("know more") || lowerMessage.includes("about")) {
      actions.handleUserChoice("know_more");
    } else if (
      lowerMessage.includes("industries") ||
      lowerMessage.includes("services")
    ) {
      actions.handleUserChoice("industries");
    } else if (
      lowerMessage.includes("project") ||
      lowerMessage.includes("work")
    ) {
      actions.handleUserChoice("project");
    } else if (
      lowerMessage.includes("talk") ||
      lowerMessage.includes("contact")
    ) {
      actions.handleUserChoice("talk");
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          parse,
          actions,
        })
      )}
    </div>
  );
};

export default MessageParser;
