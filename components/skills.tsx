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
    justify-center mx-auto items-center xl:space-y-0"
    >
      <h3 className="absolute top-12 uppercase tracking-[10px] text-gray-500 text-5xl">
        Umiejętności
      </h3>

      <h4 className="absolute top-28 uppercase tracking-[3px] text-gray-500 text-sm">
        Umiejętności, których nauczyłem się podczas mojej podróży jako
        programista
      </h4>

      {/* Render Skills Learned */}
      <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 gap-5 mt-40 sm:mt-10">
        {technologies?.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
