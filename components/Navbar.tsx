"use client";
import React, { useState } from "react";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import ToggleSwitch from "@/components/custom/toggleDark";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const socials = [
  {
    name: "LinkedIn",
    link: "",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    link: "",
    icon: FaGithub,
  },
  {
    name: "Facebook",
    link: "",
    icon: FaFacebookSquare,
  },
];
const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const navVariant = {
  hidden: {
    opacity: 0,
    y: "-100%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.2,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-between container">
      <Link
        href="/"
        className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2"
      >
        John Andrei 👨‍💻
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex md:gap-6 lg:gap-10 xl:gap-14 ">
        <div className="flex gap-5">
          {navLinks.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              className={`text-lg font-medium px-2 rounded-lg ${
                pathname === link.link ? "bg-foreground text-background" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-2 flex-row text-2xl">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <Link href={social.link} key={index} aria-label={social.name}>
                <Icon />
              </Link>
            );
          })}
          <ToggleSwitch />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex gap-10 md:hidden ">
        <div className="flex gap-1 items-center">
          <ToggleSwitch />
          <Button
            variant="ghost"
            size="sm"
            className="z-50 relative "
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <IoMdClose className="text-lg text-background " />
            ) : (
              <GiHamburgerMenu className="text-lg" />
            )}
          </Button>
        </div>
        <motion.div
          className="absolute top-0 left-0 bg-foreground text-background w-full h-full flex flex-col justify-center px-10 gap-5 z-40"
          variants={navVariant}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
        >
          <div className="flex gap-5 flex-col">
            {navLinks.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className="text-2xl font-medium px-2 rounded-lg "
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 flex-row text-2xl justify-center">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link href={social.link} key={index} aria-label={social.name}>
                  <Icon />
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
