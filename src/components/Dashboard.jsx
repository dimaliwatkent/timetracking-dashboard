import React, { useState } from "react";
import { categories } from "../constants";
import Card from "./Card.jsx";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div>
        {["Daily", "Weekly", "Monthly"].map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(tab.toLowerCase())}
            className={
              activeTab === tab.toLowerCase()
                ? "text-red-500 font-bold"
                : "text-red-500 font-normal"
            }
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {categories.map((item, index) => (
          <div key={index}>
            <Card
              tab={activeTab}
              title={item.title}
              current={item.timeframes[activeTab].current}
              prevous={item.timeframes[activeTab.previous]}
              icon={item.icon}
              color={item.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
