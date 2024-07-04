"use client";
import React from "react";
import Link from "next/link";
import { socials } from "@/components/Navbar";

const Contact = () => {
  return (
    <div className=" flex flex-row bg-background">
      <div className="w-1/2 flex flex-col justify-center items-start p-10">
        <h1 className="text-7xl font-bold leading-none">
          Want to
          <br />
          <span className="italic">start</span>
          <br />
          a new
          <br />
          project?
        </h1>
        <p className="mt-4 text-xl">Or just say hello.</p>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-start p-10 ">
        <div className="mb-8">
          <h1 className="text-lg font-bold">Email me at:</h1>
          <Link
            href="mailto:tacujan.andrei@gmail.com"
            className="text-lg underline"
          >
            tacujan.andrei@gmail.com
          </Link>
        </div>
        <div className="mb-8">
          <ul className="flex space-x-4 text-lg">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <>
                  <Link href={social.link} key={index} className="underline flex justify-center items-center gap-1">
                    <Icon />
                    {social.name}
                  </Link>
                </>
              );
            })}
          </ul>
        </div>
        <div className="w-full">
          <h2 className="text-lg mb-2">Designed and coded by John Andrei</h2>
          <p className="text-sm mb-2">© John Andrei 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
