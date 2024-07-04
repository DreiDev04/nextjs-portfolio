"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";

const testimonials = [
  {
    image: (
      <Image
        src="/Certificates/CS50x.png"
        width={1000}
        height={1000}
        alt="certificate"
        className="rounded-lg object-cover"
      />
    ),
    name: "CS50",
    title: "Introduction to Computer Science",
  },
  {
    image: (
      <Image
        src="/Certificates/FFC-FrontEndLibraries.png"
        width={1000}
        height={1000}
        alt="certificate"
        className="rounded-lg object-cover"
      />
    ),
    name: "FreeCodeCamp",
    title: "Front End Development Libraries",
  },
  {
    image: (
      <Image
        src="/Certificates/FFC-JavascriptLegacy.png"
        width={1000}
        height={1000}
        alt="certificate"
        className="rounded-lg object-cover"
      />
    ),
    name: "FreeCodeCamp",
    title: "Legacy JavaScript Algorithms and Data Structures",
  },
  {
    image: (
      <Image
        src="/Certificates/FFC-ResponsiveWebDesign.png"
        width={1000}
        height={500}
        alt="certificate"
        className="rounded-lg object-cover"
      />
    ),
    name: "FreeCodeCamp",
    title: "Responsive Web Design",
  },
  // {
  //   quote:
  //     "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
  //   name: "William Shakespeare",
  //   title: "Hamlet",
  // },
  // {
  //   quote: "All that we see or seem is but a dream within a dream.",
  //   name: "Edgar Allan Poe",
  //   title: "A Dream Within a Dream",
  // },
  // {
  //   quote:
  //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //   name: "Jane Austen",
  //   title: "Pride and Prejudice",
  // },
  // {
  //   quote:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  // },
];

const About = () => {
  return (
    <div>
      <div className="w-full h-[150vh] bg-background ">
        <div className=" flex flex-col p-24">
          <h1 className="text-7xl font-serif inline-block z-30">
            Programmer
            <br />
            Student
            <br />
            Freelancer
            <br />
            Gamer
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-display leading-none font-seif antialiased">
          - About Me -
        </h1>
        <hr className="border-t-2 my-2 border-gray-300" />
      </div>
      <div className="h-screen bg-background p-10 flex flex-col items-start justify-start">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <h1 className="text-lg font-bold text-green-500">Bio</h1>
        </div>
        <div className="max-w-3xl text-lg font-thin">
          <p className="mb-4">
            I am currently a 3rd-year student at Tarlac State University,
            pursuing a BS in Computer Science. My passion for technology drives
            me to continually learn and grow in my field.
          </p>
          <p className="mb-4">
            Raised in the Philippines, I have dedicated myself to mastering the
            art of coding over the past two years. Beyond my college curriculum,
            I have independently nurturing my skills as a full-stack developer,
            gaining proficiency in both frontend and backend technologies.
          </p>
          <p className="mb-4">
            I have experience working on various projects that involve both
            frontend and backend technologies. I enjoy tackling complex problems
            and finding efficient solutions. I am always eager to learn new
            things and improve my skills. I believe in continuous learning and
            staying updated with the latest trends in the tech industry.
          </p>
        </div>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-background dark:bg-background dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <h1 className="text-lg font-bold text-green-500">
            Recent Certificates
          </h1>
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
      {/* <div className="h-screen"></div> */}
    </div>
  );
};

export default About;
