"use client";

import { motion } from "framer-motion";
import { Technologies } from "../typings";
import { Label } from "@/components/ui/label";

type Props = {
  skill: Technologies;
};

const SkillItem = ({ skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        src={skill?.image}
        alt="skill_item"
        className="rounded-full border border-gray-500 object-contain w-20 h-20 md:h-24 md:w-24 
        filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-95 transition duration-200 ease-in-out 
      group-hover:bg-white h-20 w-20 md:h-24 md:w-24 rounded-full z-0"
      >
        <Label className="flex items-center justify-center h-full w-full text-base font-bold text-black opacity-100 ">
          {skill?.title}
        </Label>
      </div>
    </div>
  );
};

export default SkillItem;
