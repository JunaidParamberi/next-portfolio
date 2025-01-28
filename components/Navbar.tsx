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
      if (window.scrollY > lastScrollY && window.scrollY > 5) {
        // If scrolling down and not at the top, hide navbar
        setShowNavbar(false);
      } else {
        // If scrolling up or at the top, show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed top-0 flex justify-center items-center py-7 navbar transition-transform duration-300 z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-[80%] flex justify-between items-center">
        <Link href="/">
          <Image
            className="w-[10vw] h-auto"
            src={whiteLogo}
            alt="white logo"
            layout="intrinsic" // Stabilize size
            priority // Optimize loading for important assets
          />
        </Link>

        <div className="w-full flex justify-end">
          <div className="flex gap-8">
            <Link href="/home">Home.</Link>
            <Link href="/about">About.</Link>
            <Link href="#works">Works.</Link>
            <Link href="/blog">Blog.</Link>
            <Link href="/gallery">Gallery.</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
