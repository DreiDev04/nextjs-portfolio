"use client";
import React, { useState, useEffect } from "react";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import ToggleSwitch from "@/components/custom/toggleDark";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/john-andrei-tacujan-123ry/",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    link: "https://github.com/DreiDev04",
    icon: FaGithub,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/iamjohnandrei",
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
    name: "About Me",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link
          href="/"
          className="text-2xl font-bold relative group"
        >
          <span className="relative z-10">John Andrei</span>
          <motion.span
            className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-full z-0"
            layoutId="navbar-highlight"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                href={link.link}
                key={link.name}
                className={`relative px-2 py-1 text-sm font-medium transition-colors group ${
                  pathname === link.link
                    ? "text-green-500"
                    : "hover:text-green-500"
                }`}
              >
                {link.name}
                {pathname === link.link && (
                  <motion.span
                    layoutId="navbar-item"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  href={social.link}
                  key={social.name}
                  aria-label={social.name}
                  className="text-xl hover:text-green-500 transition-colors"
                  target="_blank"
                >
                  <Icon />
                </Link>
              );
            })}
            <ToggleSwitch />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ToggleSwitch />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setOpen(!open)}
            className="ml-2"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t dark:border-neutral-800"
          >
            <div className="container mx-auto py-4 px-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  href={link.link}
                  key={link.name}
                  className={`block py-2 text-lg font-medium ${
                    pathname === link.link
                      ? "text-green-500"
                      : "hover:text-green-500"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex space-x-6 pt-4 border-t dark:border-neutral-800">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      href={social.link}
                      key={social.name}
                      aria-label={social.name}
                      className="text-2xl hover:text-green-500 transition-colors"
                      target="_blank"
                      onClick={() => setOpen(false)}
                    >
                      <Icon />
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
