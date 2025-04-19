import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Finsocial Digital Systems",
    location: "Remote",
    duration: "December 2024 - January 2025",
    tech: ["ReactJS", "Node.js", "Express", "MongoDB"],
    description:
      "Developed user interfaces with ReactJS and built REST APIs using Node and Express. Implemented user authentication and responsive design.",
  },
  {
    role: "Software Engineer Intern",
    company: "Techpro Compsoft",
    location: "Noida",
    duration: "July 2024 - August 2024",
    tech: ["ReactJS", "C#", ".Net", "Javascript"],
    description:
      "Gained practical experience in software development, with a strong foundation in ReactJS and C#. Built and integrated REST APIs using C# and .NET to enhance functionality and data flow.",
  },
  // Add more experience entries here
];

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full md:w-3/4 bg-zinc-800 text-white rounded-2xl p-5 mb-6 shadow-lg hover:shadow-cyan-500/30 transition-shadow"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">{experience.role}</h3>
          <p className="text-sm text-cyan-400">{experience.company}</p>
        </div>
        <p className="text-sm text-gray-400 mt-2 md:mt-0">
          {experience.duration}
        </p>
      </div>

      <p className="text-sm mt-3 text-gray-300">{experience.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {experience.tech.map((tech, idx) => (
          <span
            key={idx}
            className="bg-cyan-700/30 text-cyan-300 px-3 py-1 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      className="border-b border-neutral-900 pb-12 px-14"
      id="experience"
    >
      <h2 className="text-center text-4xl my-20">Experience</h2>
      <div className="flex flex-col items-center gap-5">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
