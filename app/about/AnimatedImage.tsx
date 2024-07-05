// components/AnimatedImage.js
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedImage = ({ src, width, height, alt, className }: any) => {
  const [xPosition, setXPosition] = useState(0);

  useEffect(() => {
    // Generate a random horizontal position when the component mounts
    const randomX = Math.random() * 100;
    setXPosition(randomX);
  }, []);

  return (
    <motion.div
      initial={{ y: "100vh", x: `${xPosition}vw` }}
      animate={{ y: "-100vh", x: `${xPosition}vw` }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={className}
      />
    </motion.div>
  );
};

export default AnimatedImage;
