import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tixGigsImg from "@/public/TixGigs.png";
import mapTrackImg from "@/public/mapTrack.png";
import guessNumImg from "@/public/guessNum.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TixGigs",
    description:
      "Searching platform where you can find upcoming events using Ticket Master API. ",
    dev: "Under development!",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    buttons: [
      { name: "GitHub", url: "https://github.com/ZWebD/TixGigs" },
      { name: "LiveDemo", url: "" },
    ],
    imageUrl: tixGigsImg,
  },
  {
    title: "MapTrack",
    description:
      "It's a small App for recording Running and Cycling exercises, using geolocation.",
    dev: "",

    tags: ["HTML", "CSS", "JavaScript"],
    buttons: [
      { name: "GitHub", url: "https://github.com/ZWebD/MapTrack" },
      { name: "LiveDemo", url: "https://serene-bonbon-84c4b5.netlify.app/" },
    ],
    imageUrl: mapTrackImg,
  },
  {
    title: "Guess a number",
    description:
      "A little game where you need to guess a number between 1 and 20 the game will tell you whether the number is higher or lower.",
    tags: ["JavaScript", "HTML", "CSS"],
    dev: "",
    buttons: [
      { name: "GitHub", url: "https://github.com/ZWebD/NumberGuess" },
      { name: "LiveDemo", url: "https://jade-crisp-d9ffdf.netlify.app/" },
    ],
    imageUrl: guessNumImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  // "MongoDB",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  "Framer Motion",
] as const;
