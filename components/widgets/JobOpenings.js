import React from "react";

import Link from "./Link";

const DeliveryLink = () => {
  const getUrl = () => {
    return `https://www.hpb.health.gov.lk/en/covid-19#:~:text=Delivery%20of%20medicine%20from%20hospital%20clinics`;
  };

  return (
    <div className="stats">
      <div className="column-left">
        <p>
          Welcome to our AI/ML Solutions, designed to revolutionize your IT
          services! Whether you&apos;re seeking streamlined data analysis,
          predictive maintenance, or enhanced customer experiences, our AI/ML
          capabilities are here to transform your business operations.
        </p>

        <a href="https://www.blog.piraiinfo.com/AI-Revolution-Transforming-Industries/">
          For More Details
        </a>
      </div>
    </div>
  );
};

export default DeliveryLink;
