import React, { useRef } from "react"; // make sure useRef is imported
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

// Type definitions
interface UserData {
  serviceType: string;
  name: string;
  email: string;
  phone: string;
  company: string;
}

interface ChatBotState {
  messages: any[];
  userData: UserData;
  collectingName: boolean;
  collectingEmail: boolean;
  collectingPhone: boolean;
  collectingCompany: boolean;
}

interface ActionProviderProps {
  createChatBotMessage: (message: string, options?: any) => any;
  setState: (stateFunc: (prevState: ChatBotState) => ChatBotState) => void;
  createClientMessage: (message: string) => any;
  stateRef: React.MutableRefObject<ChatBotState>;
  createCustomMessage: (message: string, component: string) => any;
  children?: React.ReactNode;
}

interface MessageParserProps {
  children?: React.ReactNode;
  actions: any;
}

interface WidgetProps {
  actionProvider: ActionProviderClass;
  setState: (stateFunc: (prevState: ChatBotState) => ChatBotState) => void;
}

interface OptionsProps extends WidgetProps {
  options: string[];
}

interface ServiceOptionsProps extends WidgetProps {}

// Custom Components
const Options: React.FC<OptionsProps> = ({ options, actionProvider }) => {
  const buttonStyle: React.CSSProperties = {
    padding: "10px 15px",
    backgroundColor: "#4F46E5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    textAlign: "left",
    transition: "background-color 0.3s",
    width: "100%",
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#3730A3";
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#4F46E5";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginTop: "8px",
      }}
    >
      {options.map((option: string, index: number) => (
        <button
          key={index}
          onClick={() => actionProvider.handleOptionClick(option)}
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

const ServiceOptions: React.FC<ServiceOptionsProps> = ({ actionProvider }) => {
  const services: string[] = [
    "💻 Web Development",
    "📱 Mobile App Development",
    "🔧 Custom Software",
    "🌐 E-commerce Solutions",
    "📊 Data Analytics",
    "☁️ Cloud Services",
    "🎨 UI/UX Design",
    "🔍 Other/Not sure",
  ];

  const buttonStyle: React.CSSProperties = {
    padding: "10px 15px",
    backgroundColor: "#10B981",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    textAlign: "left",
    transition: "background-color 0.3s",
    width: "100%",
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#059669";
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#10B981";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginTop: "8px",
      }}
    >
      {services.map((service: string, index: number) => (
        <button
          key={index}
          onClick={() => actionProvider.handleServiceSelection(service)}
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {service}
        </button>
      ))}
    </div>
  );
};

// Configuration
const config = {
  initialMessages: [
    {
      id: 1,
      message: "Welcome to our services! How can I help you today?",
      trigger: "main-options",
      type: "text",
    },
  ],
  botName: "ServiceBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#4F46E5",
    },
    chatButton: {
      backgroundColor: "#4F46E5",
    },
  },
  widgets: [
    {
      widgetName: "mainOptions",
      widgetFunc: (props: WidgetProps) => (
        <Options
          options={[
            "📌 Know more about us",
            "🏭 What industries we deal with",
            "📁 Do you have a project for us?",
            "👨‍💼 Talk to our executive",
          ]}
          {...props}
        />
      ),
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "serviceOptions",
      widgetFunc: (props: WidgetProps) => <ServiceOptions {...props} />,
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "projectOptions",
      widgetFunc: (props: WidgetProps) => (
        <Options
          options={[
            "✅ Yes, I have a project",
            "❌ No, just exploring options",
          ]}
          {...props}
        />
      ),
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "backOptions",
      widgetFunc: (props: WidgetProps) => (
        <Options
          options={["🔙 Back to main menu", "👨‍💼 Talk to our executive"]}
          {...props}
        />
      ),
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "industryOptions",
      widgetFunc: (props: WidgetProps) => (
        <Options
          options={[
            "🔙 Back to main menu",
            "📁 Do you have a project for us?",
            "👨‍💼 Talk to our executive",
          ]}
          {...props}
        />
      ),
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "exploringOptions",
      widgetFunc: (props: WidgetProps) => (
        <Options
          options={[
            "📌 Know more about us",
            "🏭 What industries we deal with",
            "👨‍💼 Talk to our executive",
          ]}
          {...props}
        />
      ),
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "finalOptions",
      widgetFunc: (props: WidgetProps) => (
        <Options
          options={["🔙 Back to main menu", "❌ End conversation"]}
          {...props}
        />
      ),
      props: {},
      mapStateToProps: [],
    },
  ],
};

// Message Parser
class MessageParser {
  actionProvider: ActionProviderClass;
  state: ChatBotState;

  constructor(actionProvider: ActionProviderClass, state: ChatBotState) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message: string): void {
    // Handle text input during data collection
    if (this.state.collectingName) {
      this.actionProvider.handleNameInput(message);
    } else if (this.state.collectingEmail) {
      this.actionProvider.handleEmailInput(message);
    } else if (this.state.collectingPhone) {
      this.actionProvider.handlePhoneInput(message);
    } else if (this.state.collectingCompany) {
      this.actionProvider.handleCompanyInput(message);
    } else {
      // Default message when not collecting data
      this.actionProvider.handleUnknownInput();
    }
  }
}

