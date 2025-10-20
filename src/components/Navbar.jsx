import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerMenuRef = useRef(null);
  const overlayRef = useRef(null);
  const navItemsRefs = useRef([]);
  
  // Initialize nav items refs
  navItemsRefs.current = [];

  const addToNavItemsRefs = (el) => {
    if (el && !navItemsRefs.current.includes(el)) {
      navItemsRefs.current.push(el);
    }
  };

  // Toggle navigation menu
  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      // Animate menu open
      gsap.to(overlayRef.current, {
        x: 0,
        duration: 0.4,
        ease: 'power3.out'
      });
      
      // Animate nav items in with stagger
      gsap.fromTo(navItemsRefs.current, 
        { x: -100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.2
        }
      );
    } else {
      // Animate menu close
      gsap.to(overlayRef.current, {
        x: '-100%',
        duration: 0.8,
        ease: 'power3.in'
      });
      
      // Animate nav items out with stagger
      gsap.to(navItemsRefs.current, {
        x: -100,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in'
      });
    }
  };

  // Handle nav item click
  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      gsap.to(overlayRef.current, {
        x: '-100%',
        duration: 0.8,
        ease: 'power3.in'
      });
    }
  };

  // Initialize scroll-triggered navbar animation
  useEffect(() => {
    // Navbar background animation on scroll
    gsap.to(".navbar", {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      duration: 0.5,
      scrollTrigger: {
        trigger: document.body,
        start: 'top -50',
        end: 99999,
        toggleActions: "play none none reverse"
      }
    });

    // Hamburger menu color animation on scroll
    gsap.to(".menu-bar1, .menu-bar2, .menu-bar3", {
      backgroundColor: '#333',
      duration: 0.5,
      scrollTrigger: {
        trigger: document.body,
        start: 'top -50',
        end: 99999,
        toggleActions: "play none none reverse"
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Hamburger menu animation
  useEffect(() => {
    if (!hamburgerMenuRef.current) return;
    
    const bars = hamburgerMenuRef.current.children;
    
    if (isMenuOpen) {
      // Rotate first bar
      gsap.to(bars[0], {
        rotation: -45,
        x: -11,
        y: 8,
        duration: 0.4,
        ease: 'power2.inOut'
      });
      
      // Fade out second bar
      gsap.to(bars[1], {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut'
      });
      
      // Rotate third bar
      gsap.to(bars[2], {
        rotation: 45,
        x: -9,
        y: -8,
        duration: 0.4,
        ease: 'power2.inOut'
      });
    } else {
      // Reset first bar
      gsap.to(bars[0], {
        rotation: 0,
        x: 0,
        y: 0,
        duration: 0.4,
        ease: 'power2.inOut'
      });
      
      // Reset second bar
      gsap.to(bars[1], {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.inOut'
      });
      
      // Reset third bar
      gsap.to(bars[2], {
        rotation: 0,
        x: 0,
        y: 0,
        duration: 0.4,
        ease: 'power2.inOut'
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .logo {
          position: fixed;
          z-index: 2;
          top: 1.5rem;
          left: 1.5rem;
          width: 120px;
          height: auto;
        }

        .hamburger-menu {
          position: fixed;
          top: 1rem;
          right: 2rem;
          z-index: 10;
          cursor: pointer;
        }

        .menu-bar1,
        .menu-bar2,
        .menu-bar3 {
          width: 3.5rem;
          height: 0.2rem;
          opacity:50;
          background-color: #a9a3a3ff;
          margin: 0.8rem 0;
          transition: background-color 0.5s ease;
        }

        .menu-bar2 {
          width: 2rem;
          margin-left: auto;
        }

        .overlay {
          z-index: 9;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          height: 100svh;
          opacity:50;
          background-color: rgba(0, 0, 0, 0.7);
          transform: translateX(-100%);
        }

        nav ul {
          height: 100vh;
          height: 100svh;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        nav ul li {
          height: 20%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        nav li:nth-of-type(1) {
          background-color: #fefcff;
        }

        nav li:nth-of-type(2) {
          background-color: #fefcff;
        }

        nav li:nth-of-type(3) {
          background-color: #fefcff;
        }

        nav li:nth-of-type(4) {
          background-color: #fefcff;
        }

        nav li:nth-of-type(5) {
          background-color: #fefcff;
        }

        nav li a {
          letter-spacing: 0.4rem;
          font-size: 2rem;
          opacity: 50;
          color: #000;
          text-decoration: none;
          text-transform: uppercase;
          font-family: 'ClashGrotesk', 'Nunito', sans-serif;
          font-weight: 200;
          transition: transform 0.3s ease;
        }

        nav li a:hover,
        nav li a:active {
          transform: scale(1.2);
        }

        @media (max-width: 52em) {
          html {
            font-size: 50%;
          }
        }

        @media (max-width: 37em) {
          .hamburger-menu {
            top: 0.5rem;
            right: 1rem;
          }
          .logo {
            top: 1rem;
            left: 1rem;
            width: 100px;
          }
        }
      `}</style>

      <nav className="navbar">
        <a href="#home">
          <img src="/logo.png" alt="Logo" className="logo" />
        </a>
        
        <div 
          ref={hamburgerMenuRef}
          className="hamburger-menu" 
          onClick={toggleNav}
        >
          <div className="menu-bar1"></div>
          <div className="menu-bar2"></div>
          <div className="menu-bar3"></div>
        </div>
      </nav>

      <div ref={overlayRef} className="overlay">
        <nav>
          <ul>
            {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
              <li 
                key={index} 
                ref={addToNavItemsRefs}
                onClick={handleNavClick}
              >
                <a href={`#${item}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;