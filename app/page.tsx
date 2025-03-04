"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import { motion, useScroll, useSpring } from "motion/react";
import { useInView } from "react-intersection-observer"; // Correct import
import WorkCard from "@/components/WorkCard";
import { works as workDatas } from "@/data/projectData";

import About from "@/components/About";
import Link from "next/link";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Stacks from "@/components/Stacks";
import Contact from "@/components/Contact";

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
      //okay
    }
  }, [inView]);

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
        <div className="w-full py-6 flex flex-col gap-4">
          <Hero />
          <Stacks />
          <About />
          <div className=" w-full flex flex-col items-center" id="works">
            <div className="w-[80%] pb-20 flex flex-col items-center" id="home">
              <h2 className="text-center text-xl py-5">FEATURED WORK</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full py-8">
                {workDatas.map((workData, index) => (
                  <WorkCard key={index} data={workData} />
                ))}
              </div>

              <Link href="works" className=" btn btn-outline px-8 font-light">
                View All
              </Link>
            </div>
          </div>

          <Clients />
          <Services />
          <Contact />
        </div>
        <div className="gradient-bg">{/* Your content here */}</div>
      </div>
    </>
  );
}
