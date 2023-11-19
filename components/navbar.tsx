"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { socials } from "@/lib/data";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import NavigationButton from "./navigationButton";
import MobileNavbar from "./mobile/mobileNavbar";

const Navbar = () => {
  const navigate = (id: string) => () => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky top-0 p-0 max-w-full z-50 xl:items-center
      overflow-x-hidden shadow-lg shadow-[#2a0e61] bg-[#03001417] backdrop-blur-md"
    >
      <div className="max-w-7xl flex items-center justify-between mx-auto">
        {/* LOGO | LEFT*/}
        <motion.div
          // initial={{
          //   opacity: 0,
          //   x: 200,
          //   scale: 0.5,
          // }}
          // animate={{
          //   x: 0,
          //   opacity: 1,
          //   scale: 1,
          // }}
          // transition={{
          //   duration: 1.5,
          // }}
          className="hidden md:flex items-center justify-center space-x-3 hover:animate-pulse cursor-pointer"
          onClick={navigate("#hero")}
        >
          <Image src="/images/hero.png" alt="logo" width={40} height={50} />
          <span className="font-bold text-xl text-[#808080]">RiP3rQ</span>
        </motion.div>

        {/* NAVIGATION | CENTER*/}
        <motion.div
          // initial={{
          //   opacity: 0,
          //   scale: 0.5,
          // }}
          // animate={{
          //   opacity: 1,
          //   scale: 1,
          // }}
          // transition={{
          //   duration: 1.5,
          // }}
          className="hidden md:flex items-center justify-center space-x-3 h-auto
    border border-[#7042f861] bg-[#0300145e] rounded-full text-white"
        >
          <NavigationButton text="O mnie" href="#about" navigate={navigate} />
          <NavigationButton text="Ścieżka" href="#path" navigate={navigate} />
          <NavigationButton
            text="Umiejętności"
            href="#skills"
            navigate={navigate}
          />
          <NavigationButton
            text="Projekty"
            href="#projects"
            navigate={navigate}
          />
        </motion.div>

        {/* NAVIGATION | MOBILE*/}
        <motion.div
          // initial={{
          //   opacity: 0,
          //   scale: 0.5,
          // }}
          // animate={{
          //   opacity: 1,
          //   scale: 1,
          // }}
          // transition={{
          //   duration: 1.5,
          // }}
          className="flex md:hidden items-start justify-center h-auto"
        >
          <MobileNavbar />
        </motion.div>

        {/* SOCIAL ICONS | RIGHT*/}
        <motion.div
          // initial={{
          //   opacity: 0,
          //   x: -200,
          //   scale: 0.5,
          // }}
          // animate={{
          //   x: 0,
          //   opacity: 1,
          //   scale: 1,
          // }}
          // transition={{
          //   duration: 1.5,
          // }}
          className="flex flex-row items-center"
        >
          {socials?.map((social) => (
            <SocialIcon
              key={social.id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
              target="_blank"
            />
          ))}
          {/* LINK TO CONTACT FORM */}
          <Link href="#contact" className="mx-2">
            <EnvelopeIcon className="cursor-pointer bg-transparent text-[#808080] h-6 w-6 " />
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
