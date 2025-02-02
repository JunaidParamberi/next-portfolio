"use client";
import React from "react";
import * as motion from "motion/react-client";
import useZoomEffect from "@/hooks/useZoomEffect";
import Image from "next/image";

import avtarAndIcon from "@/assets/images/icons/AvatarAndIcons.svg";
import DownloadingOutlinedIcon from "@mui/icons-material/DownloadingOutlined";

const Hero = () => {
  const zoomProps = useZoomEffect(1); // Use initial scale of 1

  return (
    <motion.div className="w-full flex flex-col items-center">
      <div className="flex flex-col-reverse md:flex-row w-[80%] justify-between items-center py-12 md:pt-28 ">
        <motion.div
          className="w-full py-5 md:w-[60%] flex flex-col justify-center gap-6 text-center md:text-left"
          {...zoomProps}
        >
          <motion.h1 className="text-3xl md:text-6xl font-[700] text-left">
            Junaid Paramberi
          </motion.h1>
          <motion.p className="text-md md:text-xl opacity-70 text-left">
            Welcome to my creative space! <br />
            As a freelance web developer, I specialize in crafting responsive,
            user-friendly websites that blend creativity with functionality.
            Let’s collaborate to transform your ideas into exceptional digital
            experiences.
          </motion.p>
          <div className="flex w-full md:justify-start">
            <button className="btn btn-outline btn-wide font-thin rounded-md max-md:w-full">
              Download my CV
              <DownloadingOutlinedIcon fontSize="small" />
            </button>
          </div>
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
          className="w-full md:w-[40%] flex justify-center"
        >
          <Image
            className="w-full max-w-[300px] md:max-w-[450px]"
            src={avtarAndIcon}
            alt="avatar"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
