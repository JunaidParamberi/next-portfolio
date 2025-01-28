import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiWebflow,
  SiNodedotjs,
  SiFirebase,
} from "react-icons/si";

const technologies = [
  { name: "HTML5", icon: <SiHtml5 className="text-4xl" /> },
  { name: "CSS3", icon: <SiCss3 className="text-4xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-4xl" /> },
  { name: "React", icon: <SiReact className="text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl" /> },
  { name: "Figma", icon: <SiFigma className="text-4xl" /> },
  { name: "Photoshop", icon: <SiAdobephotoshop className="text-4xl" /> },
  { name: "Illustrator", icon: <SiAdobeillustrator className="text-4xl" /> },
  { name: "Webflow", icon: <SiWebflow className="text-4xl" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-4xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-4xl" /> },
];

const Stacks = () => (
  <div className="w-full py-20 text-center font-[Orbitron]">
    <h1 className="text-5xl mb-12  w-full text-left">
      Technologies & Tools I Work With
    </h1>
    <div className="overflow-hidden w-full">
      <div className="flex flex-nowrap justify-center animate-marquee gap-10">
        {/* Duplicate the technologies array to create a seamless loop */}
        {technologies.concat(technologies).map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-4 whitespace-nowrap"
          >
            {tech.icon}
            <h2 className="text-2xl">{tech.name}</h2>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Stacks;
