import React from "react";
import Logo from "../assets/ak-removebg-preview.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="top-0 z-50 mb-16 flex items-center justify-between py-0">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={Logo}
          alt="LOGO"
          className="md:mx-10 ml-2 mr-11 md:h-24 md:w-24 h-14 w-16"
        />
      </div>
      <div className="text-white selection:text-cyan-400 hidden md:flex items-center">
        <ul className="flex items-center justify-center gap-5 ">
          <a href="#about">
            <li className="cursor-pointer">About</li>
          </a>
          <a href="#projects">
            <li className="cursor-pointer">Projects</li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer">Contact</li>
          </a>
        </ul>
      </div>
      <div className="m-8 text-white text-2xl flex items-center gap-4 justify-center">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          href="https://www.linkedin.com/in/ashkan-khan-b79606216"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="cursor-pointer" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          href="https://www.github.com/ashkankhan786"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          href="https://www.instagram.com/_k.h.a.n___s.a.h.a.b_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="cursor-pointer" />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
