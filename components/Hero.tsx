"use client";
import React from "react";
import * as motion from "motion/react-client";
import useTypingEffect from "@/hooks/useTypingEffect";
import useZoomEffect from "@/hooks/useZoomEffect";

const Hero = () => {
  const text = "Junaid Paramberi"; // Your desired text for h1
  const firstPartText = "Welcome to my creative space!"; // First part of paragraph (before <br />)
  const secondPartText =
    "As a freelance web developer, I specialize in crafting responsive, user-friendly websites that blend creativity with functionality. Let’s collaborate to transform your ideas into exceptional digital experiences."; // Second part of paragraph (after <br />)

  const typingSpeed = 100; // Speed of random letter change (in ms)
  const typingSpeedP = 7; // Speed of random letter change (in ms)

  // Call the custom hook to get the animated text for h1
  const displayText = useTypingEffect(text, typingSpeed);

  // Call the custom hook for typing effect for the first part of the paragraph
  const firstPartDisplayText = useTypingEffect(firstPartText, typingSpeedP);

  // Call the custom hook for typing effect for the second part of the paragraph
  const secondPartDisplayText = useTypingEffect(secondPartText, typingSpeedP);

  // Call the custom zoom effect hook
  const zoomProps = useZoomEffect(1); // Use initial scale of 1

  return (
    <motion.div
      className="w-full h-[80vh] flex flex-col justify-center items-center gap-4"
      {...zoomProps} // Spread zoom props here to apply the zoom effect
    >
      <motion.h1 className="text-6xl text-center font-[700]">
        {displayText}
      </motion.h1>
      <motion.p className="text-center text-xl opacity-70">
        {firstPartDisplayText}
        <br />
        {secondPartDisplayText}
      </motion.p>
    </motion.div>
  );
};

export default Hero;
