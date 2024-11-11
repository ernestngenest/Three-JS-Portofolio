"use client";
import React, { Suspense } from "react";
import { SparklesText } from "./ui/SparklesText";
import { Canvas } from "@react-three/fiber";
import { CameraShake, PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "./HackerRoom";
import CanvasLoader from "./CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "@/constants";
import TargetModel from "./TargetModel";
import ReactLogo from "./ReactLogo";
import Cube from "./Cube";
import { HoloSmol } from "./HoloSmol";
import { Robot } from "./Robot";
import HeroCamera from "./HeroCamera";
import { Button } from "@/app/components/ui/button";
import { CoolMode } from "@/app/components/ui/CoolMode";

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 768 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const sizes = calculateSizes(isMobile, isTablet, isSmall);
  // const controls = useControls("Hackers Room", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scaleX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scaleY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scaleZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  // });
  return (
    <section className="min-h-screen w-full flex flex-col ">
      <div className="w-full mx-auto flex flex-col sm:mt-10 mt-10 c-space gap-3 relative">
        <div className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans flex justify-center gap-2 ">
          Hi, I am <SparklesText text="Ernest Christca" />
          <span className="waving-hand" style={{ fontSize: "2em" }}>
            👋
          </span>
        </div>
        <div className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal text-gray_gradient">
          {" "}
          FullStack Web Developer
        </div>
        <div className="text-center text-gray-400 font-medium text-lg flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
              clipRule="evenodd"
            />
          </svg>
          jakarta, indonesia
        </div>
        <div
          className="inset-0"
          style={{
            width: isSmall
              ? "300px"
              : isMobile
              ? "600px"
              : isTablet
              ? "900px"
              : "1200px",
            height: isSmall
              ? "180px"
              : isMobile
              ? "360px"
              : isTablet
              ? "540px"
              : "620px",
          }}
        >
          {/* <Leva /> */}
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <Suspense fallback={<CanvasLoader />}>
              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  position={isMobile ? [5, -6, -1] : [5, -2, -1]}
                  rotation={[0.3, 6.29, 0.001]}
                  scale={isSmall ? 2 : isMobile ? 6 : 13}
                />
                <HoloSmol
                  scale={2}
                  position={
                    isSmall
                      ? [3, -4, 0]
                      : isMobile
                      ? [5, -4, 0]
                      : isTablet
                      ? [5, -4, 0]
                      : [1.2, 0.93, -4]
                  }
                />
              </HeroCamera>
              <group>
                <TargetModel
                  position={
                    isMobile
                      ? [-9, -10, -10]
                      : isTablet
                      ? [-11, -7, -10]
                      : [-17, -12, -10]
                  }
                  scale={2}
                />
                <ReactLogo
                  position={
                    isSmall
                      ? [3, 4, 0]
                      : isMobile
                      ? [5, 4, 0]
                      : isTablet
                      ? [5, 4, 0]
                      : [11, 3, 0]
                  }
                />
                <Cube
                  position={
                    isSmall
                      ? [4, -5, 0]
                      : isMobile
                      ? [5, -5, 0]
                      : isTablet
                      ? [5, -5, 0]
                      : [11, -7.5, 0]
                  }
                />

                <Robot
                  position={
                    isSmall
                      ? [4, -5, 0]
                      : isMobile
                      ? [5, -5, 0]
                      : isTablet
                      ? [5, -5, 0]
                      : [-11.6, 5, 0]
                  }
                  scale={1.5}
                />
              </group>
              <ambientLight intensity={1} />
              <directionalLight
                intensity={1.5}
                position={[0, -Math.PI / 2, 5]}
              />
            </Suspense>
          </Canvas>
        </div>
            <div className="relative flex justify-center mt-4">
            <CoolMode>
              <Button>“The greatest victory is that which requires no battle.”
              ― Sun Tzu</Button>
            </CoolMode>
            </div>
      </div>
    </section>
  );
}
