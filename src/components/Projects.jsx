import React from "react";
import { projects } from "../assets/projects/projects";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

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
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full md:w-3/4 max-w-xl"
            >
              <h6 className="mb-2 font-semibold flex items-center gap-3">
                {project.title}
                <span>
                  <a
                    href={`${
                      project.demo.trim().length === 0 ? "#" : project.demo
                    }`}
                    target="_blank"
                  >
                    <FaExternalLinkAlt className="text-gray-400" size={13} />
                  </a>
                </span>
                <span className="italic font-light px-4">
                  <a href={project.url} target="blank">
                    {" "}
                    Github
                  </a>
                </span>
              </h6>
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
