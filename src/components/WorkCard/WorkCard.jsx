import React from "react";
import "./WorkCard.scss";

export const WorkCard = ({
  title,
  description,
  skill,
  image,
  topImage,
  link,
  right
}) => {
  return (
    <div className={`workCard ${right ? "rightWorkCard" : ""}`}>
      <a href={link} target="_blank" rel="noreferrer">
        <h4>{title}</h4>
      </a>
      <p>{description}</p>
      <p className="skill">{skill}</p>
      <a href={link} target="_blank" rel="noreferrer">
        {topImage && (
          <img src={topImage} className="topImage" alt="topImage"></img>
        )}
        <img src={image} alt={title}></img>
      </a>
    </div>
  );
};
export default WorkCard;
