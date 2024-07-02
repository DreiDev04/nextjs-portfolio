"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.1, transition: { yoyo: Infinity } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, rotate: 2, transition: { duration: 0.5 } },
};

const Home = () => {
  return (
    <motion.div
      className="container flex flex-col-reverse md:flex-row justify-center md:px-14 mt-10 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="md:w-1/2 grid place-content-center container mb-10 md:mb-0">
        <motion.div
          className="text-4xl font-normal text-neutral-600 dark:text-neutral-400"
          variants={textVariants}
        >
          Hello, I' am{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            John Andrei
          </span>
        </motion.div>
        <motion.p className="mt-5 md:w-2/3" variants={textVariants}>
          Based in the Philippines. I'm a NextJS/React Developer. Currently, a
          3rd year BS Computer Science Student. Passionate in making life easier
          through programming.
        </motion.p>
        <div className="flex gap-2 mt-5">
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={buttonVariants}
          >
            <Button type="button">View Projects</Button>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={buttonVariants}
          >
            <Button variant="outline">Contact Me</Button>
          </motion.div>
        </div>
      </div>
      <div className="md:w-1/2 grid place-content-center relative">
        <motion.div
          className="rounded-2xl relative"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={imageVariants}
        >
          <Image
            src="/Profile_3.jpg"
            height="400"
            width="400"
            className="object-cover rounded-2xl"
            alt="me"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
