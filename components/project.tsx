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
      className="group mb-8 last:mb-0"
    >
      <section className="relative flex flex-col-reverse sm:flex-row sm:bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem] sm:group-even:pl-10 sm:group-odd:pl-10 sm:hover:bg-gray-300 transition dark:bg-white/10 sm:dark:hover:bg-white/20 dark:text-white">
        <div className=" max-sm:dark:bg-gray-900 max-sm:rounded-t-xl sm:group-odd:w-1/2">
          <div className="max-sm:px-8 pt-4 pb-7 max-sm:pb-4 pr-4 max-sm:min-h-[12rem] sm:pl-10 sm:pt-10 flex flex-col h-full sm:group-even:ml-[18rem] max-sm:rounded-t-xl max-sm:bg-gray-100 max-sm:dark:bg-white/10 ">
            <div className="flex flex-col ">
              <h3 className="text-2xl font-medium max-sm:self-center">
                {title}
              </h3>
              <p className=" mt-2 leading-relaxed text-gray-700 dark:text-white/90 uppercase font-medium max-sm:self-center">
                {dev}
              </p>
            </div>
            <div className="flex flex-grow max-sm:flex-row sm:flex-col sm:justify-around ">
              <p className=" max-sm:m-2 pt-1 max-sm:w-1/2 text-xs text-gray-700 dark:text-white/70">
                {description}
              </p>
              <div className=" flex max-sm:flex-col sm:flex-wrap max-sm:m-2 pb-2  max-sm:w-1/2 ">
                <p>
                  Made with:{" "}
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className=" text-xs uppercase text-gray-700 dark:text-white/70"
                    >
                      {tag}
                      {index + 1 < tags.length ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <ul className=" flex flex-wrap justify-center gap-3 sm:absolute sm:bottom-0 sm:pb-4">
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
        </div>
        <div className="max-sm:h-60 max-sm:-z-10 ">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className=" absolute  opacity-100 top-0 sm:top-8 sm:-right-40 sm:w-[28.25rem] rounded-t-lg shadow-2xl
          sm:group-hover:-translate-x-3
          sm:group-hover:translate-y-3
          sm:group-hover:-rotate-2
          sm:group-hover:scale-[1.04]
          sm:group-even:group-hover:translate-x-3
          sm:group-even:group-hover:translate-y-3
          sm:group-even:group-hover:rotate-2
          sm:transition-all ease-linear
          sm:group-even:right-[initial]
          sm:group-even:-left-40
          "
          />
        </div>
      </section>
    </motion.div>
  );
}
