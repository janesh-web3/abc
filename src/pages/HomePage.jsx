import React from "react";
import { Particle } from "../components/Particle";
import AnimCursor from "../components/AnimCursor";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import { styles } from "../styles";
import Stats from "../components/Stats";
import About from "../components/About";
import WhatABC from "../components/ABC/WhatABC";
import CTA from "../components/CTA";
import Footer from "../components/footer/Footer";
import Brand from "../components/brand/Brand";
import Clients from "../components/client/Clients";

const HomePage = () => {
  return (
    <>
      <Particle />
      <AnimCursor />
      <NavBar />

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Brand/>
          <About />
          <WhatABC />
          <Clients/>
          <CTA />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
