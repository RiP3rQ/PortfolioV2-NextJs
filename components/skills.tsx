"use client";

import { motion } from "framer-motion";
import SkillItem from "./skillItem";
import { technologies } from "@/lib/data";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 
    justify-center mx-auto items-center xl:space-y-0 mb-40 xl:mb-0"
    >
      <h3
        className="absolute top-24 uppercase tracking-[10px] text-[#8950ff] dark:text-white  
        text-xl sm:text-3xl lg:text-5xl"
      >
        Umiejętności
      </h3>

      <h4
        className="absolute top-40 uppercase tracking-[3px] px-4 text-gray-500 
      text-xs lg:text-base"
      >
        Umiejętności, których nauczyłem się podczas mojej podróży jako
        programista
      </h4>

      {/* Render Skills Learned */}
      <div
        className="absolute top-56 grid grid-cols-4 
      sm:grid-cols-6 lg:grid-cols-8 gap-5 "
      >
        {technologies?.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
