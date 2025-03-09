import React from "react";
import Image from "next/image";
import biLogo from "@/assets/client_logos/bi.svg";
import adnocLogo from "@/assets/client_logos/adnoc.svg";
import threeSLogo from "@/assets/client_logos/3slogo.svg";
import reehynLogo from "@/assets/client_logos/Reehyn.svg";
import rentOwlLogo from "@/assets/client_logos/rentowl.svg";
import mpLogo from "@/assets/client_logos/MP.svg";
import saudiCultureLogo from "@/assets/client_logos/Saudi_culture_ministry_logo_dark.svg";
import katLogo from "@/assets/client_logos/KAT_LOGO_.svg";

const Clients = () => {
  const clientArr = [
    { clientName: "Boehringer Ingelheim", clientImage: biLogo },
    { clientName: "ADNOC", clientImage: adnocLogo },
    { clientName: "3S Lighting Solutions", clientImage: threeSLogo },
    { clientName: "RentOwl", clientImage: rentOwlLogo },
    { clientName: "Reehyn Perfumes", clientImage: reehynLogo },
    { clientName: "Kat Group", clientImage: katLogo },
    { clientName: "Saudi Culture Ministry", clientImage: saudiCultureLogo },
    { clientName: "Motion Pixels", clientImage: mpLogo },
  ];

  return (
    <div className="w-full flex flex-col items-center  py-20 ">
      {/* Heading */}
      <h4 className="text-2xl  text-center mb-12">
        Trusted by Industry Leaders
      </h4>

      {/* Client Logos */}
      <div className="w-[90%] max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center items-end">
        {clientArr.map((client, index) => (
          <div key={index} className="group flex items-center justify-center">
            <Image
              className="w-[120px] md:w-[150px] py-5 max-md:py-1 opacity-60 group-hover:opacity-100 transition-all duration-300"
              src={client.clientImage}
              alt={client.clientName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
