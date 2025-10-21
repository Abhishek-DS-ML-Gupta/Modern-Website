"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Card } from "./components/Card";
import CurvedLoop from "./components/CurvedLoop";
import { Skiper67 } from "./components/v1/skiper67";
import Shuffle from './components/Shuffle';
import ScrollVelocity from './components/ScrollVelocity';
import CircularGallery from './components/CircularGallery';
import DomeGallery from './components/DomeGallery';


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
          <div className="absolute top-30">
            <Shuffle
              text="Our Skills"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              className="text-gray-300"
            />
          </div>
          <div className="w-full h-full flex top-80">
            <Skiper67 />
          </div>
        </div>

      )}

      {currentSection === "about" && (
        <div className="flex flex-col">
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery bend={3} textColor="text-gray-300" borderRadius={0.05} scrollEase={0.02} />
          </div>
          <div style={{ marginTop: '300px' }}>
            <ScrollVelocity
              texts={['React Bits', 'Scroll Down']}
              velocity={75}
              className="custom-scroll-text text-[#fcfcff]"
            />
          </div>

          <div style={{ width: '100vw', height: '100vh' , marginTop: '200px' }}>
            <DomeGallery />
          </div>

          <div>
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
          
        </div>
      )}
    </div>
  );
}
