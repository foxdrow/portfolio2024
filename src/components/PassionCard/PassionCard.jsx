import React from "react";
import "./PassionCard.scss";

export const PassionCard = ({ title, description, image, right }) => {
  return (
    <>
      <div className={`passionCard ${right ? "rightPassionCard" : ""}`}>
        <h4>{title}</h4>
        <p>{description}</p>
        <img src={image} alt={title}></img>
      </div>
    </>
  );
};
export default PassionCard;