// Action Provider
class ActionProviderClass {
  createChatBotMessage: (message: string, options?: any) => any;
  setState: (stateFunc: (prevState: ChatBotState) => ChatBotState) => void;
  createClientMessage: (message: string) => any;
  stateRef: React.MutableRefObject<ChatBotState>;
  createCustomMessage: (message: string, component: string) => any;

  constructor(
    createChatBotMessage: (message: string, options?: any) => any,
    setStateFunc: (
      stateFunc: (prevState: ChatBotState) => ChatBotState
    ) => void,
    createClientMessage: (message: string) => any,
    stateRef: React.MutableRefObject<ChatBotState>,
    createCustomMessage: (message: string, component: string) => any
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  // Email sending function
  sendEmailNotification = async (data: UserData): Promise<boolean> => {
    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "YOUR_SERVICE_ID",
            template_id: "YOUR_TEMPLATE_ID",
            user_id: "YOUR_PUBLIC_KEY",
            template_params: {
              to_email: "your-email@example.com",
              from_name: data.name || "Website Visitor",
              from_email: data.email || "no-email@provided.com",
              service_type: data.serviceType,
              user_name: data.name,
              user_email: data.email,
              user_phone: data.phone || "Not provided",
              user_company: data.company || "Not provided",
              message: `New consultation request from ${
                data.name || "Website Visitor"
              } for ${data.serviceType}`,
              subject: "New Consultation Request from Website Chatbot",
            },
          }),
        }
      );

      return response.ok;
    } catch (error) {
      console.error("Error sending email:", error);
      return false;
    }
  };

  handleOptionClick = (option: string): void => {
    const message = this.createChatBotMessage("");

    switch (option) {
      case "📌 Know more about us":
        message.message =
          "We are a leading technology solutions company with over 10 years of experience. We specialize in custom software development, web applications, mobile apps, and digital transformation services. Our team of expert developers and consultants work closely with clients to deliver innovative solutions that drive business growth.";
        message.widget = "backOptions";
        break;

      case "🏭 What industries we deal with":
        message.message =
          "We work across various industries including:\n\n• Healthcare & Medical\n• Finance & Banking\n• E-commerce & Retail\n• Education & E-learning\n• Real Estate\n• Manufacturing\n• Logistics & Transportation\n• Entertainment & Media\n\nOur solutions are tailored to meet the specific needs of each industry.";
        message.widget = "industryOptions";
        break;

      case "📁 Do you have a project for us?":
        message.message =
          "Great! We'd love to hear about your project. Do you have a specific project in mind that you'd like to discuss?";
        message.widget = "projectOptions";
        break;

      case "👨‍💼 Talk to our executive":
        this.startConsultancyFlow();
        return;

      case "✅ Yes, I have a project":
        this.startConsultancyFlow();
        return;

      case "❌ No, just exploring options":
        message.message =
          "That's perfectly fine! We're here to help you explore your options. Feel free to browse our services or learn more about what we do. When you're ready to discuss a potential project, just let us know!";
        message.widget = "exploringOptions";
        break;

      case "🔙 Back to main menu":
        this.resetToMainMenu();
        return;

      case "❌ End conversation":
        message.message = "Thank you for visiting! Have a great day! 👋";
        message.widget = "mainOptions";
        break;

      default:
        message.message =
          "I'm not sure how to help with that. Let me show you the main options again.";
        message.widget = "mainOptions";
    }

    this.setState((prev: ChatBotState) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  startConsultancyFlow = (): void => {
    const message = this.createChatBotMessage(
      "Excellent! I'd be happy to connect you with our executive team. To ensure we match you with the right specialist, could you please tell me what type of project or service you're interested in?"
    );
    message.widget = "serviceOptions";

    this.setState((prev: ChatBotState) => ({
      ...prev,
      messages: [...prev.messages, message],
      userData: {
        serviceType: "",
        name: "",
        email: "",
        phone: "",
        company: "",
      },
      collectingName: false,
      collectingEmail: false,
      collectingPhone: false,
      collectingCompany: false,
    }));
  };

  handleServiceSelection = (service: string): void => {
    const message = this.createChatBotMessage(
      "Perfect! Now I'll need some contact information so our executive can reach out to you. Please provide your name:"
    );

    this.setState((prev: ChatBotState) => ({
      ...prev,
      messages: [...prev.messages, message],
      userData: {
        ...prev.userData,
        serviceType: service,
      },
      collectingName: true,
      collectingEmail: false,
      collectingPhone: false,
      collectingCompany: false,
    }));
  };

  handleNameInput = (name: string): void => {
    const message = this.createChatBotMessage(
      "Thank you! And what's your email address?"
    );

    this.setState((prev: ChatBotState) => ({
      ...prev,
      messages: [...prev.messages, message],
      userData: {
        ...prev.userData,
        name: name,
      },
      collectingName: false,
      collectingEmail: true,
      collectingPhone: false,
      collectingCompany: false,
    }));
  };

  handleEmailInput = (email: string): void => {
    const message = this.createChatBotMessage(
      "Great! And your phone number (optional)?"
    );

    this.setState((prev: ChatBotState) => ({
      ...prev,
      messages: [...prev.messages, message],
      userData: {
        ...prev.userData,
        email: email,
      },
      collectingName: false,
      collectingEmail: false,
      collectingPhone: true,
      collectingCompany: false,
    }));
  };

  handlePhoneInput = (phone: string): void => {
    const message = this.createChatBotMessage(
      "Lastly, what's your company name (optional)?"
    );

    this.setState((prev: ChatBotState) => ({
      ...prev,
      messages: [...prev.messages, message],
      userData: {
        ...prev.userData,
        phone: phone,
      },
      collectingName: false,
      collectingEmail: false,
      collectingPhone: false,
      collectingCompany: true,
    }));
  };

  handleCompanyInput = async (company: string): Promise<void> => {
    const finalData: UserData = {
      ...this.stateRef.current.userData,
      company: company,
    };

    // Send email notification
    const emailSent = await this.sendEmailNotification(finalData);

    const message = this.createChatBotMessage(
      `Perfect! Here's what I've collected:\n\n📋 **Summary:**\n• Service Interest: ${
        finalData.serviceType
      }\n• Name: ${finalData.name}\n• Email: ${finalData.email}\n• Phone: ${
        finalData.phone || "Not provided"
      }\n• Company: ${
        finalData.company || "Not provided"
      }\n\n✅ **Next Steps:**\n• Our executive will review your information\n• You'll receive a call/email within 24 hours\n• We'll schedule a detailed consultation\n\n${
        emailSent
          ? "📧 **Notification sent to our team!**"
          : "⚠️ **Notification pending - our team will be notified**"
      }\n\nThank you for your interest! Is there anything else I can help you with today?`
    );
    message.widget = "finalOptions";

    this.setState((prev: ChatBotState) => ({
      ...prev,
      messages: [...prev.messages, message],
      userData: finalData,
      collectingName: false,
      collectingEmail: false,
      collectingPhone: false,
      collectingCompany: false,
    }));
  };

  resetToMainMenu = (): void => {
    const message = this.createChatBotMessage(
      "Welcome back! How can I help you today?"
    );
    message.widget = "mainOptions";

    this.setState((prev: ChatBotState) => ({
      ...prev,
      messages: [...prev.messages, message],
      userData: {
        serviceType: "",
        name: "",
        email: "",
        phone: "",
        company: "",
      },
      collectingName: false,
      collectingEmail: false,
      collectingPhone: false,
      collectingCompany: false,
    }));
  };

  handleUnknownInput = (): void => {
    const message = this.createChatBotMessage(
      "I'm not sure how to help with that. Let me show you the main options:"
    );
    message.widget = "mainOptions";

    this.setState((prev: ChatBotState) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

// Wrapper components for proper instantiation
const ActionProvider: React.FC<ActionProviderProps> = ({
  createChatBotMessage,
  setState,
  createClientMessage,
  stateRef,
  createCustomMessage,
  children,
}) => {
  const actionProvider = new ActionProviderClass(
    createChatBotMessage,
    setState,
    createClientMessage,
    stateRef,
    createCustomMessage
  );

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          actions: actionProvider,
        });
      })}
    </div>
  );
};

