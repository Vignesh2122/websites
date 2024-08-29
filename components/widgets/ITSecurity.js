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
          Dive into the intricate world of IT security with this comprehensive
          guide that explores cutting-edge strategies, best practices, and
          emerging technologies. From safeguarding data against cyber threats to
          implementing robust encryption protocols, this book equips readers
          with the knowledge and tools needed to fortify digital infrastructures
          in today&apos;s interconnected landscape. Whether you&apos;re an IT
          professional seeking advanced techniques or a beginner looking to
          grasp fundamental concepts, this resource is your essential companion
          in navigating the dynamic realm of IT security.
        </p>

        <a href="https://blog.piraiinfo.com/Code-Injection/">
          For More Details
        </a>
      </div>
    </div>
  );
};

export default Statistics;
