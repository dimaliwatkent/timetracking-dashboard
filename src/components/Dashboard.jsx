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
    <div className="container flex flex-col md:flex-row m-auto gap-5 py-14 md:pt-32 justify-center">
      <div className="rounded-xl w-full md:w-auto bg-d-blue">
        {" "}
        <div className="bg-r-blue rounded-xl flex md:flex-col items-center md:items-start p-5">
          <div>
            <img
              src={jeremy}
              alt="Jeremy Robson Image"
              className="h-16 w-auto border-2 border-white rounded-full mr-5"
            />
          </div>
          <div>
            <p className="text-p-blue">Report for</p>
            <h2 className="text-white text-xl md:text-2xl">Jeremy Robson</h2>
          </div>
        </div>
        <div className="flex md:flex-col justify-around md:items-start gap-3 px-5 py-3">
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
        <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
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
