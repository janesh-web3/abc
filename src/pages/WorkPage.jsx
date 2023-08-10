import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
import AnimCursor from "../components/AnimCursor";
import Experience from "../components/experience/Experience";
import {styles} from "../styles"
const WorkPage = () => {
  return (
    <>
      <AnimCursor/>
      <NavBar />
      <div className={`bg-primary`}>
      <Experience/>
      </div>

      <Footer />
    </>
  );
};

export default WorkPage;
