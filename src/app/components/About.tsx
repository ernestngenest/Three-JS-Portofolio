"use client";
import Globe from "react-globe.gl";
import { RainbowButton } from "./ui/RainbowButton";
import ShinyButton from "./ui/ShinyButton ";
import { BluetoothIcon } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

export default function About() {
  const [hasCopy, setHasCopy] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("ernestprabowo@gmail.com");
    setHasCopy(true);
    setTimeout(() => {
      setHasCopy(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1-nez.png"
              alt="grid1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext"> Hi , Im Ernest</p>

              <p className="grid-subtext">
                I am a software engineer with experience in web and mobile app
                development. I enjoy solving problems and building practical
                solutions. I am eager to take on new challenges and continue
                learning.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/tech-stack.png"
              alt="grid2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">TechStack</p>
              <p className="grid-subtext">
                I have experience working with various technologies including
                React, Node.js, Express, MongoDB, and React Native. I am
                proficient in JavaScript and TypeScript.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/indonesia.gif"
              alt="grid2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <p className="grid-headtext">
              {" "}
              I’m very flexible with time zone communications & locations{" "}
            </p>
            <p className="grid-subtext">
              {" "}
              i`m based on Jakarta , Indonesia with remote work avaliable
            </p>
            {/* <Button name="Contact Me" isBeam containerClass="w-full mt-10" /> */}
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid3.png" />
            <p className="grid-headtext"> My Comitment </p>
            <p className="grid-subtext">
              Committed to delivering high-quality, scalable software solutions.
              I focus on writing clean, maintainable code following best
              practices. I enjoy collaborative work and creating impactful
              solutions for users.
            </p>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container">
          <p className="grid-headtext">  Every 60 Seconds, a minute passes. </p>
          <p className="grid-subtext">
              ~ Sun Tzu `The Art of War` ~
            </p>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/grid4.png" alt="grid4.png" />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopy ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg-text-2xl md-text-xl font-medium text-gray_gradient text-white">
                  ernestprabowo@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
