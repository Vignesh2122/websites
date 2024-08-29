import { Button, Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AskingEmail = ({ actionProvider }) => {
  const [msg, setMsg] = useState();
  const [succmsg, setSuccmsg] = useState(false);
  const [handleOverviewCalled, setHandleOverviewCalled] = useState(false);

  useEffect(() => {
    const hasAskedEmail = localStorage.getItem("hasAskedEmail");

    if (hasAskedEmail && !handleOverviewCalled) {
      setMsg("Email already provided. Thank you!");
      setSuccmsg(true);

      const message = actionProvider.createChatBotMessage(
        "Here's a quick overview of what I can help you with.",
        {
          withAvatar: false,
          delay: 400,
          widget: "overview",
        }
      );

      actionProvider.addMessageToState(message);

      setHandleOverviewCalled(true);
    }
  }, [handleOverviewCalled]);

  const handleEmailSubmit = () => {
    const email = document.getElementById("emailInput").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (isValidEmail) {
      axios
        .post("https://piraiinfo.com/api/update-email", { email })
        .then((response) => {
          localStorage.setItem("hasAskedEmail", email);
          // console.log("handleOverview will be called with email:", email);
          actionProvider.handleOverview(email);
          actionProvider.handleAiApi(email);
        })
        .catch((error) => {
          console.error("Error making API request:", error);
        });
      setMsg("Thank you for sharing your email with us.");
      setSuccmsg(true);
      setHandleOverviewCalled(true);
    } else {
      console.error("Invalid email address");
      setMsg("Invalid email address");
    }
  };

  const handleKeyPress = (event) => {
    console.log("Key pressed:", event.key);
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("Enter key prevented");
      handleEmailSubmit();
    }
  };

  const isEmailProvided = localStorage.getItem("hasAskedEmail");

  return (
    <div className="pbot-iscr">
      {!isEmailProvided && (
        <>
          <Input
            id="emailInput"
            placeholder="Email"
            onKeyPress={handleKeyPress}
          />
          <Button type="primary" onClick={handleEmailSubmit}>
            Submit
          </Button>
          <p className={succmsg ? "succ-sty" : ""}>{msg}</p>
        </>
      )}
      <img
        className="w-[60%] m-auto"
        alt="BotAvatar"
        src="/chaticons/PiraiBotIcon.svg"
      />
    </div>
  );
};

export default AskingEmail;
