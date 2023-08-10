import React from "react";
// import gpt3Logo from '../../logo.svg';
import "./footer.css";
import { socialMedia } from "../../constants";
import { Link } from "react-router-dom";
import Button from "../Button";
import { logo } from "../../assets";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="gpt3__footer-btn">
    <Button title="Request Early Access"/>
    </div>

    <div className="gpt3__footer-links">
      <div className="">
        <img src={logo} alt="gpt3_logo" 
        />       
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          {" "}
          <p>Home</p>
        </Link>
        <Link
          to="/about"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          {" "}
        <p>About Us</p>
        </Link>
        <Link
          to="/services"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          {" "}
        <p>Services</p>
        </Link>
        <Link
          to="/work"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          {" "}
        <p>Work</p>
        </Link>
        <Link
          to="/contact"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          {" "}
        <p>Contact</p>
        </Link>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>ABC Nepalganj, Banke</p>
        <p>9762307366</p>
        <p>info@abc.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2023 ABC. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
