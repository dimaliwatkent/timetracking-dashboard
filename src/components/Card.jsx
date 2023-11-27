import React from "react";
import ellipsis from "../assets/icon-ellipsis.svg";
const Card = ({ tab, title, current, previous, icon, color }) => {
  return (
    <div>
      <div style={{ backgroundColor: color }} className="rounded-xl">
        <div className="relative">
          <div className="absolute end-0">
            <img src={icon} />
          </div>
        </div>
        <div className="pt-12">
          <div className="bg-d-blue rounded-xl p-5 overflow-hidden">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">{title}</h3>
              <button>
                <img src={ellipsis} alt={"options"} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-white text-2xl">{current}hrs</h2>
              <p className="text-p-blue">
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
