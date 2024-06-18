"use client";
import React, { useState } from "react";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { RiMailSendLine } from "react-icons/ri";
import { BsChatText, BsLinkedin } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [toggle, setToggle] = useState(false);

  return (
    <section
      id="home"
      ref={ref}
      className="scroll-mt-28 xl:pt-40 pt-28 mb-28 max-w-[50rem] text-center sm:mb-0 "
    >
      <div
        id="blur1"
        className="bg-[#fbe2e3] absolute top-[3rem] blur-3xl -z-10 right-[30%] 2xl:right-[40%] h-[15%] w-[31.25rem] rounded-full sm:w-[30.75rem]  dark:bg-[#946263] overflow-visible"
      ></div>

      <div
        id="blur2"
        className="bg-[#dbd7fb] absolute top-[1rem] blur-2xl -z-10 right-[25%] 2xl:right-[35%] h-[13%] w-[31.25rem] rounded-full sm:w-[30.75rem]  dark:bg-[#676394] overflow-visible"
      ></div>

      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
            onViewportEnter={() => setToggle(true)}
            onViewportLeave={() => setToggle(false)}
            onMouseEnter={() => setToggle(true)}
            onMouseLeave={() => setToggle(false)}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/25197239?v=4"
              alt="Zoltan portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.15rem] border-gray-500 dark:border-[0.15rem] dark:border-white shadow-xl"
            />
          </motion.div>
          {}
          <motion.span
            className="absolute items-center bottom-0 right-0 w-12 h-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: toggle ? [3, 4, 4, 4, 4, 3] : 3,
              rotate: toggle ? [null, 45, 0, 45, 0] : 0,
            }}
            transition={{
              type: toggle ? easeInOut : "spring",
              stiffness: 125,
              delay: 0.1,
              duration: toggle ? 2 : 0.7,
              ease: toggle ? "easeInOut" : null,
              times: toggle ? [0, 0.2, 0.4, 0.6, 0.8, 1] : 0,
            }}
            // whileHover={{ scale: 2 }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-10 px-4 text-2xl font-medium !leading[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Zoltan.</span> I'm a self-taught
        <span className="font-bold"> Front-end Engineer</span> with coding
        experience. I love building applications, with a main focus on{" "}
        <span className="font-bold">React</span> and related technologies.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-7 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white/70 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
          dark:bg-black dark:bg-opacity-80 hover:text-white/90"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Get in touch
          <RiMailSendLine className="opacity-80 group-hover:scale-110 group-hover:translate-x-2 transition" />
        </Link>
        <a
          href="https://drive.google.com/uc?export=download&id=1Z6W-4RJdlX7vdkVn9w7FbXbzDGxv607D"
          download
          className="group bg-white text-gray-600 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack hover:text-gray-950 dark:hover:text-white/90 dark:bg-white/10 dark:text-white/60"
        >
          Download CV{" "}
          <HiOutlineDownload className="opacity-80 group-hover:scale-110 group-hover:translate-y-[0.15rem] transition duration-[50ms]" />
        </a>
        <div className="flex flex-row gap-4">
          <a
            href="https://linkedin.com/in/zoltan-szabo-048a51136/"
            target="_blank"
            className="bg-white p-4 text-gray-600 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 dark:hover:text-white/90 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/ZWebD"
            target="_blank"
            className="bg-white p-4 text-gray-600 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 dark:hover:text-white/90 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
