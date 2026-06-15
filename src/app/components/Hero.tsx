"use client";
import React, { Suspense } from "react";
import { SparklesText } from "./ui/SparklesText";
import { Canvas } from "@react-three/fiber";
import { CameraShake, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "./HackerRoom";
import CanvasLoader from "./CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "@/constants";
import TargetModel from "./TargetModel";
import ReactLogo from "./ReactLogo";
// import Cube from "./Cube";
import { HoloSmol } from "./HoloSmol";
import { Robot } from "./Robot";
import HeroCamera from "./HeroCamera";
import { Button } from "@/app/components/ui/button";
import { CoolMode } from "@/app/components/ui/CoolMode";
import { Hololive } from "./hololive";
import { Component, ReactNode } from "react";

class ThreeErrorBoundary extends Component<{ children: ReactNode }, { error: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: false };
  }
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}

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
                <ThreeErrorBoundary>
                  <TargetModel
                    position={
                      isMobile
                        ? [-5, -7, 0]
                        : isTablet
                        ? [-8, -7, 0]
                        : [-11, -9, 0]
                    }
                    scale={isSmall ? 0.002 : isMobile ? 0.0025 : 0.004}
                  />
                </ThreeErrorBoundary>
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
                {/* <Cube
                  position={
                    isSmall
                      ? [4, -5, 0]
                      : isMobile
                      ? [5, -5, 0]
                      : isTablet
                      ? [5, -5, 0]
                      : [11, -7.5, 0]
                  }
                /> */}
                <Hololive
                  position={
                    isSmall
                      ? [4, -5, 0]
                      : isMobile
                      ? [5, -5, 0]
                      : isTablet
                      ? [5, -5, 0]
                      : [11, -13, 2]
                  }
                  rotation={[0, -1.1, 0]}
                  scale={5}
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
        <div className="flex flex-col items-center justify-center mt-4 gap-2">
          <span className="text-xs text-white/40 animate-bounce tracking-widest uppercase flex flex-col items-center gap-1">
            click me
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
          <CoolMode>
            <Button className="px-6 py-3 text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 cursor-pointer">
              {"\"The greatest victory is that which requires no battle.\" — Sun Tzu"}
            </Button>
          </CoolMode>
        </div>
      </div>
    </section>
  );
}
