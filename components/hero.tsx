"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeroBackgroundCircles from "@/components/heroBackgroundCircles";
import { heroData } from "@/lib/data";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      heroData?.heroText[0],
      heroData?.heroText[1],
      heroData?.heroText[2],
    ],
    loop: true,
    delaySpeed: 20,
  });

  const navigate = (id: string) => () => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen flex flex-col space-y-2 items-center justify-center text-center overflow-hidden">
      <HeroBackgroundCircles />
      <div className="z-20">
        <img
          src={heroData.img}
          alt="Profile Image"
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
        />

        <h2 className="text-sm uppercase pb-2 tracking-[10px] text-gray-500">
          {heroData.role}
        </h2>
        <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold px-10">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <button className="heroButton" onClick={navigate("#about")}>
            O mnie
          </button>
          <button className="heroButton" onClick={navigate("#path")}>
            Ścieżka rozwoju
          </button>
          <button className="heroButton" onClick={navigate("#skills")}>
            Umiejętności
          </button>
          <button className="heroButton" onClick={navigate("#projects")}>
            Projekty
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
