import React from "react";
import Node from "../assets/NodeJSsvg.svg";
import JS from "../assets/JSsvg.svg";
import Java from "../assets/Javasvg.svg";
import Tailwind from "../assets/Tailwindsvg.svg";
import Redux from "../assets/Reduxsvg.svg";
import Git from "../assets/Gitsvg.svg";
import Next from "../assets/NextJS.svg";
import Python from "../assets/Python.svg";
import TF from "../assets/TF.svg";
import MySQL from "../assets/MySQL.svg";
import TS from "../assets/TS.svg";
import Flask from "../assets/Flask.svg";
import reactSVG from "../assets/React.svg";
import MongoDB from "../assets/MongoDB.svg";
import Express from "../assets/Express.svg";
import { animate, motion } from "framer-motion";

const Technologies = () => {
  const languages = [
    { name: "Java", icon: Java },
    { name: "JavaScript", icon: JS },
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: TS },
    { name: "Git", icon: Git },
  ];
  const frameworks = [
    {
      name: "React.js",
      icon: reactSVG,
    },
    { name: "Node.js", icon: Node },
    {
      name: "Express.js",
      icon: Express,
    },
    { name: "Flask", icon: Flask },
    { name: "Next.js", icon: Next },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "Redux", icon: Redux },
    { name: "TensorFlow", icon: TF },
  ];
  const databases = [
    {
      name: "MongoDB",
      icon: MongoDB,
    },
    { name: "MySQL", icon: MySQL },
  ];
  const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 pb-24 px-14" id="technologies">
      <h2 className="text-center text-4xl my-20">Technical Skills</h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col justify-center items-center gap-5 mb-8"
      >
        <h1 className="italic font-semibold text-2xl text-cyan-200">
          Languages & Tools
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {languages.map((language, index) => (
            <motion.div
              variants={iconVariant(2.5)}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.1,
                opacity: 0.8,
                transition: { duration: 0.5 },
              }}
              className="w-24 h-24 rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center"
            >
              <img src={language.icon} className="w-full" />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col justify-center items-center gap-5 mb-8"
      >
        <h1 className="italic font-semibold text-2xl text-cyan-200">
          Libraries & Frameworks
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {frameworks.map((f, i) => (
            <motion.div
              variants={iconVariant(2.5)}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.1,
                opacity: 0.8,
                transition: { duration: 0.5 },
              }}
              className="w-24 h-24 rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center"
            >
              <img src={f.icon} alt="Framework" />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col justify-center items-center gap-5 mb-8"
      >
        <h1 className="italic font-semibold text-2xl text-cyan-200">
          Databases
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {databases.map((d, i) => (
            <motion.div
              variants={iconVariant(2.5)}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.1,
                opacity: 0.8,
                transition: { duration: 0.5 },
              }}
              className="w-24 h-24 rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center"
            >
              <img src={d.icon} alt="DB" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
