import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";

const Home = () => {
  const words = ["student", "programmer", "freelancer"];

  return (
    <div className="container flex flex-col-reverse md:flex-row justify-center md:px-14 mt-10 gap-4">

      <div className="md:w-1/2 grid place-content-center container mb-10 md:mb-0">
        <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400 ">
          Hello, I' am{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            John Andrei
          </span>
          {/* <br />
          Im a <FlipWords words={words} /> <br /> */}
        </div>
        <p className="mt-5 md:w-2/3">
          Based in the Philippines. I'm a NextJS/React Developer. Currently, a
          3rd year BS Computer Science Student. Passionate in making life easier
          through programming.
        </p>
        <div className="flex gap-2 mt-5">
          <Button type="button"> View Projects</Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </div>
      <div className="md:w-1/2 grid place-content-center">
      
        <Image
          src="/Profile_3.jpg"
          height="400"
          width="400"
          className="object-cover rounded-2xl"
          alt="me"
          priority
        />
      </div>
    </div>
  );
};

export default Home;
