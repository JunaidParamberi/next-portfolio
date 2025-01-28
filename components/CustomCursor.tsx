"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
      }}
      animate={{
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
      }}
    />
  );
}
