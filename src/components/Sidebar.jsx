import React from "react";
import Logo from "../assets/ak-removebg-preview.png";
import { FaBars } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

function Sidebar({ sidebar, setSidebar }) {
  const menu = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
    { name: "Education", path: "#education" },
    { name: "Skills", path: "#technologies" },
    { name: "Experience", path: "#experience" },
  ];
  if (!sidebar) return;
  return (
    <AnimatePresence>
      {sidebar && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex flex-col items-center justify-top w-40 h-screen bg-zinc-900 text-white fixed top-0 left-0 z-50 selection:text-cyan-300"
        >
          <div className="flex w-full items-center justify-between px-2">
            <img src={Logo} alt="AK" className="w-14" />
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setSidebar(false)}
            />
          </div>
          <div className="flex flex-col items-center justify-end gap-2 pt-3">
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="flex gap-2 text-base p-2 hover:bg-neutral-900 rounded-md border-b-2 border-gray-950"
                onClick={() => setSidebar(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
