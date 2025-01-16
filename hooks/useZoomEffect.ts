// hooks/useZoomEffect.ts
"use client";
import { useState } from "react";
import { motion } from "motion/react-client";

// Custom hook for zoom effect
const useZoomEffect = (initialScale: number = 1) => {
  const [scale, setScale] = useState<number>(initialScale);

  // Function to handle hover and zoom-in effect
  const onHoverStart = () => setScale(1.1); // Zoom in on hover
  const onHoverEnd = () => setScale(initialScale); // Reset zoom to initial scale

  // Return the motion.div configuration with zoom effect
  const zoomProps = {
    scale: scale,
    onHoverStart,
    onHoverEnd,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  };

  return zoomProps;
};

export default useZoomEffect;
