import React from "react";

const Card = ({ tab, title, current, previous, icon, color }) => {
  return (
    <div>
      <p>
        {tab}
        {title}
        {current}
        {previous}
        {icon}
        {color}
      </p>
    </div>
  );
};

export default Card;
