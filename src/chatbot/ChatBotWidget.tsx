import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { FaComments } from "react-icons/fa";

const ChatbotWidget = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="fixed bottom-0 lg:bottom-4 right-4 lg:right-6 z-50">
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isMinimized ? "h-24 w-12" : "md:w-[420px]"
        }`}
      >
        {/* Minimize Button */}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className={`absolute ${
            isMinimized ? "bg-[#0077B5]  size-16" : ""
          } rounded-full mb-4 right-2 top-1 grid place-content-center z-10 p-2 text-white hover:opacity-80 transition-opacity`}
          aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
        >
          {isMinimized ? (
            <FaComments size={24} />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>

        {/* Chat Widget */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isMinimized
              ? "opacity-0 invisible h-0"
              : "opacity-100 visible h-full"
          }`}
        >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>

        {/* Minimized Chat Icon */}
        {/* {isMinimized && (
          <button
            onClick={() => setIsMinimized(false)}
            className="w-12 h-12 rounded-full bg-[#0a66c2] text-white flex items-center justify-center shadow-lg hover:bg-[#004182] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"
              />
            </svg>
          </button>
        )} */}
      </div>
    </div>
  );
};

export default ChatbotWidget;
