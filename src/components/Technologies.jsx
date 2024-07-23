import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import Node from "../assets/NodeJSsvg.svg";
import JS from "../assets/JSsvg.svg";
import Java from "../assets/Javasvg.svg";
import Bootstrap from "../assets/Bootstrapsvg.svg";
import Tailwind from "../assets/Tailwindsvg.svg";
import Redux from "../assets/Reduxsvg.svg";
import Git from "../assets/Gitsvg.svg";
import { animate, motion } from "framer-motion";
const Technologies = () => {
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
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="text-center text-4xl my-20">Technologies</h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4 mb-4"
      >
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(6)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(3.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Node} alt="Node" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={JS} alt="Javascript" />
        </motion.div>
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Java} alt="Java" />
        </motion.div>
        <motion.div
          variants={iconVariant(4)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Bootstrap} alt="Bootstrap" />
        </motion.div>
        <motion.div
          variants={iconVariant(6)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Redux} alt="Redux" />
        </motion.div>
        <motion.div
          variants={iconVariant(3.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Tailwind} alt="Tailwind" />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Git} alt="Git" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
