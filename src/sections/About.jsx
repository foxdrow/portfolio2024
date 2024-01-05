import React from "react";

import SkillsItem from "../components/SkillsItem/SkillsItem";
import PassionCard from "../components/PassionCard/PassionCard";

export default function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <section id="whoIAm">
        <div className="textBox">
          <h3>Who I am</h3>
          <p>
            I am Raphael, Full-stack developer with knowledge of JavaScript
            frameworks, both frontend and backend with a focus on React and
            Node.js.
          </p>
          <p>
            I am above all a self-taught person, but I followed a 1-year web
            curriculum at Epitech Nantes.
          </p>
          <p className="skill">
            Autonomous ProblemSolving Eager Analytic Organized Teamwork
            QuickLearner
          </p>
          <SkillsItem
            title="Languages"
            skills="JavaScript TypeScript HTML CSS PHP Python SQL"
          />
          <SkillsItem
            title="Framework"
            skills="React.js Next.js ReactNative Node.js GraphQL Jest Redux Express.js MySQL PostgreSQL MongoDB Sass"
          />
          <SkillsItem
            title="Computer Network"
            skills="Protocols TCP/IP Subnetting Routing Tracing DNS VLan Cloud LoadBalancing"
          />
          <SkillsItem
            title="Others"
            skills="Git GitHub Docker Heroku AWS Vim PhotoShop Adobe XD"
          />
          <div className="cvButton">
            <a className="CV" href="/assets/download/RESUME-Raphael-Saverys.pdf" download alt="CV">
              CV
            </a>
          </div>
        </div>
        <img src="/assets/img/Logo foxdrow blue.png" className="logoBig" alt="logo"></img>
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
        <PassionCard
          title="Video games"
          description="Improve my creativity."
          image="/assets/img/AdorableShrillCougar-size_restricted.gif"
        />
        <PassionCard
          title="Reading"
          description="Relax me and develop my Imagination."
          image="/assets/img/catRead.webp"
          right
        />
        <PassionCard
          title="Classical music"
          description="Help me to stay focus."
          image="/assets/img/music.jpg"
        />
      </section>
    </div>
  );
}
