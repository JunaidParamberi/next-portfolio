import React from "react";
import { Box } from "lucide-react";

import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import whiteLogo from "../assets/images/RENDER_BYTE_LOGO_WHITE.svg";

const Footer = () => {
  return (
    <div className="w-full  text-white flex flex-col items-center py-10 border-t border-gray-700">
      <div className="w-[80%] flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            className="w-[15vw] max-w-[150px] md:w-[15vw] md:max-w-[120px] lg:max-w-[140px]"
            src={whiteLogo}
            alt="white logo"
          />
        </Link>

        {/* Social Icons */}
        <div className="flex space-x-5 mt-5 md:mt-0">
          <Link href="https://github.com/JunaidParamberi" target="_blank">
            <FaGithub className="w-6 h-6 text-gray-400 hover:text-white transition" />
          </Link>
          <Link href="https://x.com/ParamberiJunaid" target="_blank">
            <FaTwitter className="w-6 h-6 text-gray-400 hover:text-white transition" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/junaid-paramberi-69b8512a2/"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-white transition" />
          </Link>
          <Link
            href="https://www.instagram.com/junaid_paramberi/?hl=enm"
            target="_blank"
          >
            <FaInstagram className="w-6 h-6 text-gray-400 hover:text-white transition" />
          </Link>

          <Link href="https://codepen.io" target="_blank">
            <Box className="w-6 h-6 text-gray-400 hover:text-white transition" />
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-[80%] text-center mt-8 text-gray-500 text-sm">
        <hr className="border-gray-700 mb-4" />
        <p>
          © 2025 Render Byte. All rights reserved.{" "}
          {/* <Link href="/licensing" className="text-blue-500 hover:underline">
            Licensing
          </Link> */}
        </p>
      </div>
    </div>
  );
};

export default Footer;
