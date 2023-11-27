import React from "react";
import ellipsis from "../assets/icon-ellipsis.svg";
const Card = ({ tab, title, current, previous, icon, color }) => {
  return (
    <div>
      <div style={{ backgroundColor: color }} className="rounded-xl md:w-52 ">
        <div className="relative overflow-hidden">
          <div className="absolute right-5 -top-3">
            <img src={icon} />
          </div>
          <div className="h-10"></div>
        </div>
        <div className="relative">
          <div className="bg-d-blue rounded-xl p-5 hover:bg-h-blue">
            <div className="flex items-center justify-between mb-3">
              <h3 className=" text-white">{title}</h3>
              <button>
                <img src={ellipsis} alt={"options"} />
              </button>
            </div>
            <div className="flex items-center md:items-start justify-between md:flex-col ">
              <h2 className="text-white text-3xl">{current}hrs</h2>
              <p className="text-p-blue text-sm">
                {tab === "daily"
                  ? "Yesterday "
                  : tab === "weekly"
                    ? "Last Week "
                    : "Last Month "}
                - {previous}hrs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
