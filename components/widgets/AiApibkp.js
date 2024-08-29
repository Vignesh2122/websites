import React, { useState, useEffect } from "react";
import axios from "axios";

const Aiapi = ({ message }) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof message === "undefined") {
      console.error("Message is undefined");
      return;
    }

    const getResponse = async () => {
      try {
        const apiResponse = await axios.post(
          "https://test.piraiinfo.com/api/chat/",
          {
            query: message,
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
