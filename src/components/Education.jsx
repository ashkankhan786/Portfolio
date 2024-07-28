import { motion } from "framer-motion";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";

const Education = () => {
  return (
    <>
      {
        //for mobile
      }
      <div
        className="md:hidden border-b border-neutral-900 pb-20 px-14"
        id={`${window.innerWidth <= 550 ? "education" : "null"}`}
      >
        <h2 className="text-center text-4xl my-20">Education</h2>
        <div className="flex flex-col w-full items-center border-l-2 border-black">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="border-b-2 border-black pb-6 mb-6 pl-10 relative w-full"
          >
            <IoSchool
              fill="white"
              className="absolute top-[30%] -left-4 text-2xl "
            />
            <h1 className="font-extrabold text-xl">2021-25</h1>

            <h2 className="italic text-base text-gray-400 font-semibold">
              Bachelor of Technology
            </h2>
            <h2 className="text-gray-400 text-sm">
              Computer Science Engineering
            </h2>
            <h2 className="text-gray-400 text-sm">
              Bipin Tripathi Kumaon Institue of Technology
            </h2>
            <p className="flex items-center gap-3 text-blue-400">
              <FaLocationDot />
              <span className="text-gray-400">Dwarahat , Almora</span>
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="border-b-2 border-black pb-6 mb-6 pl-10 relative w-full"
          >
            <IoSchool
              fill="white"
              className="absolute top-[30%] -left-4 text-2xl "
            />
            <h1 className="font-extrabold text-xl">2020-21</h1>

            <h2 className="italic text-base text-gray-400 font-semibold">
              Intermediate
            </h2>
            <h2 className="text-gray-400 text-sm">
              K.V.M. Public School - <span className="italic">CBSE</span>
            </h2>
            <p className="flex items-center gap-3 text-blue-400">
              <FaLocationDot />
              <span className="text-gray-400">Haldwani, Nainital</span>
            </p>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="border-b-2 border-black pb-10 mb-6 pl-10 w-full relative"
          >
            <IoSchool
              fill="white"
              className="absolute top-[30%] -left-4 text-2xl "
            />
            <h1 className="font-extrabold text-xl">2018-19</h1>
            <h2 className="italic text-base text-gray-400 font-semibold">
              High School
            </h2>

            <h2 className="text-gray-400 text-sm">
              K.V.M. Public School - <span className="italic">CBSE</span>
            </h2>
            <p className="flex items-center gap-3 text-blue-400">
              <FaLocationDot />
              <span className="text-gray-400">Haldwani , Nainital</span>
            </p>
          </motion.div>
        </div>
      </div>

      {
        //for desktop
      }
      <div
        className="hidden md:block border-b border-neutral-900 pb-20"
        id={`${window.innerWidth > 550 ? "education" : "null"}`}
      >
        <h2 className="text-center text-4xl my-20">Education</h2>
        <div className="flex flex-wrap mx-10">
          <div className="w-1/2 items-center border-r-4 border-black">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="text-start border-b-4 border-black pl-24 mb-32 relative"
            >
              <IoSchool
                fill="white"
                className="absolute top-[30%] -right-4 text-3xl "
              />
              <h1 className="font-extrabold text-xl">2021-25</h1>
              <h2 className="italic text-lg text-gray-400">
                Bachelor of Technology
              </h2>
              <h2 className="text-gray-400">Computer Science Engineering</h2>
              <h2 className="text-gray-400">
                Bipin Tripathi Kumaon Institue of Technology
              </h2>
              <p className="flex items-center gap-3 text-blue-400">
                <FaLocationDot />
                <span className="text-gray-400">Dwarahat , Almora</span>
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="text-start border-b-4 border-black pl-24 relative"
            >
              <IoSchool
                fill="white"
                className="absolute top-[30%] -right-4 text-3xl "
              />
              <h1 className="font-extrabold text-xl">2018-19</h1>
              <h2 className="italic text-lg text-gray-400">High School</h2>
              <h2 className="text-gray-400">K.V.M. Public School</h2>
              <p className=" text-cyan-700 italic">92.8%</p>
              <p className="flex items-center gap-3  text-blue-400">
                <FaLocationDot />
                <span className="text-gray-400">Haldwani , Nainital</span>
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="w-1/2 items-center"
          >
            <div className="text-start border-b-4 border-black pl-64 mt-32 relative">
              <IoSchool
                fill="white"
                className="absolute top-[30%] -left-4 text-3xl "
              />
              <h1 className="font-extrabold text-xl">2020-21</h1>
              <h2 className="italic text-lg text-gray-400">Intermediate</h2>
              <h2 className="text-gray-400">K.V.M. Public School</h2>
              <p className=" text-cyan-700 italic">94.2%</p>
              <p className="flex items-center gap-3  text-blue-400">
                <FaLocationDot />
                <span className="text-gray-400">Haldwani , Nainital</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Education;
