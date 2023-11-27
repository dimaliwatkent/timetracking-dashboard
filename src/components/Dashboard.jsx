import React, { useState } from "react";
import { categories } from "../constants";
import Card from "./Card.jsx";
import jeremy from "../assets/image-jeremy.png";
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="container flex flex-col m-auto gap-5 pt-14">
      <div className="rounded-xl w-full bg-d-blue">
        <div className="bg-r-blue rounded-xl flex items-center p-5">
          <div>
            <img
              src={jeremy}
              alt="Jeremy Robson Image"
              className="h-16 w-auto border-2 border-white rounded-full mr-5"
            />
          </div>
          <div>
            <p className="text-p-blue">Report for</p>
            <h2 className="text-white text-xl">Jeremy Robson</h2>
          </div>
        </div>
        <div className="flex justify-around px-5 py-3">
          {["Daily", "Weekly", "Monthly"].map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(tab.toLowerCase())}
              className={
                activeTab === tab.toLowerCase()
                  ? "text-white "
                  : "text-vp-blue "
              }
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          {categories.map((item, index) => (
            <div key={index}>
              <Card
                tab={activeTab}
                title={item.title}
                current={item.timeframes[activeTab].current}
                previous={item.timeframes[activeTab].previous}
                icon={item.icon}
                color={item.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
