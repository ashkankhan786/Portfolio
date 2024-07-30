import React from "react";
import Profile from "../assets/ABOUT2.png";
import { CgFileDocument } from "react-icons/cg";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "CS Student",
      "MERN Stack Developer",
      "Professional Coder",
    ],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });
  return (
    <div className="border-b pb-4 border-neutral-900 lg:mb-35 h-auto px-14">
      <div className="flex flex-wrap md:flex-row flex-col-reverse">
        <div className="w-full md:w-1/2 md:pl-12">
          <div className="flex flex-col md:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-3xl font-thin pl-1 md:mt-10 lg:mt-16 mb-3 text-center"
            >
              &mdash; Hi
            </motion.h1>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="md:pb-5 pb-5 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-center"
            >
              I'm Ashkan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="font-medium mb-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent text-center"
            >
              a {text}
              <Cursor cursorColor="purple" />
            </motion.span>
            <div className="flex flex-col flex-wrap items-center gap-8 md:mb-0 mb-8">
              <div className="md:my-6 my-1 text-white md:text-3xl text-2xl flex items-center md:gap-8 gap-6 md:justify-center justify-start">
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25, delay: 0 },
                  }}
                  href="https://www.linkedin.com/in/mohd-ashkan-khan-b79606216"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="cursor-pointer" />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25, delay: 0 },
                  }}
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
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25, delay: 0 },
                  }}
                  href="https://www.instagram.com/_k.h.a.n___s.a.h.a.b_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="cursor-pointer" />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25, delay: 0 },
                  }}
                  href="https://www.leetcode.com/ashkan_khan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLeetcode className="cursor-pointer" />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25, delay: 0 },
                  }}
                  href="mailto:ashkankhan728@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoIosMail className="cursor-pointer text-4xl" />
                </motion.a>
              </div>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.5 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1, delay: 0 },
                }}
                href="/Ashkan_Resume.pdf"
                download
              >
                <button className="bg-slate-950 border-neutral-500 border-2 py-1 px-2 rounded">
                  <div className="flex items-center justify-center gap-2">
                    <CgFileDocument /> <span>Resume</span>
                  </div>
                </button>
              </motion.a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex justify-center">
            <div className=" border-purple-300 mt-5 mb-8 md:rounded-none rounded-full md:border-0 border-[12px]">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0 }}
                src={Profile}
                alt="Profile"
                className="md:w-[35rem]  w-52 md:rounded-none rounded-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
