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
        className=" mb-20 w-[min(100%,38rem)] text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <SectionHeading>Contact me</SectionHeading>

        <p className=" text-gray-700 mt-6 dark:text-white/80">
          If you'd like to collaborate or have an enquiry, please contact me
          directly at{" "}
          <a className="underline" href="mailto:zoltanszdev@gmail.com">
            zoltanszdev@gmail.com
          </a>{" "}
          or by filling out this form.
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
        <div
          id="blur3"
          className="bg-[#fbe2e3] absolute bottom-[16rem] blur-3xl -z-10 right-[30%] 2xl:right-[40%] h-[15rem] w-[31.25rem] rounded-full sm:w-[30.75rem]  dark:bg-[#946263] overflow-visible"
        ></div>

        <div
          id="blur4"
          className="bg-[#dbd7fb] absolute bottom-[10rem] blur-2xl -z-10 right-[25%] 2xl:right-[35%] h-[15rem] w-[31.25rem] rounded-full sm:w-[30.75rem]  dark:bg-[#676394] overflow-visible"
        ></div>
      </motion.section>
    )
  );
}
