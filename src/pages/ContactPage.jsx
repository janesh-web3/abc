import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
import AnimCursor from "../components/AnimCursor";
import Contact from "../components/contact/Contact";
import { StarsCanvas } from "../components/canvas";
const ContactPage = () => {
  return (
    <>
      <AnimCursor />
      <NavBar />
      <div className={` bg-primary`}>
          <Contact />
          <StarsCanvas/>
        </div>
      <Footer />
    </>
  );
};

export default ContactPage;
