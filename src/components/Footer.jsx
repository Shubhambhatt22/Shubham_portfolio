import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faEnvelope,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as solidEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer id="contactMe" className=" pb-10">
      <div className="flex mx-auto items-center justify-center space-x-8 ">
       <a href="https://www.linkedin.com/in/shubham-bhatt-06a137203/"> <FontAwesomeIcon icon={faLinkedin}  size="2x" /></a>
        <a href="https://www.instagram.com/shubham_bhatt_2"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
       <a href= "mailto:shubhbhatt101@gmail.com"><FontAwesomeIcon icon={solidEnvelope} size="2x" /></a> 

      </div>
    </footer>
  );
};

export default Footer;
