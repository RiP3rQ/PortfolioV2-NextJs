"use client";

import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "@/lib/data";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[10px] text-[#8950ff] dark:text-white 
      text-xl sm:text-3xl lg:text-5xl"
      >
        O mnie
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        src={aboutData.profilePic}
        className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 sm:w-56 sm:h-56 
        rounded-full object-cover md:rounded-lg md:w-64 md:h-96"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-lg sm:text-2xl lg:text-4xl font-semibold">
          Tutaj znajdziesz{" "}
          <span className="underline decoration-[#8950ff]/50">kilka</span>{" "}
          informacji na mój temat
        </h4>
        <p className="text-sm lg:text-base">{aboutData.backgroundInfo}</p>
      </div>
    </motion.div>
  );
};

export default About;
