"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col">
      {/* Hero Section with Story Introduction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="w-full md:w-1/2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-2"
          >
            <p className="text-green-500 font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              John Andrei
            </h1>
            <h2 className="text-2xl md:text-3xl text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
              I build{" "}
              <FlipWords
                className="text-green-500 font-semibold"
                words={[
                  "websites",
                  "applications",
                  "experiences",
                  "solutions",
                ]}
                duration={2000}
              />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md"
          >
            A passionate NextJS/React developer from the Philippines, creating
            digital experiences that make life easier through programming.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex gap-4"
          >
            <Button asChild size="lg" className="rounded-full">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="rounded-full">
              <Link href="/contact">Let's Connect</Link>
            </Button>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <CardContainer className="w-full">
            <CardBody className="w-full max-w-md aspect-square relative bg-transparent">
              <CardItem translateZ={50} className="w-full h-full">
                <Image
                  src="/Profile_3copy.jpg"
                  alt="John Andrei"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </CardItem>
              <CardItem
                translateZ={100}
                translateX={-40}
                translateY={-40}
                className="absolute top-0 left-0 p-4 bg-white/90 dark:bg-black/90 rounded-xl shadow-md"
              >
                <p className="text-xs font-semibold text-green-500">Currently</p>
                <p className="text-sm">3rd year CS Student</p>
              </CardItem>
              <CardItem
                translateZ={100}
                translateX={40}
                translateY={40}
                className="absolute bottom-0 right-0 p-4 bg-white/90 dark:bg-black/90 rounded-xl shadow-md"
              >
                <p className="text-xs font-semibold text-green-500">Freelancer</p>
                <p className="text-sm">Available for work</p>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </motion.div>      {/* What I Do Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">What I Do</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Transforming ideas into digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Creating responsive, modern websites and web applications using the latest technologies and best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Designing intuitive user interfaces and experiences that focus on usability, accessibility, and visual appeal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Full-Stack Solutions</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Building complete applications from front-end to back-end, database design, and API development for seamless functionality.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild className="rounded-full">
            <Link href="/projects">See My Projects</Link>
          </Button>
        </div>
      </motion.div>      {/* Skills Section - Updated Technical Toolbox */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Technical Toolbox</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5v14" />
                    </svg>
                  </span>
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="typescript" />
                    <span className="text-sm font-medium">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="php" />
                    <span className="text-sm font-medium">PHP</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="python" />
                    <span className="text-sm font-medium">Python</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="java" />
                    <span className="text-sm font-medium">Java</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="visualbasic" />
                    <span className="text-sm font-medium">Visual Basic</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="csharp" />
                    <span className="text-sm font-medium">C#</span>
                  </div>
                  {/* <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="c" />
                    <span className="text-sm font-medium">C</span>
                  </div> */}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                    </svg>
                  </span>
                  Frontend Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="reactjs" />
                    <span className="text-sm font-medium">React (JS/TS)</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3h18v18H3z"></path>
                    </svg>
                    <span className="text-sm font-medium">Shadcn UI</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="tailwindcss" />
                    <span className="text-sm font-medium">TailwindCSS</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="sass" />
                    <span className="text-sm font-medium">SASS</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="bootstrap5" />
                    <span className="text-sm font-medium">Bootstrap</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="chakraui" />
                    <span className="text-sm font-medium">Chakra UI</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5 dark:bg-foreground px-[2px] rounded" name="framer" />
                    <span className="text-sm font-medium">Framer Motion</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </span>
                  Mobile & Embedded Platforms
                </h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="reactnative" />
                    <span className="text-sm font-medium">React Native (Expo)</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="arduino" />
                    <span className="text-sm font-medium">Arduino</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  Backend Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5 dark:bg-foreground px-[2px] rounded" name="nextjs" />
                    <span className="text-sm font-medium">Next.js</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5 dark:bg-foreground px-[2px] rounded" name="flask" />
                    <span className="text-sm font-medium">Flask</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="expressjs" />
                    <span className="text-sm font-medium">Express.js</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="laravel" />
                    <span className="text-sm font-medium">Laravel (PHP)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20V4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 20V4" />
                    </svg>
                  </span>
                  Databases & Storage
                </h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="sqlite" />
                    <span className="text-sm font-medium">SQLite3</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="mongodb" />
                    <span className="text-sm font-medium">MongoDB</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="firebase" />
                    <span className="text-sm font-medium">Firebase</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="supabase" />
                    <span className="text-sm font-medium">Supabase</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="aws" />
                    <span className="text-sm font-medium">AWS S3</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="prisma" />
                    <span className="text-sm font-medium">Prisma</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </span>
                  Developer Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="git" />
                    <span className="text-sm font-medium">Git</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="github" />
                    <span className="text-sm font-medium">GitHub</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="npm" />
                    <span className="text-sm font-medium">NPM</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18" />
                      <path d="M3 12h18" />
                    </svg>
                    <span className="text-sm font-medium">PIP</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="vscode" />
                    <span className="text-sm font-medium">VS Code</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <StackIcon className="w-5 h-5" name="postman" />
                    <span className="text-sm font-medium">Postman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
