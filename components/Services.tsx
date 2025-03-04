import React from "react";
import { FaCode, FaPalette, FaMobileAlt } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaCode className="text-5xl text-primary" />, // Adding primary color from theme
    title: "Web Development",
    description:
      "I specialize in designing and developing responsive, user-friendly websites that provide seamless user experiences. My goal is to merge creativity with functionality.",
  },
  {
    icon: <FaPalette className="text-5xl text-primary" />, // Adding secondary color
    title: "Graphic Design",
    description:
      "I leverage my artistic background to create innovative digital solutions that engage users. I design stunning graphics that leave a lasting impression while ensuring a seamless user experience.",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-primary" />, // Adding accent color
    title: "UI/UX Design",
    description:
      "I specialize in designing intuitive user interfaces and experiences, ensuring responsive design across all devices while maintaining aesthetic and functional integrity.",
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="w-full flex py-20 flex-col items-center border-t border-b gap-5 border-gray-400 bg-background"
    >
      <div className=" w-[80%] flex flex-col items-center pb-5">
        <h1 className="text-5xl w-full text-left text-primary">What I Do</h1>
      </div>

      <div className="w-full flex flex-col items-center ">
        <div className="w-[80%] flex flex-wrap justify-between items-center gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] flex flex-col gap-5 p-6 rounded-lg shadow-lg bg-cardBackground hover:shadow-xl transition-shadow"
            >
              {service.icon}
              <h2 className="text-3xl font-bold text-primary">
                {service.title}
              </h2>
              <p className="opacity-80 text-secondaryText">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
