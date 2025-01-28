"use client";
import React from "react";
import * as motion from "motion/react-client";
// import useTypingEffect from "@/hooks/useTypingEffect";
import useZoomEffect from "@/hooks/useZoomEffect";
import Image from "next/image";

import avtarAndIcon from "@/assets/images/icons/AvatarAndIcons.svg";
import DownloadingOutlinedIcon from "@mui/icons-material/DownloadingOutlined";

const Hero = () => {
  // const text = "Junaid Paramberi"; // Your desired text for h1
  // const firstPartText = "Welcome to my creative space!"; // First part of paragraph (before <br />)
  // const secondPartText =
  //   "As a freelance web developer, I specialize in crafting responsive, user-friendly websites that blend creativity with functionality. Let’s collaborate to transform your ideas into exceptional digital experiences."; // Second part of paragraph (after <br />)

  // const typingSpeed = 100; // Speed of random letter change (in ms)
  // const typingSpeedP = 7; // Speed of random letter change (in ms)

  // // Call the custom hook to get the animated text for h1
  // const displayText = useTypingEffect(text, typingSpeed);

  // // Call the custom hook for typing effect for the first part of the paragraph
  // const firstPartDisplayText = useTypingEffect(firstPartText, typingSpeedP);

  // // Call the custom hook for typing effect for the second part of the paragraph
  // const secondPartDisplayText = useTypingEffect(secondPartText, typingSpeedP);

  // Call the custom zoom effect hook
  const zoomProps = useZoomEffect(1); // Use initial scale of 1

  return (
    <div className=" flex w-full justify-between  h-[80vh] items-center">
      <motion.div
        className="w-[60%] flex flex-col justify-center  gap-6"
        {...zoomProps} // Spread zoom props here to apply the zoom effect
      >
        <motion.h1 className="text-6xl  font-[700]">
          {/* {displayText} */}
          Junaid Paramberi
        </motion.h1>
        <motion.p className=" text-xl opacity-70">
          {/* {firstPartDisplayText} */}
          Welcome to my creative space! <br />
          As a freelance web developer, I specialize in crafting responsive,
          user-friendly websites that blend creativity with functionality. Let’s
          collaborate to transform your ideas into exceptional digital
          experiences.
          {/* <br />
        {secondPartDisplayText} */}
        </motion.p>
        <button className="btn btn-outline btn-wide font-thin rounded-md">
          Download my cv
          <DownloadingOutlinedIcon fontSize="small" />
        </button>
      </motion.div>
      <motion.div
        whileHover={{
          scale: [null, 1.1, 1.1],
          transition: {
            duration: 0.5,
            times: [0, 0.6, 1],
            ease: ["easeInOut", "easeOut"],
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="w-[30%]"
      >
        <Image className="w-full" src={avtarAndIcon} alt="avatar" />
      </motion.div>
    </div>
  );
};

export default Hero;
