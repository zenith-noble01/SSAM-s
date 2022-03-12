import React, { useState } from "react";
import AboutUs from "../components/aboutus/AboutUs";
import Contact from "../components/contact/Contact";
import First from "../components/first/First";
import Members from "../components/members/Members";
import Nav from "../components/Nav/Nav";
import "./Context.css";

const Context = () => {
  const [over, setOver] = useState(false);
  return (
    <div className="contextPage">
      <Nav setOver={setOver} />
      <div className="contextContainer">
        <First over={over} setOver={setOver} />
        <AboutUs />
        <Members />
        <Contact />
      </div>
    </div>
  );
};

export default Context;
