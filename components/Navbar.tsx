"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import whiteLogo from "../assets/images/RENDER_BYTE_LOGO_WHITE.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY =
        document.documentElement.scrollTop || window.scrollY;

      if (currentScrollY === 0) {
        setShowNavbar(true); // Ensure navbar is always visible at the top
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <div
      className={`w-full fixed top-[0px] navbar flex justify-center items-center py-5 transition-transform duration-300 z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-[90%] md:w-[80%] flex justify-between items-center">
        <Link href="/">
          <Image
            className="w-[20vw] max-w-[150px] md:w-[15vw] md:max-w-[120px] lg:max-w-[140px]"
            src={whiteLogo}
            alt="white logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/home">Home.</Link>
          <Link href="/about">About.</Link>
          <Link href="#works">Works.</Link>
          <Link href="/blog">Blog.</Link>
          <Link href="/gallery">Gallery.</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center gap-6 text-white transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="/home" onClick={() => setMenuOpen(false)}>
          Home.
        </Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>
          About.
        </Link>
        <Link href="#works" onClick={() => setMenuOpen(false)}>
          Works.
        </Link>
        <Link href="/blog" onClick={() => setMenuOpen(false)}>
          Blog.
        </Link>
        <Link href="/gallery" onClick={() => setMenuOpen(false)}>
          Gallery.
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
