import axios from "axios";
import AskingEmail from "../widgets/AskingEmail";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  clearChatHistory = () => {
    const message = this.createChatBotMessage("Please Enter your Email", {
      withAvatar: false,
      delay: 100,
      widget: "askingemail",
    });

    this.setState((state) => ({
      ...state,
      messages: [message],
    }));
  };

  handleOverview = () => {
    const message = this.createChatBotMessage(
      "Here's a quick overview of what I can help you with.",
      {
        withAvatar: false,
        delay: 400,
        widget: "overview",
      }
    );

    this.addMessageToState(message);
  };

  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "overview",
        loading: true,
        terminateLoading: true,
        ...options,
      }
    );

    this.addMessageToState(message);
  };

  handleDevOps = () => {
    const message = this.createChatBotMessage(
      "Revolutionizing App Modernization for Tomorrow's Success!",
      {
        widget: "devOps",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleLocalStats = () => {
    const message = this.createChatBotMessage(
      "Some Info about Cloud Services.",
      {
        widget: "localStatistics",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleContact = () => {
    const message = this.createChatBotMessage(
      "Some Info about DevOps Solutions.",
      {
        widget: "emergencyContact",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };
  handleITSecurity = () => {
    const message = this.createChatBotMessage(
      "Shielding Cyberspace: A Comprehensive Guide to IT Security",
      {
        widget: "itSecurity",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };
  handleOpenings = () => {
    const message = this.createChatBotMessage(
      "AI/ML Solutions: Empowering Your IT Services",
      {
        widget: "jobOpenings",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handlePirai = () => {
    var pirai = [
      "The Pirai story started with a dream, a desire to redefine the digital landscape through cutting-edge cloud solutions. That’s when, our founder and Chief Executive Gokul A N, formed a team of tech-savvy trailblazers to write an epic digital transformation story.From humble beginnings, we embarked on a mission to leverage the power of the cloud in helping businesses thrive in an increasingly interconnected digital world. Today, Pirai Infotech is at the forefront of cloud innovation. It has been one of the fastest-growing companies with an average growth rate of 100% YoY for the past 5 years.We are proud to have spent 250,000 man-hours working on automation. We are continuously pushing boundaries and delivering exceptional value to our clients worldwide across industries — retail, telecom, banking, engineering, and high technology. Our client line-up is a mix of Fortune 500 companies, dynamic startups, and global enterprises.",
      "Lead Your Industry With Our Tailor-made IT Solutions",

      "Streamlining Infrastructure with AWS CloudFormation",
    ];

    var randomPirai = pirai[Math.floor(Math.random() * pirai.length)];

    const message = this.createChatBotMessage(randomPirai);

    this.addMessageToState(message);
  };

  handleThanks = () => {
    const message = this.createChatBotMessage("You're welcome, and stay safe!");

    this.addMessageToState(message);
  };

  isEmailProvided = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem("hasAskedEmail") || null;
    }
    return null;
  };

  handleAiApi = (message) => {
    const email = this.isEmailProvided();
    // console.log("Email in handleAiApi:", email);
    // console.log("handleAiApi method called with message:", message);

    axios
      .post("https://piraiinfo.com/api/chat/", {
        query: message,
        email: email || "",
      })
      .then((response) => {
        const apiResponse = response.data;
        const chatbotMessage = this.createChatBotMessage(apiResponse.response, {
          widget: "aiapi",
          loading: true,
          withAvatar: true,
        });

        this.addMessageToState(chatbotMessage);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);

        const errorMessage =
          "It seems like there is a glitch right now. Could you please try again later?";
        const errorChatbotMessage = this.createChatBotMessage(errorMessage, {
          widget: "aiapi",
          loading: false,
          withAvatar: true,
        });

        this.addMessageToState(errorChatbotMessage);
      });
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
