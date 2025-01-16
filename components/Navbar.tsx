"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import whiteLogo from "../assets/images/RENDER_BYTE_LOGO_WHITE.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Monitor the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide navbar
        setShowNavbar(false);
      } else {
        // If scrolling up, show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  console.log(lastScrollY);

  return (
    <div
      className={`w-full fixed top-0 flex justify-center items-center py-7 navbar transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-[80%] flex justify-between items-center">
        <Link href="/">
          <Image className="w-[50%]" src={whiteLogo} alt="white logo" />
        </Link>
        <div className=" flex gap-8">
          <Link href="/home">Home.</Link>
          <Link href="/home">About.</Link>
          <Link href="#home">Works.</Link>
          <Link href="/home">Blog.</Link>
          <Link href="/home">Gallery.</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
