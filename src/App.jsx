import React, { Fragment } from "react";
import "./styles/style.scss";
import Navbar from "./sections/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";

function App() {
  return (
    <Fragment>
      <div className="homeSpace">
        <Navbar />
        <Home />
      </div>
      <About />
      <Work />
      <Contact />
    </Fragment>
  );
}
export default App;