import React from "react";
import { motion } from "framer-motion";

type Props = {};

const HeroBackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center bg-transparent"
    >
      <div className="absolute border border-[#48bde8] dark:border-[#fefafd] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#48bde8] dark:border-[#fefafd] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#48bde8] dark:border-[#fefafd] rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
      <div className="absolute border border-[#784bf4] dark:border-[#8950ff] opacity-10 rounded-full h-[750px] w-[750px] mt-52 animate-pulse" />
      <div className="absolute border border-[#48bde8] dark:border-[#fefafd] rounded-full h-[800px] w-[800px] mt-52 animate-ping" />
    </motion.div>
  );
};

export default HeroBackgroundCircles;
