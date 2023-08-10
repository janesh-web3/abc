import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
import AnimCursor from "../components/AnimCursor";
import Features from "../components/Services";
import { styles } from "../styles";

const ServicesPage = () => {
  return (
    <>
      <AnimCursor/>
      <NavBar />
      <div className={`bg-primary  ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
      <Features/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
