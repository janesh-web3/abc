import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
import AnimCursor from "../components/AnimCursor";
import Testimonials from "../components/Testimonials";
import { styles } from "../styles";

const AboutPage = () => {
  return (
    <>
      <AnimCursor />
      <NavBar />

      <div className={`bg-primary  ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Testimonials />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
