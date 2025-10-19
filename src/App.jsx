"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Card } from "./components/Card"; // Skiper52 animation component

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
          {/* 💡 This centers the card in the middle of the screen */}
          <Card />
        </div>
      )}
    </div>
  );
}
