"use client";
import React from "react";
import Link from "next/link";
import { socials } from "@/components/Navbar";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const contactRef = React.useRef(null);
  const contactInView = useInView(contactRef, { once: true });

  return (
    <motion.div
      ref={contactRef}
      initial={{ opacity: 0, y: 50 }}
      animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      className="flex md:flex-row flex-col bg-background"
    >
      <div className="md:w-1/2 flex flex-col justify-center items-start p-10">
        <h1 className="text-7xl font-bold leading-none">
          Want to
          <br />
          <span className="italic">start</span>
          <br />
          a new
          <br />
          project?
        </h1>
        <p className="mt-4 text-xl">Or just say hello.</p>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-start p-10 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={contactInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-lg font-bold">Email me at:</h1>
          <Link
            href="mailto:tacujan.andrei@gmail.com"
            className="text-lg underline"
          >
            tacujan.andrei@gmail.com
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={contactInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mb-8"
        >
          <ul className="flex space-x-4 text-lg">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  href={social.link}
                  key={index}
                  className="underline flex justify-center items-center gap-1"
                >
                  <Icon />
                  {social.name}
                </Link>
              );
            })}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={contactInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="w-full"
        >
          <h2 className="text-lg mb-2 ">Designed and coded by John Andrei</h2>
          <p className="text-sm mb-2">© John Andrei 2024</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
