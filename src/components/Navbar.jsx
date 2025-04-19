import React, { useEffect, useState } from "react";
import Logo from "../assets/ak-removebg-preview.png";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

const Navbar = ({ sidebar, setSidebar }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`w-screen top-0 z-40 md:mb-10 mb-4 flex items-center transition-colors duration-300 justify-between md:px-14 px-8 fixed ${
        scrolled ? "bg-zinc-900 opacity-95 shadow-md" : ""
      }`}
    >
      <div className="flex flex-shrink-0 items-center gap-5 md:gap-0">
        <FaBars
          size={20}
          onClick={() => setSidebar(!sidebar)}
          className="cursor-pointer md:hidden"
        />
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
          <a href="#education">
            <li className="cursor-pointer">Education</li>
          </a>
          <a href="#technologies">
            <li className="cursor-pointer">Skills</li>
          </a>
          <a href="#experience">
            <li className="cursor-pointer">Experience</li>
          </a>
          <a href="#projects">
            <li className="cursor-pointer">Projects</li>
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
