"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Work } from "@/types/types";
import { works as workDatas } from "@/data/projectData";

const Page = () => {
  const { id } = useParams();
  const currentData = workDatas.find((work: Work) => work.slug === id);

  if (!currentData) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-xl">Project not found.</p>
      </div>
    );
  }

  // Track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = currentData?.Images?.length;

  // Next and Previous Slide Functions
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div className="min-h-screen flex justify-center py-16 md:pt-32">
      <div className="w-[90%] md:w-[80%] flex flex-col items-center gap-8">
        {/* Project Title and Description */}
        <div className="w-full flex flex-col gap-6">
          <h1 className="text-4xl max-md:text-2xl font-semibold">
            {currentData.projectName}
          </h1>
          <h2 className="font-light text-xl">{currentData.shortDes}</h2>
        </div>

        {/* Project Types */}
        <div className="w-full flex flex-wrap gap-2">
          {currentData.types.map((type, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg text-sm"
            >
              {type}
            </span>
          ))}
        </div>

        {/* Project Description */}
        <div className="w-full">
          <p>{currentData.des}</p>
        </div>

        {/* Daisy UI Carousel */}
        <div className="carousel w-full relative">
          {currentData?.Images?.map((image, index) => (
            <div
              key={index}
              className={`carousel-item  w-full transition-all duration-500 ${
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
          ))}

          {/* Navigation Arrows */}
          <button
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

        {/* Dots Indicator */}
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
        <iframe
          src="https://boehringeringelheim-interactive.netlify.app/"
          className=" w-full h-[500px] md:h-[700px] rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
