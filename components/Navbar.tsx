import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import ToggleSwitch from "@/components/custom/toggleDark";

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

const Navbar = () => {
  return (
    <nav className="flex flex-row py-10 justify-between container">
      <Link
        href="/"
        className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2"
      >
        John Andrei 👨‍💻
      </Link>
      <div className="flex gap-5">
        {navLinks.map((link, index) => (
          <Link
            href={link.link}
            key={index}
            className="text-lg font-medium px-2 rounded-lg "
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
    </nav>
  );
};

export default Navbar;
