import React from "react";
import biLogo from "@/assets/client_logos/bi.svg";
import adnocLogo from "@/assets/client_logos/adnoc.svg";
import threeSLogo from "@/assets/client_logos/3slogo.svg";
import reehynLogo from "@/assets/client_logos/Reehyn.svg";
import rentOwlLogo from "@/assets/client_logos/rentowl.svg";
import Image from "next/image";

const Clients = () => {
  const clientArr = [
    {
      clientName: "Boehringer Ingelheim",
      clientImage: biLogo,
    },
    {
      clientName: "ADNOC",
      clientImage: adnocLogo,
    },
    {
      clientName: "3S Lighting Solutions",
      clientImage: threeSLogo,
    },
    {
      clientName: "RentOwl",
      clientImage: rentOwlLogo,
    },
    {
      clientName: "Reehyn Perfumes",
      clientImage: reehynLogo,
    },
  ];
  return (
    <div className=" w-full flex gap-5 items-center py-16">
      <h4 className=" w-[30%] text-md border-r">
        Worked with some of the best Companies
      </h4>

      <div className=" w-[80%] flex justify-between">
        {clientArr.map((client, index) => (
          <Image
            className="  w-[9vw] opacity-60  hover:opacity-100 transition-opacity"
            key={index}
            src={client.clientImage}
            alt={`logo ${client.clientName}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
