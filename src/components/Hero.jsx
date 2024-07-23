import React from "react";
import Profile from "../assets/kevinRushProfile.png";
import { CgFileDocument } from "react-icons/cg";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "CS Student", "MERN Stack Developer"],
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
    <div className="border-b pb-4 border-neutral-900 lg:mb-35 h-auto">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col md:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-2xl font-thin pl-1 md:mt-10 lg:mt-16 mb-2 md:text-center text-start"
            >
              Hi,
            </motion.h1>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="md:pb-7 pb-5 text-5xl md:text-6xl lg:text-7xl tracking-tight"
            >
              I'm Ashkan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              a {text}
            </motion.span>
            <motion.p
              variants={container(0.75)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl md:py-6 py-2 font-light tracking-tighter"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              consectetur exercitationem consequatur a, possimus mollitia
              distinctio architecto incidunt dolorem, in amet
            </motion.p>
            <div className="flex flex-wrap items-center gap-8 md:mb-0 mb-8">
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.5 }}
                href="#contact"
              >
                <button className="bg-slate-700 py-1 px-2 rounded">
                  Connect with me
                </button>
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.5 }}
                href="../assets/Resume.pdf"
                download="Resume.pdf"
              >
                <button className="bg-slate-700 py-1 px-2 rounded">
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
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              src={Profile}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
