import React from "react";
import Logo from "../assets/ak-removebg-preview.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="top-0 z-50 md:mb-10 mb-4 flex items-center justify-between py-0 px-14">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={Logo}
          alt="LOGO"
          className="md:mx-10 ml-2 mr-11 md:h-24 md:w-24 h-14 w-16"
        />
      </div>
      <div className="text-white selection:text-cyan-400 mx-8 hidden font-medium md:flex items-center">
        <ul className="flex items-center justify-center gap-5 ">
          <a href="#about">
            <li className="cursor-pointer">About</li>
          </a>
          <a href="#technologies">
            <li className="cursor-pointer">Technologies</li>
          </a>
          <a href="#projects">
            <li className="cursor-pointer">Projects</li>
          </a>
          <a href="#education">
            <li className="cursor-pointer">Education</li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer">Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
