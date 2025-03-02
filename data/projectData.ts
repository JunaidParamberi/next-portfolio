import { nanoid } from "nanoid";
import biCoverImg from "@/assets/works/bi/cover-image-bi.png";
import biImg1 from "@/assets/works/bi/bi01.png";
import biImg2 from "@/assets/works/bi/bi02.png";
import biImg3 from "@/assets/works/bi/bi03.png";
import biImg4 from "@/assets/works/bi/bi04.png";
import biImg5 from "@/assets/works/bi/bi05.png";
import biImg6 from "@/assets/works/bi/bi06.png";
import cardImg2 from "@/assets/images/img2.jpg";

export const works = [
    {
      id: nanoid(10),
      slug: "boehringeringelheim-" + nanoid(6),
      clientName : 'Boehringer Ingelheim',
      projectName: "Boehringer Ingelheim Interactive Platform",
      imageUrl: biCoverImg,
      Images : [biImg1, biImg2, biImg3, biImg4, biImg5, biImg6],
      shortDes: "Futuristic Touch Screen Interactive Presentation for Web and PC",
      types: ["Web Design", "UI/UX Design", "Web Development", "Interactive Presentation", "PC Software", "Cross-Platform Development"],
      des: `I designed and developed an interactive platform for Boehringer Ingelheim, focusing on their initiatives in the IMETA region (India, Middle East, Turkey, and Africa). The platform, built using React-Electron, provides a seamless user experience across web and desktop environments. Key features include intuitive navigation, detailed content presentation, and interactive elements such as "Read More" buttons to engage users. The platform highlights healthcare programs, volunteer activities, and team profiles, with a clean and professional design that emphasizes readability and user engagement. The project showcases my expertise in React, Electron, and UI/UX design, delivering a dynamic and responsive interface for both web and PC platforms.`
    },
    {
      id: nanoid(10),
      slug: "window-line-uae-" + nanoid(6),
      projectName: "Window Line UAE",
      imageUrl: cardImg2,
      shortDes: "AI driven design tool for the modern web.",
      types: ["Web Design", "Ui/Ux Design", "Web Development"],
      des: `I was responsible for designing and developing the comprehensive website for Window Line UAE...`
    }
];
