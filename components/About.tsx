import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full flex flex-col items-center">
      <div className=" w-[80%] flex py-20">
        <div className=" w-[30%]">
          <h1 className=" text-5xl">About</h1>
        </div>
        <div className="w-full">
          <p className="opacity-80">
            <strong className=" text-2xl ">I&apos;m Junaid Paramberi,</strong> a
            dedicated and passionate Web Developer and Graphic Designer with a
            rich background in visual arts and technology. My journey began as a
            graphic designer and video editor, where I cultivated my creative
            skills and developed a keen eye for detail. This foundation in
            visual storytelling laid the groundwork for my future endeavors.{" "}
            <br /> <br /> However, my lifelong passion for technology always
            urged me to explore new horizons beyond traditional design. In 2022,
            I took a bold step into the world of web development, immersing
            myself in the latest technologies and methodologies. Through
            self-directed learning and practical application, I became a highly
            capable developer, earning certifications from the esteemed Harvard
            University’s CS50 and Meta. These experiences provided me with a
            robust understanding of computer science principles, web
            technologies, and industry best practices. <br /> <br /> Today, I
            leverage my artistic background and technical expertise to create
            innovative digital solutions that captivate and engage users. I
            specialize in designing stunning graphics and developing responsive,
            user-friendly websites that not only look exceptional but also
            provide seamless user experiences. My goal is to merge creativity
            with functionality, ensuring that each project I undertake delivers
            value and leaves a lasting impression. Whether I’m crafting a brand
            identity, developing a dynamic web application, or enhancing user
            interfaces, I am committed to pushing the boundaries of design and
            technology to create meaningful and impactful digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
