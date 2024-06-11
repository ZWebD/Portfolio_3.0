"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="scroll-mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        From a young age, I had a natural gift for{" "}
        <span className="italic">constructing </span> and{" "}
        <span className="italic">repairing </span>
        things, <span className="italic">understanding</span> the intricacies of
        various devices, and being intrigued by technology. This passion
        ultimately led me to reach the peak of my career as a laptop engineer
        within a decade. However, I began to question what was next for me and
        desired to utilize my skills as a "
        <span className=" font-medium"> Builder</span>,
        <span className=" font-medium"> Repairer</span>, and
        <span className=" font-medium"> Problem solver</span>" in a new capacity
        within the
        <span className=" font-medium"> IT </span>
        field.
      </p>
      <p>
        Thus, I made the decision to become a
        <span className=" font-medium"> software engineer</span>. I like to
        <span className=" italic"> explore</span> and
        <span className=" italic"> absorb </span>
        as much <span className=" italic">knowledge</span> about
        <span className=" font-medium"> web development</span> as I can, by
        trying
        <span className=" italic"> variable</span> technologies. Learned the
        <span className=" italic"> basic trinity</span> of
        <span className=" font-medium"> HTML</span>,{" "}
        <span className=" font-medium"> CSS</span> and
        <span className=" font-medium"> JavaScript</span>, had some experience
        with
        <span className=" font-medium"> PHP</span>,{" "}
        <span className=" font-medium">MySQL</span>,
        <span className=" font-medium"> GitHub</span>, and of course the related
        <span className=" italic"> libraries</span> and
        <span className=" italic"> frameworks</span> such as
        <span className=" font-medium"> Sass</span>,
        <span className=" font-medium"> Bootstrap</span>,
        <span className=" font-medium"> Tailwind</span>,
        <span className=" font-medium"> React</span>,
        <span className=" font-medium"> NodeJS</span>,
        <span className=" font-medium"> NextJS</span>,
        <span className=" font-medium"> TypeScript</span>,
        <span className=" font-medium"> jQuery</span>,
        <span className=" font-medium"> WordPress</span>,
        <span className=" font-medium"> Joomla</span>, etc...
      </p>
    </motion.section>
  );
}
