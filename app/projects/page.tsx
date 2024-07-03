"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { motion } from "framer-motion";

const content = [
  {
    title: "Charina's Store",
    description:
      "Charina's Store is a full stack website that showcases the integration of modern web development technologies. This is my final project in CS50. One of the key features of Charina's Store is its Role-Based Access Control (RBAC) system.",
    techStack:
      "NextJS,AWS S3,TypeScript,TailwindCSS,Shadcn,MongoDB,Google OAuth2.0",
    content: (
      <div className="h-full w-full  flex items-center justify-center" >
        <Image
          src="/project/Charina_Store.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="Charina's Store demo"
        />
      </div>
    ),
  },
  {
    title: "Todo App",
    description:
      "A simple todo app that allows you to add, delete, and mark tasks as completed. This project is built using ReactTS and Firebase. It also uses TailwindCSS for styling and Vite as a build tool. Firestore is used as the database.",
    techStack: "ReactTS,Firebase,TailwindCSS,Vite,Firestore",
    content: (
      <div className="h-full w-full  flex items-center justify-center">
        <Image
          src="/project/TODO.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="Todo App demo"
        />
      </div>
    ),
  },
  {
    title: "Car Rental System",
    description:
      "This is a Case Study from Comprog 3 which got perfect 100 score. The project is a desktop application that allows you to rent a car. We were given a task to meet the requirements of the problem.",
    techStack: "Visual Basic,CSV as Database",
    content: (
      <div className="h-full w-full  flex items-center justify-center">
        <Image
          src="/project/CarRental.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="Todo App demo"
        />
      </div>
    ),
  },
  {
    title: "Cinematrix (Movie Box)",
    description:
      "This is a case study from Object Orient Programming. Cinematrix is a desktop application that allows you to search for movies and TV shows. The project is built using JAVA Swing and uses CSV as a database. It also integrates with the TMDB API to fetch movie data. ",
    techStack: "JAVA Swing,CSV as Database,TMDB API",
    content: (
      <div className="h-full w-full  flex items-center justify-center">
        <Image
          src="/project/Cinematrix.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="Cinematrix  demo"
        />
      </div>
    ),
  },
  {
    title: "Music Player",
    description:
      "This is a case study from Computer Programming 2. The project is a simple music player that allows you to play, pause, and stop music. The project is built using JAVA Swing.",
    techStack: "JAVA Swing",
    content: (
      <div className="h-full w-full  flex items-center justify-center">
        <Image
          src="/project/GahDamMusicPlayer.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="Music Player demo"
        />
      </div>
    ),
  },
  {
    title: "Numble Game",
    description:
      "Started as a hobby in game development, Numble is a simple game that challenges your memory. This project is inspired by a tiktok filter that is popular in the Philippines. It allows you to play the game and challenge your friends through high scores.",
    techStack: "Unity,CSharp",
    content: (
      <div className="h-full w-full  flex items-center justify-center">
        <Image
          src="/project/numbleFront.jpg"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="Numble demo"
        />
      </div>
    ),
  },
  {
    title: "Force Confession",
    description:
      "My first project in web development. A simple website that allows you to confess your feelings forcefully. This project is built using HTML, CSS, and JavaScript. This project is inpired by the trend in tiktok that use programming as a way to confess their feelings.",
    techStack: "Html,CSS,JavaScript",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/project/ForceYesConfession.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="ForceYesConfession demo"
        />
      </div>
    ),
  },
];
export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <StickyScroll content={content} />
    </motion.div>
  );
}
