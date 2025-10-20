"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Card } from "./components/Card";
import CurvedLoop from "./components/CurvedLoop";
import { Skiper67 } from "./components/v1/skiper67";

export default function App() {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      setCurrentSection(hash || "home");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="app bg-[#f5f4f3] min-h-screen flex flex-col">
      <Navbar />

      {currentSection === "home" && <Hero />}

      {currentSection === "projects" && (
        <div className="flex flex-1 items-center justify-center">
          <Card />
        </div>
      )}

      {currentSection === "skills" && (
        <div className="flex flex-1 items-center justify-center">
          <Skiper67 />
        </div>
      )}

      {currentSection === "about" && (
        <div className="flex flex-col">
          
          {/* CurvedLoop animation below the about section */}
          <CurvedLoop 
            marqueeText="Innovation ✦ Creativity ✦ Excellence ✦ Passion ✦ Design ✦"
            speed={2}
            curveAmount={400}
            direction="left"
            interactive={true}
            className="text-gray-500"
          />
        </div>
      )}
    </div>
  );
}