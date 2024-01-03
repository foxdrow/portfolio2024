import React from "react";
import marvelApp1 from "../assets/img/marvelApp1.png";
import marvelApp2 from "../assets/img/marvelApp2.png";
import graphql from "../assets/img/graphql.png";
import twitter from "../assets/img/twitter.png";
import snap from "../assets/img/snap.png";
import cssfr1 from "../assets/img/cssfr1.png";
import cssfr2 from "../assets/img/cssfr2.png";
import IRC from "../assets/img/IRC.png";
import API from "../assets/img/expressApi.png";
import GNS3 from "../assets/img/gns3.png";

export default function Work() {
  return (
    <div id="work">
      <h2>Work projects</h2>
      <section id="projects">
        <div id="marvelApp">
          <a href="https://github.com/foxdrow/MarvelApp" target="_blank">
            <h4>Marvel App</h4>
          </a>
          <p>
            This web app is built in React, Nodejs and styling with sass and is
            a glossary of all Character, Comics and Creators of Marvel Comics.
          </p>
          <p className="skill">TypeScript React Sass ApiRequest</p>
          <a href="https://github.com/foxdrow/MarvelApp" target="_blank">
            <img src={marvelApp1} className="topImage"></img>
            <img src={marvelApp2}></img>
          </a>
        </div>
        <div id="graphql">
          <a
            href="https://github.com/foxdrow/basicGraphQLSocialAPI"
            target="_blank"
          >
            <h4>GraphQL API</h4>
          </a>
          <p>
            I have create a basic social API using GraphQL and the prisma.io v2
            ORM
          </p>
          <p className="skill">JavaScript GraphQL Node.js PrismaV2</p>
          <a
            href="https://github.com/foxdrow/basicGraphQLSocialAPI"
            target="_blank"
          >
            <img src={graphql}></img>
          </a>
        </div>
        <div id="network">
          <h4>Network</h4>
          <p>
            I am able to simulate and set up an entire network with virtual
            machines
          </p>
          <p className="skill">GNS3 PacketTracer Wireshark VMware</p>
          <img src={GNS3}></img>
        </div>
        <div id="twitter">
          <a href="https://github.com/foxdrow/Php-twitter" target="_blank">
            <h4>Twitter PHP</h4>
          </a>
          <p>
            Create a clone of twitter with many functionality and features
            (tweet, messaging, followers, following...)
          </p>
          <p className="skill">PHP MySql JavaScript Jquery</p>
          <a href="https://github.com/foxdrow/Php-twitter" target="_blank">
            <img src={twitter}></img>
          </a>
        </div>
        <div id="cssfr">
          <a href="https://github.com/foxdrow/my_css_framework" target="_blank">
            <h4>My CSS Framework</h4>
          </a>
          <p>A CSS Framework realise with Sass</p>
          <p className="skill">SCSS CSS HTML</p>
          <a href="https://github.com/foxdrow/my_css_framework" target="_blank">
            <img src={cssfr1} className="topImage"></img>
            <img src={cssfr2}></img>
          </a>
        </div>
        <div id="irc">
          <a href="https://github.com/foxdrow/IRC-Socket.io" target="_blank">
            <h4>IRC chat Application</h4>
          </a>
          <p>A IRC chat Application create with Socket.io</p>
          <p className="skill">JavaScript Socket.io React Node.js SCSS</p>
          <a href="https://github.com/foxdrow/IRC-Socket.io" target="_blank">
            <img src={IRC}></img>
          </a>
        </div>
        <div id="api">
          <a
            href="https://github.com/foxdrow/task-manager-rest-api"
            target="_blank"
          >
            <h4>REST API Node.js</h4>
          </a>
          <p>
            A complete REST Api using asynchronous requests, and communicate
            with a MongoBD database using mongoose
          </p>
          <p className="skill">JavaScript Node.js MongoBD Mongoose Postman</p>
          <a
            href="https://github.com/foxdrow/task-manager-rest-api"
            target="_blank"
          >
            <img src={API}></img>
          </a>
        </div>
        <div id="snap">
          <a href="https://github.com/foxdrow/SnapchatClone" target="_blank">
            <h4>Snapchat React Native</h4>
          </a>
          <p>A Snapchat clone built with React native 👻</p>
          <p className="skill">JavaScript ReactNative Node.js</p>
          <a href="https://github.com/foxdrow/SnapchatClone" target="_blank">
            <img src={snap}></img>
          </a>
        </div>
        <p className="conclusion">
          And other projects available on my github !
        </p>
      </section>
    </div>
  );
}
