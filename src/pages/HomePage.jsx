// src/pages/HomePage.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";
import Service from "../components/Service";
import Offering from "../components/Offering";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Service />
      <Offering />
      <Testimonial />
    </>
  );
};

export default HomePage;
