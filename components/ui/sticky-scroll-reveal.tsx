"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { LinkPreview } from "@/components/ui/link-preview";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    techStack?: string;
    content?: React.ReactNode | any;
    url: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgb(22,22,29)",
    "rgb(12,10,8)",
    "rgb(2,9,22)",
    "rgb(28,28,30)",
    "rgb(30,41,56)",
    "rgb(31,31,31)",
    "rgb(38,69,116)",
    "rgb(149,90,146)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  // const [backgroundGradient, setBackgroundGradient] = useState(
  //   linearGradients[0]
  // );

  // useEffect(() => {
  //   setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  // }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[calc(100vh-6rem)] overflow-y-auto flex justify-center relative space-x-10 rounded-md pb-20"
      ref={ref}
    >
      <div className="div relative flex items-start px-4 h-full">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-24">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
              >
                <Link href={item.url} className="flex gap-2 text-2xl font-bold text-background dark:text-foreground" target="_blank">
                  {item.title}
                  <FaExternalLinkAlt />
                </Link>
                
              </motion.div>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-5"
              >
                {item.description}
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-xs text-slate-300 max-w-sm mt-5 flex flex-wrap gap-1"
              >
                {item.techStack &&
                  item.techStack.split(",").map((tech, index) => (
                    <p
                      key={tech + index}
                      className=" border border-green-500 rounded-lg p-1"
                    >
                      {tech}
                    </p>
                  ))}
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        // style={{ background: backgroundGradient }}
        key={activeCard} // Change the key to trigger the animation
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md  sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
