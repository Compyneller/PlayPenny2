import React from "react";
import image from "../../../assets/weekly-leaderboard.gif";

const PromHeader = () => {
  return (
    <div className="container" style={{ padding: "3rem 1rem" }}>
      <img src={image} className="w-100" alt="" />
    </div>
  );
};

export default PromHeader;
