import { createChatBotMessage } from "react-chatbot-kit";
import type IWidget from "react-chatbot-kit/build/src/interfaces/IWidget";
import type IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";
import { CustomWidget } from "./Wdgets";
import FormComponent from "./FormComponent";

const config: IConfig = {
  botName: "Bitbot",
  initialMessages: [
    createChatBotMessage("👋 Hey there! How can I help you today?", {
      widget: "mainOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#f3f6f8",
    },
    chatButton: {
      backgroundColor: "#0a66c2",
    },
  },
  widgets: [
    {
      widgetName: "mainOptions",
      widgetFunc: (props: any) => (
        <div className="p-2 space-y-2">
          <CustomWidget {...props} />
        </div>
      ),
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "formWidget",
      widgetFunc: () => (
        <div className="p-2 bg-[#f3f6f8] rounded-lg">
          <FormComponent />
        </div>
      ),
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "bookCallLink",
      widgetFunc: () => (
        <a
          href="https://calendly.com/your-link"
          target="_blank"
          rel="noreferrer"
          className="block transition-transform hover:scale-[1.02]"
        >
          <button className="btn">
            <span>📅</span>
            <span>Book a Call</span>
          </button>
        </a>
      ),
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "aboutLink",
      widgetFunc: () => (
        <a
          href="/about"
          target="_blank"
          rel="noreferrer"
          className="block transition-transform hover:scale-[1.02]"
        >
          <button className="btn">
            <span>ℹ️</span>
            <span>Visit About Page</span>
          </button>
        </a>
      ),
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "afterIndustryOptions",
      widgetFunc: (props: any) => (
        <div className="flex flex-col gap-2 p-2">
          <button
            onClick={() => props.actions.handleUserChoice("project")}
            className="btn"
          >
            <span>📁</span>
            <span>Have a project?</span>
          </button>
          <button
            onClick={() => props.actions.handleUserChoice("talk")}
            className="btn"
          >
            <span>👨‍💼</span>
            <span>Talk to our executive</span>
          </button>
        </div>
      ),
      props: {},
      mapStateToProps: [],
    },
  ] as IWidget[],
};

export default config;
