import React, { useState, useEffect, useCallback } from "react";
import Chatbot from "react-chatbot-kit";
import { Fade, Flip } from "react-reveal";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import "react-chatbot-kit/build/main.css";

const ChatbotComponent = () => {
  const [showBot, setShowBot] = useState(false);
  const [userMessages, setUserMessages] = useState([]);
  const [showClearChat, setShowClearChat] = useState(false);

  const toggleBot = () => {
    setShowBot(!showBot);
  };
  const clearChatHistory = useCallback(() => {
    setShowBot(false);
    setUserMessages([]);
    setShowClearChat(false);
    setTimeout(() => {
      setShowBot(true);
    }, 100);
  }, [userMessages]);

  return (
    <>
      {showBot && (
        <Fade big>
          <div className="app-chatbot-container">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              headerText="Pirai Assistance Bot"
              placeholderText="Ask Your Question?"
              floating={true}
              floatingIcon="Pirai_chatboticon.svg"
              inputAttributes="enabled"
              opened={showBot}
              handleEnd={() => setShowBot(false)}
            />
            <button
              className="app-close-button"
              onClick={() => setShowBot(false)}
            >
              <img alt="CloseIcon" src="/chaticons/PiraiBotIconClose.svg" />
            </button>

            <button className="bot-clear-btn" onClick={clearChatHistory}>
              Clear Chat
            </button>
          </div>
        </Fade>
      )}
      <Flip left cascade>
        <button className="app-chatbot-button" onClick={toggleBot}>
          {showBot ? (
            <img alt="BotAvatar" src="/chaticons/hmChatIco.svg" />
          ) : (
            <img alt="BotAvatar" src="/chaticons/hmChatIco.svg" />
          )}
        </button>
      </Flip>
    </>
  );
};

export default ChatbotComponent;
