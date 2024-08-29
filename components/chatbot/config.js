import { createChatBotMessage } from "react-chatbot-kit";
import AskingEmail from "../widgets/AskingEmail";
import Overview from "../widgets/Overview";
import DevOps from "../widgets/DevOps";
import LocalStatistics from "../widgets/LocalStatistics";
import ITSecurity from "../widgets/ITSecurity";
import Contact from "../widgets/Contact";
import JobOpenings from "../widgets/JobOpenings";
import AiApi from "../widgets/AiApi";
import CoBotAvatar from "./CoBotAvatar";
import FreeCon from "../widgets/FreeConsultation";

const isEmailProvided = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedEmail = localStorage.getItem("hasAskedEmail");
    // console.log("EnteredEmailLocalStorage", storedEmail);
    return !!storedEmail;
  }
  return false;
};

const config = {
  lang: "no",
  botName: "CoBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a",
    },
    chatButton: {
      backgroundColor: "#0f5faf",
    },
  },

  initialMessages: isEmailProvided()
    ? [
        createChatBotMessage(
          "Here's a quick overview of what Pirai can help you with.",
          {
            withAvatar: false,
            delay: 100,
            widget: "overview",
          }
        ),
      ]
    : [
        createChatBotMessage(
          "Welcome to piraiinfo.com! The Pirai team is glad to have you here. ",
          {
            withAvatar: false,
            delay: 100,
            widget: "askingemail",
          }
        ),
      ],
  state: {},
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },

  widgets: [
    {
      widgetName: "askingemail",
      widgetFunc: (props) => <AskingEmail {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "devOps",
      widgetFunc: (props) => <DevOps />,
    },
    {
      widgetName: "localStatistics",
      widgetFunc: (props) => <LocalStatistics />,
    },
    {
      widgetName: "emergencyContact",
      widgetFunc: (props) => <Contact />,
    },
    {
      widgetName: "jobOpenings",
      widgetFunc: (props) => <JobOpenings />,
    },
    {
      widgetName: "aiapi",
      widgetFunc: (props) => <AiApi {...props} />,
    },
    {
      widgetName: "itSecurity",
      widgetFunc: (props) => <ITSecurity {...props} />,
    },
    {
      widgetName: "freeconsultation",
      widgetFunc: (props) => <FreeCon {...props} />,
    },
  ],
};

export default config;
