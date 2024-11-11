import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
export const dynamic = "force-dynamic";

export default function page() {
  return (
    <main className="max-w-7xl mx-auto">
      <Hero />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
