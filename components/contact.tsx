"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  //Fixing hydration error
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    isClient && (
      <motion.section
        id="contact"
        ref={ref}
        className=" mb-20 sm:mb28 w-[min(100%,38rem)] text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <SectionHeading>Contact me</SectionHeading>

        <p className=" text-gray-700 -mt-6 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:exemple@gmail.com">
            exemple@gmail.com
          </a>
          or through this form.
        </p>

        <form
          className="mt-10 flex flex-col dark:text-white/80"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-black dark:bg-opacity-40 dark:focus:bg-opacity-80 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded-lg p-4 borderBlack dark:bg-black dark:bg-opacity-40 dark:focus:bg-opacity-80 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </motion.section>
    )
  );
}
