import React from "react";
import AboutUs from "../components/aboutus/AboutUs";
import Contact from "../components/contact/Contact";
import First from "../components/first/First";
import Members from "../components/members/Members";
import Nav from "../components/Nav/Nav";
import "./Context.css";

const Context = () => {
  return (
    <div className="contextPage">
      <Nav />
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
