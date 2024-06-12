"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  dev,
  tags,
  buttons,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0 "
    >
      <section className=" bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] group-even:pl-10 group-odd:pl-10 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className=" pt-4 pb-7 pr-4 sm:pl-10 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl">{title}</h3>
          <p className=" mt-2 leading-relaxed text-gray-700 dark:text-white/70 uppercase">
            {dev}
          </p>
          <p className=" my-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className=" flex flex-wrap mt-4 gap-1 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className=" bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
          <ul className=" flex flex-wrap mt-4 gap-3 ">
            {buttons.map((button, index) => (
              <li key={index}>
                <a
                  href={button.url}
                  target="_blank"
                  className="bg-white px-3 py-1 text-gray-700 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                >
                  {button.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className=" absolute  max-sm:opacity-10  top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-hover:scale-[1.04]
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
        
            group-even:right-[initial]
            group-even:-left-40
           group-even:max-sm:opacity-10"
        />
      </section>
    </motion.div>
  );
}
