import React from "react";
import AboutUs from "../components/aboutus/AboutUs";
import Contact from "../components/contact/Contact";
import First from "../components/first/First";
import Members from "../components/members/Members";
import "./Context.css";

const Context = () => {
  return (
    <div className="contextPage">
      <div className="contextContainer">
        <First />
        <AboutUs />
        <Members />
        <Contact />
      </div>
    </div>
  );
};

export default Context;
