import Image from "next/image";
import React from "react";
import { Work } from "@/types/types"; // Assuming you have a separate types file or define the Work interface here
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import { motion } from "framer-motion";

interface WorkCardProps {
  data: Work;
}

export function CirclingBorder() {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <motion.div
        className="absolute w-full h-full border-4 border-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        style={{
          borderTop: "4px solid blue",
          borderRight: "4px solid green",
          borderBottom: "4px solid yellow",
          borderLeft: "4px solid red",
        }}
      ></motion.div>
      <span className="text-white">Next.js</span>
    </div>
  );
}

const WorkCard: React.FC<WorkCardProps> = ({ data }) => {
  const { projectName, shortDes, types, imageUrl, slug } = data;

  return (
    <div className="w-full h-full p-6 font-[Orbitron] border-[0.5px] border-[#ffffff3b]  ">
      <div className="relative w-full h-[400px] max-md:h-[350px] overflow-hidden group">
        <Image
          src={imageUrl || "/default-image.jpg"} // Fallback image
          alt={`${projectName} project image`}
          fill // Makes it responsive within the parent div
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="w-full flex flex-col gap-4 py-4">
        <h1 className="text-xl font-semibold">{projectName}</h1>
        <p className="text-sm">{shortDes}</p>

        <div className="flex gap-4 flex-grow flex-wrap">
          {types.map((type, index) => (
            <div key={index} className="badge badge-outline p-3 badge-xs">
              <p className=" max-md:text-[8px]">{type}</p>
            </div>
          ))}
        </div>

        <span>
          <Link
            href={`/works/${slug}`}
            className="link link-hover max-md:text-[13px]"
          >
            View Project <ChevronRightIcon />{" "}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default WorkCard;
