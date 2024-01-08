import React from "react";

import SkillsItem from "../components/SkillsItem/SkillsItem";
import PassionCard from "../components/PassionCard/PassionCard";

import data from "../data.json";

export default function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <section id="whoIAm">
        <div className="textBox">
          <h3>Who I am</h3>
          <p>{data.whoIAm.description}</p>
          <p className="skill">{data.whoIAm.softSkills}</p>
          {data.whoIAm.skills.map((skill, index) => (
            <SkillsItem key={index} title={skill.title} skills={skill.skills} />
          ))}
          <div className="cvButton">
            <a
              className="CV"
              href="/assets/download/RESUME-Raphael-Saverys.pdf"
              download
              alt="CV"
            >
              CV
            </a>
          </div>
        </div>
        <img
          src="/assets/img/Logo foxdrow blue.webp"
          className="logoBig"
          alt="logo"
        ></img>
      </section>
      <section id="passions">
        <h3>Passions</h3>
        <div className="intro">
          <p>
            "Passion is energy. Feel the power that comes from focusing on what
            excites you."
          </p>
          <p className="skill">
            Creativity Ambition Fantasy Imagination Fun Relaxation
          </p>
        </div>
        {data.passions.map((passion, index) => (
          <PassionCard
            key={index}
            title={passion.title}
            description={passion.description}
            image={passion.image}
            right={(index + 1) % 2 === 0}
          />
        ))}
      </section>
    </div>
  );
}
