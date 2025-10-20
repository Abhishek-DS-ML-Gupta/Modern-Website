// src/components/v1/skiper67.jsx
"use client";

import { AnimatePresence, motion, useSpring } from "framer-motion";
import { Play, Plus } from "lucide-react";
import {
  MediaControlBar,
  MediaController,
  MediaMuteButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaTimeDisplay,
  MediaTimeRange,
  MediaVolumeRange,
} from "media-chrome/react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

export const VideoPlayer = ({ style, ...props }) => (
  <MediaController
    style={{
      ...style,
    }}
    {...props}
  />
);

export const VideoPlayerControlBar = (props) => (
  <MediaControlBar {...props} />
);

export const VideoPlayerTimeRange = ({
  className,
  ...props
}) => (
  <MediaTimeRange
    className={cn(
      "[--media-range-thumb-opacity:0] [--media-range-track-height:2px]",
      className,
    )}
    {...props}
  />
);

export const VideoPlayerTimeDisplay = ({
  className,
  ...props
}) => (
  <MediaTimeDisplay className={cn("p-2.5", className)} {...props} />
);

export const VideoPlayerVolumeRange = ({
  className,
  ...props
}) => (
  <MediaVolumeRange className={cn("p-2.5", className)} {...props} />
);

export const VideoPlayerPlayButton = ({
  className,
  ...props
}) => (
  <MediaPlayButton className={cn("", className)} {...props} />
);

export const VideoPlayerSeekBackwardButton = ({
  className,
  ...props
}) => (
  <MediaSeekBackwardButton className={cn("p-2.5", className)} {...props} />
);

export const VideoPlayerSeekForwardButton = ({
  className,
  ...props
}) => (
  <MediaSeekForwardButton className={cn("p-2.5", className)} {...props} />
);

export const VideoPlayerMuteButton = ({
  className,
  ...props
}) => (
  <MediaMuteButton className={cn("", className)} {...props} />
);

export const VideoPlayerContent = ({
  className,
  ...props
}) => (
  <video className={cn("mb-0 mt-0", className)} {...props} />
);

export const Skiper67 = () => {
  const [showVideoPopOver, setShowVideoPopOver] = useState(false);

  const SPRING = {
    mass: 0.1,
  };

  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);
  const opacity = useSpring(0, SPRING);

  const handlePointerMove = (e) => {
    opacity.set(1);
    const bounds = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - bounds.left);
    y.set(e.clientY - bounds.top);
  };

  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#f5f4f3]">
      <div className="absolute top-1/4 grid content-start justify-items-center gap-6 text-center">
        <span className="after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-transparent after:content-['']">
          Click the video to play
        </span>
      </div>
      <AnimatePresence>
        {showVideoPopOver && (
          <VideoPopOver setShowVideoPopOver={setShowVideoPopOver} />
        )}
      </AnimatePresence>
      <div
        onMouseMove={handlePointerMove}
        onMouseLeave={() => {
          opacity.set(0);
        }}
        onClick={() => setShowVideoPopOver(true)}
        className="size-45"
      >
        <motion.div
          style={{ x, y, opacity }}
          className="relative z-20 flex w-fit select-none items-center justify-center gap-2 p-2 text-sm text-white mix-blend-exclusion"
        >
          <Play className="size-4 fill-white" /> Play
        </motion.div>
        <video
          autoPlay
          muted
          playsInline
          loop
          className="h-full w-full object-cover"
        >
          <source src="/showreel/PixVerse_V5_Image_Text_360P_create_modern_car_.mp4" />
        </video>
      </div>
    </section>
  );
};

const VideoPopOver = ({
  setShowVideoPopOver,
}) => {
  return (
    <div className="fixed left-0 top-0 z-[101] flex h-screen w-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-background/90 absolute left-0 top-0 h-full w-full backdrop-blur-lg"
        onClick={() => setShowVideoPopOver(false)}
      ></motion.div>
      <motion.div
        initial={{ clipPath: "inset(43.5% 43.5% 33.5% 43.5% )", opacity: 0 }}
        animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
        exit={{
          clipPath: "inset(43.5% 43.5% 33.5% 43.5% )",
          opacity: 0,
          transition: {
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 20,
            opacity: { duration: 0.2, delay: 0.8 },
          },
        }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="relative aspect-video max-w-7xl"
      >
        <VideoPlayer style={{ width: "100%", height: "100%" }}>
          <VideoPlayerContent
            src="/showreel/PixVerse_V5_Image_Text_360P_create_modern_car_.mp4"
            autoPlay
            slot="media"
            className="w-full object-cover"
            style={{ width: "100%", height: "100%" }}
          />

          <span
            onClick={() => setShowVideoPopOver(false)}
            className="absolute right-2 top-2 z-10 cursor-pointer rounded-full p-1 transition-colors"
          >
            <Plus className="size-5 rotate-45 text-white" />
          </span>
          <VideoPlayerControlBar className="absolute bottom-0 left-1/2 flex w-full max-w-7xl -translate-x-1/2 items-center justify-center px-5 mix-blend-exclusion md:px-10 md:py-5">
            <VideoPlayerPlayButton className="h-4 bg-transparent" />
            <VideoPlayerTimeRange className="bg-transparent" />
            <VideoPlayerMuteButton className="size-4 bg-transparent" />
          </VideoPlayerControlBar>
        </VideoPlayer>
      </motion.div>
    </div>
  );
};