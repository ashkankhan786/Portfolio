import React from "react";
import AboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="about">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex justify-center items-center"
          >
            <img src={AboutImg} alt="about" className="rounded-xl" />
          </motion.div>
        </div>
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex justify-center md:justify-start"
          >
            <p className="max-w-xl py-6 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              velit quas odio mollitia facere porro corporis ad minima
              exercitationem nemo fugiat, dolorum suscipit assumenda pariatur
              consequatur soluta, labore autem necessitatibus! Earum, enim
              blanditiis iure ducimus possimus, delectus animi eligendi
              molestias nobis aliquid perferendis eveniet mollitia voluptatum?
              Nemo magnam reprehenderit asperiores quis reiciendis. Itaque
              voluptate aut suscipit expedita quod impedit sapiente? Nam ea,
              quia vero nesciunt illum consequatur debitis minus, repellendus
              alias laborum optio, tempora voluptas. Ratione repellendus culpa
              officiis quo, tenetur aliquid nisi nostrum et adipisci fugit a
              quod pariatur?
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
