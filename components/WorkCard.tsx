import Image from "next/image";
import React from "react";
import { Work } from "@/types/types"; // Assuming you have a separate types file or define the Work interface here
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

interface WorkCardProps {
  data: Work;
}

const WorkCard: React.FC<WorkCardProps> = ({ data }) => {
  const { item, shortDes, types, imageUrl, id } = data;

  return (
    <div className="w-full h-full p-1 font-[Orbitron]">
      <div className="relative w-full h-[550px] max-md:h-[350px] overflow-hidden group">
        <Image
          src={imageUrl || "/default-image.jpg"} // Fallback image
          alt={`${item} project image`}
          fill // Makes it responsive within the parent div
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="w-full flex flex-col gap-4 py-4">
        <h1 className="text-xl font-semibold">{item}</h1>
        <p>{shortDes}</p>

        <div className="flex gap-4">
          {types.map((type, index) => (
            <div key={index} className="badge badge-soft badge-primary">
              <p className=" max-md:text-[10px]">{type}</p>
            </div>
          ))}
        </div>

        <span>
          <Link
            href={`/works/${id}`}
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
