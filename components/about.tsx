"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="scroll-mt-28 mb-40 max-w-[45rem] text-center leading-8 sm:mb-60 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-xl max-sm:text-base">
        From a very young age, I've always been fascinated by technology and how
        things work, especially digital devices. This curiosity fueled my desire
        to become a laptop engineer, but after a successful decade, I craved a
        new challenge and a way to leverage my problem-solving skills in a new
        way.
        <br />
        That's why I decided to dive headfirst into web development. I mastered
        the fundamentals of HTML, CSS, and JavaScript, and I've gained some
        experience with PHP, MySQL, and Git. I'm also proficient in popular
        frameworks like React and Bootstrap, and I'm constantly exploring new
        technologies to expand my skill set.
      </p>
    </motion.section>
  );
}
