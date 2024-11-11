"use client";
import { navLinks } from "@/constants";
import React, { useState } from "react";
export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  
  const NavItems = () => {
    return (
      <ul className="nav-ul">
        {navLinks.map(item => (
          <li key={item.id} className="nav-li">
            <a href={item.href} className="nav-li_a" onClick={()=>{}}> {item.name}</a>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <header className="text-white fixed top-0 left-0 right-0 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="#"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
           nez
          </a>
          <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu" >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div> 
      </div>
      <div className={`absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-50 mx-auto sm:hidden block ${isOpen ? `max-h-screen` : `max-h-0`}`}>
        <nav className="">
          <NavItems />
        </nav>
      </div>
    </header>
  );
}
