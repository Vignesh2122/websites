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
          Experience seamless transformations with our cutting-edge app
          modernization solutions. <br />
          Empower your business with the latest technologies and elevate your
          digital presence. <br />
          Stay ahead in the competitive landscape with our expert guidance and
          innovative strategies. <br />
          Explore our offerings today and embark on a journey towards
          unparalleled success!
        </p>

        <a href="https://piraiinfo.com/application/">For More Details</a>
      </div>
    </div>
  );
};

export default Statistics;
