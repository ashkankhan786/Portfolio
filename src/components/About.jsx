import React from "react";
import AboutImg from "../assets/ABOUT2.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 md:pr-14" id="about">
      <h2 className="my-20 text-center text-4xl md:px-0 px-14">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/2 lg:pr-10 lg:pt-10 lg:pb-10 items-center justify-start flex">
          <div className="border border-white md:pt-6 md:pr-6 md:pb-6 md:pl-20 pt-4 pr-4 pb-4 pl-10 flex items-center justify-center rounded-r-full bg-gradient-to-t from-cyan-400 via-slate-400 to-purple-400">
            <div className="border-[20px] border-white w-auto h-auto rounded-full bg-slate-900">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="flex justify-center items-center"
              >
                <img
                  src={AboutImg}
                  alt="about"
                  className="rounded-full md:h-72 h-56"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:px-0 px-14">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex justify-center md:justify-start"
          >
            <div className="max-w-xl py-6 my-2">
              <p>
                Hello! I'm{" "}
                <span className="font-semibold text-cyan-400">
                  Mohd Ashkan Khan
                </span>
                , a final-year student pursuing B.Tech in Computer Science
                Engineering. My passion lies in web development, where I
                specialize in the MERN (MongoDB, Express.js, React.js, Node.js)
                stack.
              </p>{" "}
              <br />
              <p>
                {" "}
                Throughout my academic journey, I've honed my skills in
                designing and implementing robust web applications that blend
                creativity with functionality. I believe in leveraging
                technology to solve real-world problems, and my project
                portfolio reflects my commitment to delivering impactful
                solutions using cutting-edge technologies.
              </p>
              <br />
              <p className="hidden md:block">
                Currently, I am eager to apply my knowledge and skills in a
                professional setting where innovation and continuous learning
                are valued. I am enthusiastic about contributing to projects
                that challenge me to grow and evolve as a developer, while
                making a meaningful impact in the field of technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
