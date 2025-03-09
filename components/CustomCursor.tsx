"use client";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null); // Start with `null` to prevent SSR mismatch

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768); // Enable only for screens wider than 768px
    };

    checkScreenSize(); // Run check after mount
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isDesktop === null) return null; // Prevents rendering before client mounts

  if (!isDesktop) return null; // Don't render on mobile

  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={30}
      color="255, 255, 255"
      outerAlpha={0.2}
      innerScale={1.2}
      outerScale={4}
      clickables={[
        "a",
        "button",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="radio"]',
        'input[type="checkbox"]',
        ".link",
      ]}
    />
  );
};

export default CustomCursor;
