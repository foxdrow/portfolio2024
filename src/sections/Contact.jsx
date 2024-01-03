import React from "react";
import anime from "../assets/img/72757.gif";
export default function Contact() {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <section id="explore">
        <div className="textBox">
          <h3>Let's explore</h3>
          <p>“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”</p>
          <h4>Mail</h4>
          <p className="mail"><a href="mailto:rapha.saverys@gmail.com">rapha.saverys@gmail.com</a></p>
        </div>
        <img src={anime}></img>
      </section>
    </div>
  );
}
