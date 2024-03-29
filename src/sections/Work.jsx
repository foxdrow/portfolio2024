import React, { Fragment } from "react";
import data from "../data.json";
import WorkCard from "../components/WorkCard/WorkCard";

export default function Work() {
  return (
    <div id="work">
      <h2>Work projects</h2>
      <section id="projects">
        {data.works.map((project, index) => (
          <Fragment key={index}>
            <WorkCard
              title={project.title}
              description={project.description}
              skill={project.skill}
              topImage={project.topImage}
              image={project.image}
              link={project.link}
              right={(index + 1) % 2 === 0}
            />
          </Fragment>
        ))}
        <p className="conclusion">And other projects available on my github!</p>
      </section>
    </div>
  );
}
