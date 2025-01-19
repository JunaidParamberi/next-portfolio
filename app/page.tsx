"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import { motion, useScroll, useSpring } from "motion/react";
import { useInView } from "react-intersection-observer"; // Correct import
import WorkCard from "@/components/WorkCard";
import cardImg from "@/assets/images/reehyn.jpg";
import cardImg2 from "@/assets/images/img2.jpg";

import About from "@/components/About";
import Link from "next/link";
import Clients from "@/components/Clients";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Correctly destructuring useInView
  const { inView } = useInView({
    triggerOnce: false, // Allow animation every time it comes into view
    threshold: 0.9, // Trigger when 90% of the section is in the viewport
  });

  // Manage delay increasing with each scroll
  const [, setDelay] = useState(0.5);

  useEffect(() => {
    if (inView) {
      setDelay((prevDelay) => prevDelay + 0.2); // Increase delay over time
    }
  }, [inView]);

  const works = [
    {
      id: 1,
      item: "Window Line UAE",
      imageUrl: cardImg,
      shortDes: "AI driven design tool for the modern web.",
      types: ["Web Design", "Ui/Ux Design", "Web Development"],
      des: `I was responsible for designing and developing the comprehensive website for Window Line UAE, a company that excels in interior design, general contracting, and maintenance services. The website was meticulously crafted to highlight the company’s extensive portfolio, including wall coverings, window furnishings, partitioning, and ceiling solutions. The design approach focused on creating a modern, clean, and user-friendly interface that not only showcases their expertise but also enhances the overall user experience. Key features of the website include intuitive navigation, detailed service descriptions, and visually appealing layouts that reflect Window Line UAE’s commitment to quality and innovation. The site was also optimized for both desktop and mobile platforms, ensuring accessibility and a seamless browsing experience across all devices. Each section of the website was designed to convey the company’s professionalism and dedication to delivering high-quality results, from initial consultation through to project completion. Overall, the website serves as a crucial tool in reinforcing Window Line UAE’s brand identity, providing potential clients with a clear understanding of the company’s capabilities and values.`,
    },
    {
      id: 2,
      item: "Window Line UAE",
      imageUrl: cardImg2,
      shortDes: "AI driven design tool for the modern web.",
      types: ["Web Design", "Ui/Ux Design", "Web Development"],
      des: `I was responsible for designing and developing the comprehensive website for Window Line UAE, a company that excels in interior design, general contracting, and maintenance services. The website was meticulously crafted to highlight the company’s extensive portfolio, including wall coverings, window furnishings, partitioning, and ceiling solutions. The design approach focused on creating a modern, clean, and user-friendly interface that not only showcases their expertise but also enhances the overall user experience. Key features of the website include intuitive navigation, detailed service descriptions, and visually appealing layouts that reflect Window Line UAE’s commitment to quality and innovation. The site was also optimized for both desktop and mobile platforms, ensuring accessibility and a seamless browsing experience across all devices. Each section of the website was designed to convey the company’s professionalism and dedication to delivering high-quality results, from initial consultation through to project completion. Overall, the website serves as a crucial tool in reinforcing Window Line UAE’s brand identity, providing potential clients with a clear understanding of the company’s capabilities and values.`,
    },
    {
      id: 3,
      item: "Window Line UAE",
      imageUrl: cardImg,
      shortDes: "AI driven design tool for the modern web.",
      types: ["Web Design", "Ui/Ux Design", "Web Development"],
      des: `I was responsible for designing and developing the comprehensive website for Window Line UAE, a company that excels in interior design, general contracting, and maintenance services. The website was meticulously crafted to highlight the company’s extensive portfolio, including wall coverings, window furnishings, partitioning, and ceiling solutions. The design approach focused on creating a modern, clean, and user-friendly interface that not only showcases their expertise but also enhances the overall user experience. Key features of the website include intuitive navigation, detailed service descriptions, and visually appealing layouts that reflect Window Line UAE’s commitment to quality and innovation. The site was also optimized for both desktop and mobile platforms, ensuring accessibility and a seamless browsing experience across all devices. Each section of the website was designed to convey the company’s professionalism and dedication to delivering high-quality results, from initial consultation through to project completion. Overall, the website serves as a crucial tool in reinforcing Window Line UAE’s brand identity, providing potential clients with a clear understanding of the company’s capabilities and values.`,
    },
    {
      id: 4,
      item: "Window Line UAE",
      imageUrl: cardImg2,
      shortDes: "AI driven design tool for the modern web.",
      types: ["Web Design", "Ui/Ux Design", "Web Development"],
      des: `I was responsible for designing and developing the comprehensive website for Window Line UAE, a company that excels in interior design, general contracting, and maintenance services. The website was meticulously crafted to highlight the company’s extensive portfolio, including wall coverings, window furnishings, partitioning, and ceiling solutions. The design approach focused on creating a modern, clean, and user-friendly interface that not only showcases their expertise but also enhances the overall user experience. Key features of the website include intuitive navigation, detailed service descriptions, and visually appealing layouts that reflect Window Line UAE’s commitment to quality and innovation. The site was also optimized for both desktop and mobile platforms, ensuring accessibility and a seamless browsing experience across all devices. Each section of the website was designed to convey the company’s professionalism and dedication to delivering high-quality results, from initial consultation through to project completion. Overall, the website serves as a crucial tool in reinforcing Window Line UAE’s brand identity, providing potential clients with a clear understanding of the company’s capabilities and values.`,
    },
  ];

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          zIndex: 1200,
          background: "white",
        }}
      />
      <div className="w-full flex flex-col items-center">
        <div className="w-[80%] py-6 flex flex-col gap-4">
          <Hero />

          <div className="w-full pb-20 flex flex-col items-center" id="home">
            <h2 className="text-center text-xl py-5">FEATURED WORK</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full py-8">
              {works.map((work, index) => (
                <WorkCard key={index} data={work} />
              ))}
            </div>

            <Link href="works" className=" btn btn-outline px-8 font-light">
              View All
            </Link>
          </div>

          <About />
          <Clients />

          {/* <span>
            <h1
              style={{
                fontVariationSettings: "'wdth' 100",
                transition: "font-variation-settings 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.fontVariationSettings =
                  "'wdth' 200")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.fontVariationSettings =
                  "'wdth' 100")
              }
            >
              H
            </h1>

            <h1>U</h1>
          </span> */}
        </div>
      </div>
    </>
  );
}
