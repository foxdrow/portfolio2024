import React from "react";
import marvelApp1 from "../assets/img/marvelApp1.png";
import marvelApp2 from "../assets/img/marvelApp2.png";
import graphql from "../assets/img/graphql.png";
import twitter from "../assets/img/twitter.png";
import cssfr1 from "../assets/img/cssfr1.png";
import cssfr2 from "../assets/img/cssfr2.png";
import IRC from "../assets/img/IRC.png";
import API from "../assets/img/expressApi.png";
import GNS3 from "../assets/img/gns3.png";

import WorkCard from "../components/WorkCard/WorkCard";

export default function Work() {
  return (
    <div id="work">
      <h2>Work projects</h2>
      <section id="projects">
        <WorkCard
          title="Marvel App"
          description="This web app is built in React, Nodejs and styling with sass and is a glossary of all Character, Comics and Creators of Marvel Comics."
          skill="TypeScript React Sass ApiRequest"
          topImage={marvelApp1}
          image={marvelApp2}
          link="https://github.com/foxdrow/MarvelApp"
        />
        <WorkCard
          title="GraphQL API"
          description="I have create a basic social API using GraphQL and the prisma.io v2 ORM"
          skill="JavaScript GraphQL Node.js PrismaV2"
          image={graphql}
          link="https://github.com/foxdrow/basicGraphQLSocialAPI"
          right
        />
        <WorkCard
          title="Network"
          description="I am able to simulate and set up an entire network with virtual machines"
          skill="GNS3 PacketTracer Wireshark VMware"
          image={GNS3}
          link="#"
        />
        <WorkCard
          title="Twitter PHP"
          description="Create a clone of twitter with many functionality and features (tweet, messaging, followers, following...)"
          skill="PHP MySql JavaScript Jquery"
          image={twitter}
          link="https://github.com/foxdrow/Php-twitter"
          right
        />
        <WorkCard
          title="My CSS Framework"
          description="A CSS Framework realise with Sass"
          skill="SCSS CSS HTML"
          topImage={cssfr1}
          image={cssfr2}
          link="https://github.com/foxdrow/my_css_framework"
        />
        <WorkCard
          title="IRC chat Application"
          description="A IRC chat Application create with Socket.io"
          skill="JavaScript Socket.io React Node.js SCSS"
          image={IRC}
          link="https://github.com/foxdrow/IRC-Socket.io"
          right
        />
        <WorkCard
          title="REST API Node.js"
          description="A complete REST Api using asynchronous requests, and communicate with a MongoBD database using mongoose"
          skill="JavaScript Node.js MongoBD Mongoose Postman"
          image={API}
          link="https://github.com/foxdrow/task-manager-rest-api"
        />
        <p className="conclusion">
          And other projects available on my github !
        </p>
      </section>
    </div>
  );
}
