"use client";
import Globe from "react-globe.gl";
import { RainbowButton } from "./ui/RainbowButton";
import ShinyButton from "./ui/ShinyButton ";
import { BluetoothIcon } from "lucide-react";
import Button from "./Button";
import { useState } from "react";
import Link from "next/link";

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
            <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full">
              <Link
                href="https://github.com/ernestngenest"
                target="_blank"
                className="flex-1"
              >
                <button className="group relative flex items-center justify-center p-3 bg-[#24292e] hover:bg-[#2b3137] rounded-lg transition-all duration-300 overflow-hidden w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="24"
                    height="24"
                    className="text-white transform group-hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      fill="currentColor"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.73-.01-1.43-2.24.49-2.71-1.08-2.71-1.08-.37-.93-.9-1.18-.9-1.18-.73-.5.06-.49.06-.49.81.06 1.24.83 1.24.83.72 1.23 1.89.88 2.35.67.07-.52.28-.88.51-1.08-1.78-.2-3.65-.89-3.65-3.96 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.81A7.53 7.53 0 018 2.93c.68.003 1.36.093 2 .27 1.53-1.02 2.2-.81 2.2-.81.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.14 0 3.07-1.87 3.76-3.65 3.96.29.25.55.74.55 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.54 16 11.54 16 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                  <span className="ml-2 text-white font-medium group-hover:translate-x-1 transition-transform duration-300">
                    GitHub
                  </span>
                </button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ernest-christca-714a53306/"
                target="_blank"
                className="flex-1"
              >
                <button className="group relative flex items-center justify-center p-3 bg-[#0077B5] hover:bg-[#006399] rounded-lg transition-all duration-300 overflow-hidden w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-white transform group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                  <span className="ml-2 text-white font-medium group-hover:translate-x-1 transition-transform duration-300">
                    LinkedIn
                  </span>
                </button>
              </Link>
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
            <p className="grid-headtext">Location & Communication</p>
            <p className="grid-subtext">
              Based in Jakarta, Indonesia. Available for remote work worldwide.
              Fluent coversation in English and I can speak little bit in
              Japanese.
            </p>
            <Link
              href="https://drive.google.com/file/d/1XxS9KsF-gkgvbcrO54OwXc8D34JR6Yeo/view?usp=sharing"
              target="blank"
            >
              <Button
                name="Download Resume"
                isBeam
                containerClass="w-full mt-10"
              />
            </Link>
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
            <p className="grid-headtext">
              {" "}
              Every 60 Seconds, a minute passes.{" "}
            </p>
            <p className="grid-subtext">~ Sun Tzu `The Art of War` ~</p>
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
