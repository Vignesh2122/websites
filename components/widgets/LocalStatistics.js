import React, { useState, useEffect } from "react";

import { getData } from "../chatbot/data";

const Statistics = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStats = async () => {
      const stats = await getData();

      setStats(stats);
      setLoading(false);
    };
    getStats();
  }, []);

  return (
    <div className="stats">
      <div className="column-left">
        <p>
          <b>Unlock the Power of the Cloud</b> Empower your business with
          scalable and secure cloud solutions. Significantly lower the costs
          spent on expensive IT hardware, software & maintenance.
        </p>
        <ul className="list-disc">
          <li>Managed Cloud Services</li>
          <li>Cloud Migration</li>
          <li>Multi-Cloud Management</li>
          <li>Cloud Consulting & Advisory</li>
          <li>Cloud Security</li>
          <li>Hybrid Security</li>
        </ul>
        <a href="https://www.piraiinfo.com/cloud/">For More Details</a>
      </div>
    </div>
  );
};

export default Statistics;
