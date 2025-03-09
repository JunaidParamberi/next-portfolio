import React from "react";
import WorkCard from "@/components/WorkCard";
import { works as workDatas } from "@/data/projectData";

const page = () => {
  return (
    <div className=" flex justify-center py-20 md:pt-28">
      {/* <CaptchaVerification /> */}
      <div className=" w-full flex flex-col items-center">
        <div className="w-[80%] pb-20 flex flex-col items-center">
          <h2 className="text-center text-4xl py-5">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full py-8">
            {workDatas.map((workData, index) => (
              <WorkCard key={index} data={workData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
