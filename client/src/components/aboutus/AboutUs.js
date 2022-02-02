import React from "react";
import us from "../images/us.jpg";
import "./about.css";

const AboutUs = () => {
  return (
    <section class="aboutus" id="about">
      <h1 class="heading">
        {" "}
        <span>about</span> us{" "}
      </h1>
      <div class="row">
        <div class="image">
          <img src={us} alt="" />
        </div>
        <div class="content">
          <h3>what makes our work special?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
            ratione a officiis id temporibus autem? Quod nemo facilis
            cupiditate. Ex, vel?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet
            enim quod veritatis, nihil voluptas culpa! Neque consectetur
            obcaecati sapiente?
          </p>
          <a href="#home" class="btn">
            learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
