"use client";

import { useState, useEffect } from "react";

// Sections / Components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Card } from "./components/Card";
import CurvedLoop from "./components/CurvedLoop";
import { Skiper67 } from "./components/v1/skiper67";
import Shuffle from "./components/Shuffle";
import ScrollVelocity from "./components/ScrollVelocity";
import CircularGallery from "./components/CircularGallery";
import DomeGallery from "./components/DomeGallery";
import Contact from "./components/Contact";
import ContactSummary from "./components/ContactSummary";
import Services from "./components/Services";
import ServiceSummary from "./components/ServiceSummary";

export default function App() {
  const [currentSection, setCurrentSection] = useState("home");

  // Handle hash navigation (e.g., #home, #about, #contact)
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
    <div className="app bg-[#f5f4f3] min-h-screen flex flex-col text-gray-900 overflow-x-hidden">
      {/* --- Navbar --- */}
      <Navbar />

      {/* --- Home Section --- */}
      {currentSection === "home" && <Hero />}

      {/* --- Projects Section --- */}
      {currentSection === "projects" && (
        <div className="flex flex-1 items-center justify-center py-20">
          <Card />
        </div>
      )}

      {/* --- Skills Section --- */}
      {currentSection === "skills" && (
        <div className="flex flex-col items-center justify-center py-20 relative">
          <div className="mb-12" style={{paddingTop:"200px"}}>
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
              className="text-gray-400 text-5xl font-bold"
            />
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <Skiper67 />
          </div>
          <div style={{paddingTop:"200px"}}>
            <Services />
            <ServiceSummary />
          </div>
        </div>
      )}

      {/* --- About Section --- */}
      {currentSection === "about" && (
        <section
          id="about"
          className="flex flex-col items-center justify-center bg-[#f5f4f3] text-gray-800"
        >
          {/* Circular Gallery */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
            <CircularGallery
              bend={1.5}
              textColor="text-gray-300"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>

          {/* Scroll Velocity Text */}
          <div style={{   paddingTop : '200px' , paddingBottom : '200px'  }}>
            <ScrollVelocity
              texts={["React Bits", "Scroll Down"]}
          
              velocity={75}
              className="custom-scroll-text text-white"
            />
          </div>

          {/* Dome Gallery */}
          <div className="w-full h-screen flex items-center justify-center">
            <DomeGallery />
          </div>

          {/* Curved Loop */}
          <div className="w-full flex justify-center">
            <CurvedLoop
              marqueeText="Innovation ✦ Creativity ✦ Excellence ✦ Passion ✦ Design ✦"
              speed={2}
              curveAmount={400}
              direction="left"
              interactive={true}
              className="text-gray-500"
            />
          </div>
        </section>
      )}

      {/* --- Contact Section --- */}
      {currentSection === "contact" && (
        <section id="contact" className="flex flex-col w-full pt-32">
          <div className="mb-20">
            <ContactSummary />
          </div>
          <Contact />
        </section>
      )}
    </div>
  );
}
