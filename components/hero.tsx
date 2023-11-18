"use client";

import Link from "next/link";
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

  return (
    <div className="h-screen flex flex-col space-y-2 items-center justify-center text-center overflow-hidden">
      <HeroBackgroundCircles />
      <img
        src={heroData.img}
        alt="Profile Image"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase pb-2 tracking-[10px] text-gray-500">
          {heroData.role}
        </h2>
        <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold px-10">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">O mnie</button>
          </Link>
          <a href="#path">
            <button className="heroButton">Ścieżka rozwoju</button>
          </a>
          <Link href="#skills">
            <button className="heroButton">Umiejętności</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projekty</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
