import React from "react";

import "./styles/style.scss";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";

function App() {
  return (
    <div>
      <div className="homeSpace">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Work />
      <Contact />
    </div>
  );
}
export default App;
