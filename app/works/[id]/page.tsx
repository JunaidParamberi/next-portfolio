"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { works as workDatas } from "@/data/projectData";
import { ArrowUpRight } from "lucide-react";

const Page = () => {
  const { id } = useParams();
  const currentData = workDatas.find((work) => work.slug === id);

  // Always define hooks at the top level
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = currentData?.Images?.length || 0;

  if (!currentData) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-xl">Project not found.</p>
      </div>
    );
  }

  // Next and Previous Slide Functions
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

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
            <div className="mb-6">
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

        <div className=" w-full">
          <Image
            src={currentData.imageUrl}
            alt="Project Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Project Description */}
        <div className="w-full">
          <p>{currentData.des}</p>
        </div>

        {/* Daisy UI Carousel */}
        {/* {totalSlides > 0 && (
          <div className="carousel w-full relative">
            {currentData?.Images?.map((image, index) => (
              <div
                key={index}
                className={`carousel-item w-full transition-all duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0 absolute"
                }`}
              >
                <Image
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))} */}

        {/* Navigation Arrows */}
        {/* <button
              onClick={prevSlide}
              className="absolute left-5 top-1/2 -translate-y-1/2 btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-5 top-1/2 -translate-y-1/2 btn btn-circle"
            >
              ❯
            </button>
          </div>
        )} */}

        {/* Dots Indicator */}
        {/* {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {currentData?.Images?.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex !== index ? "bg-gray-800" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )} */}

        {/* Embedded Project */}
      </div>
    </div>
  );
};

export default Page;
