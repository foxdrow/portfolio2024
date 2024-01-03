import React from "react";
import "./SkillsItem.scss";

export const SkillsItem = ({ title, skills }) => {
  return (
    <React.Fragment>
      <h4>{title}</h4>
      <p className="skill">{skills}</p>
    </React.Fragment>
  );
};
export default SkillsItem;
