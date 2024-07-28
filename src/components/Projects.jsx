import React from "react";
import { projects } from "../assets/projects/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 px-14" id="projects">
      <h2 className="text-center text-4xl my-20">Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full md:w-1/4 relative flex items-center mb-6"
            >
              <img
                src={project.image}
                alt="Project 1"
                width={300}
                className="rounded "
              />
              <div className="bg-gray-400 rounded absolute z-50 top-0 left-0 w-[300px] h-full opacity-0 flex items-center justify-center transition duration-300 hover:opacity-70">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-4 py-2 bg-gray-900 border border-gray-800 rounded-md hover:bg-gray-950 transition duration-300"
                >
                  Source Code
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full md:w-3/4 max-w-xl"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-purple-900 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