interface MessageParserWrapperProps extends MessageParserProps {
  stateRef: React.MutableRefObject<ChatBotState>;
}

const MessageParserWrapper: React.FC<MessageParserWrapperProps> = ({
  children,
  actions,
  stateRef,
}) => {
  const parser = new MessageParser(actions, stateRef.current);
  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<any>, {
          parse: parser.parse.bind(parser),
          actions,
        })
      )}
    </>
  );
};

// Main Component
const ServicesChatbot: React.FC = () => {
  // const [userData, setUserData] = useState<UserData>({
  //   serviceType: "",
  //   name: "",
  //   email: "",
  //   phone: "",
  //   company: "",
  // });
  const stateRef = useRef<ChatBotState>({
    messages: [],
    userData: {
      serviceType: "",
      name: "",
      email: "",
      phone: "",
      company: "",
    },
    collectingName: false,
    collectingEmail: false,
    collectingPhone: false,
    collectingCompany: false,
  });

  return (
    <Chatbot
      config={config}
      messageParser={(props: MessageParserProps) => (
        <MessageParserWrapper {...props} stateRef={stateRef} />
      )}
      actionProvider={(props: ActionProviderProps) => (
        <ActionProvider {...props} stateRef={stateRef} />
      )}
      headerText="Services Assistant"
      placeholderText="Type your message..."
    />
  );
};

export default ServicesChatbot;
