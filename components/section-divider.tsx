"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-900 bg-opacity-80 dark:bg-gray-200 dark:bg-opacity-20 xl:h-40 my-32 h-28 w-1 rounded-full hidden sm:block "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
