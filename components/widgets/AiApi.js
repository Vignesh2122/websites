import React, { useState, useEffect } from "react";
import axios from "axios";
import AskingEmail from "../widgets/AskingEmail";

const isEmailProvided = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedEmail = localStorage.getItem("hasAskedEmail");
    // console.log("EnteredEmailLocalStorage", storedEmail);
    return !!storedEmail;
  }
  return false;
};
const Aiapi = ({ message }) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof message === "undefined") {
      // console.error("Message is undefined");
      return;
    }

    const getResponse = async () => {
      try {
        const storedEmail = isEmailProvided();
        // console.log("Email:", storedEmail);

        const apiResponse = await axios.post(
          "https://piraiinfo.com/api/chat/",
          {
            query: message,
            email: storedEmail || "",
          }
        );
        setResponse(apiResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from API:", error);
        setLoading(false);
      }
    };

    getResponse();
  }, [message]);

  return <div></div>;
};

export default Aiapi;
