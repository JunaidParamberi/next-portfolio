"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { works as workDatas } from "@/data/projectData";
import { ArrowUpRight } from "lucide-react";

const Page = () => {
  const { id } = useParams();
  const currentData = workDatas.find((work) => work.slug === id);

  // Always define hooks at the top level

  if (!currentData) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-xl">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center py-16 md:pt-32">
      <div className="w-[90%] md:w-[80%] flex flex-col items-center gap-8">
        <div className=" w-full flex gap-6 max-md:flex-col">
          {/* Project Title and Description */}
          <div className="w-full flex flex-col gap-6">
            <h1 className="text-4xl max-md:text-2xl font-semibold">
              {currentData.projectName}
            </h1>
            <h2 className="font-light text-md">{currentData.shortDes}</h2>

            {/* Project Types */}
            <div className="flex flex-wrap gap-2">
              {currentData.types.map((type, index) => (
                <span key={index} className=" badge badge-outline p-3 badge-xs">
                  <p className=" max-md:text-[8px]">{type}</p>
                </span>
              ))}
            </div>
          </div>

          <div className="w-[40%] max-md:w-full flex-col gap-6">
            {/* Client Name */}
            <div className="mb-6">
              <h3 className="text-lg  font-bold">Client</h3>
              <p className="opacity-90">{currentData?.clientName}</p>
            </div>

            {/* Project Year */}
            <div className="mb-6">
              <h3 className="text-lg  font-bold">Date</h3>
              <p className="opacity-90 ">{currentData?.projectYear}</p>
            </div>

            {/* Project Link - Styled as a Button */}
            <div className="mb-6 hover:">
              <h3 className="text-lg font-bold">Project Link</h3>
              <button className=" btn btn-outline flex btn-sm mt-3">
                <a
                  href={currentData?.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex max-md:flex-col gap-10 items-center">
          {/* Image Container */}
          <div className="w-[60%] max-md:w-full max-md:h-[300px] h-[450px] relative">
            <Image
              src={currentData.imageUrl}
              alt="Project Image"
              className="w-full h-full object-cover shadow-2xl shadow-[#2c255500]"
            />
          </div>

          {/* Project Description */}
          <div className="w-[40%] max-md:w-full md:border-l-2 md:pl-6">
            <h3 className="text-lg font-bold pb-4">About This Project</h3>
            <p className="md:max-h-[500px] md:overflow-y-auto">
              {currentData.des}
            </p>
          </div>
        </div>

        {/* Embedded Project */}
      </div>
    </div>
  );
};

export default Page;
