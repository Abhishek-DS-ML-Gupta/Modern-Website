"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "../lib/utils"; // make sure utils.js exists

export function Card() {
  const images = [
    { src: "/images/image.png", alt: "Illustrations by my fav AarzooAly" },
    { src: "/images/image1.png", alt: "Illustrations by my fav AarzooAly" },
    { src: "/images/image2.png", alt: "Illustrations by my fav AarzooAly" },
    { src: "/images/image3.png", alt: "Illustrations by my fav AarzooAly" },
    { src: "/images/image4.png", alt: "Illustrations by my fav AarzooAly" },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3]">
      <HoverExpand images={images} />
    </div>
  );
}

const HoverExpand = ({ images, className }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className={cn("relative w-full max-w-6xl px-5", className)}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <div className="flex w-full items-center justify-center gap-1">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-3xl"
              initial={{ width: "2.5rem", height: "20rem" }}
              animate={{
                width: activeImage === index ? "24rem" : "5rem",
                height: "24rem",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                  />
                )}
              </AnimatePresence>

              {/* ✅ Removed the <p> that showed image.code */}

              <img
                src={image.src}
                alt={image.alt}
                className="size-full object-cover"
                draggable="false"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
