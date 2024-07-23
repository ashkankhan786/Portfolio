import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="border-b border-neutral-900 py-2">
      <div className="text-center my-2 py-2 px-10">
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="tracking-tight font-light text-neutral-400"
        >
          Copyright &copy; {new Date().getFullYear()} Mohd Ashkan Khan. All
          rights reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
