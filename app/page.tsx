"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

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
        <motion.div className="mt-5" variants={textVariants}>
          <h1 className="text-sm font-semibold">Proficient</h1>
          <div className="flex flex-wrap gap-2 text-sm mt-2">
            <StackIcon className="max-w-6" name="typescript" />
            <StackIcon className="max-w-6" name="js" />
            <StackIcon className="max-w-6" name="python" />
            <StackIcon className="max-w-6" name="java" />
            <StackIcon className="max-w-6" name="visualbasic" />
            <StackIcon className="max-w-6 dark:bg-foreground px-1 rounded " name="nextjs" />
            <StackIcon className="max-w-6" name="reactjs" />
            <StackIcon className="max-w-6" name="tailwindcss" />
            <StackIcon className="max-w-6" name="shadcn" />
            <StackIcon className="max-w-6" name="mongodb" />
            <StackIcon className="max-w-6" name="git" />
            <StackIcon className="max-w-6" name="github" />
            <StackIcon className="max-w-6" name="sass" />
          </div>
          <h1 className="text-sm font-semibold mt-4">Familiar</h1>
          <div className="flex flex-wrap gap-2 text-sm mt-2">
            <StackIcon className="max-w-6" name="csharp" />
            <StackIcon className="max-w-6" name="firebase" />
            <StackIcon className="max-w-6" name="chakraui" />
            <StackIcon className="max-w-6" name="bootstrap5" />
            <StackIcon className="max-w-6" name="figma" />
            <StackIcon className="max-w-6" name="unity" />
            <StackIcon className="max-w-6" name="aws" />
          </div>
        </motion.div>
        <div className="flex gap-2 mt-10">
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
      <div className="md:w-1/2 grid place-content-center relative  z-10">
        <motion.div
          className="rounded-2xl relative  z-10"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={imageVariants}
        >
          <Image
            src="/Profile_3.jpg"
            height="400"
            width="400"
            className="object-cover rounded-2xl  z-10"
            alt="me"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
