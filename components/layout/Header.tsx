"use client";
import React, { useEffect, useState } from "react";
import Logo from "../shared/Logo";
import CTAButton from "../ui/buttons/CTAButton";
import NavBar from "./NavBar";
import { MenuOpenBtn } from "../ui/controls/MobileMenuControls";
import MobileMenu from "../features/mobile-menu/MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  return (
    <header
      className={`w-full bg-gradient-to-b fixed top-0 z-50 ${
        scrolled ? " from-text to-text/100 " : " from-text to-text/0"
      }`}
    >
      <div className="container mx-auto py-0.5 grid grid-cols-2 md:grid-cols-[1fr_10fr_1fr] items-center gap-x-4 px-2 sm:px-4 md:px-8">
        <Logo />
        <NavBar />
        <CTAButton element="header" className="!text-lg" />
        <MenuOpenBtn />
        <MobileMenu />
      </div>
    </header>
  );
}
