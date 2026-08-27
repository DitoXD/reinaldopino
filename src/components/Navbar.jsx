import React, { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import siteConfig from "../data/siteConfig.json";
import { resume } from "../utils/imageRegistry";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleScroll = useCallback(() => {
    const shouldBeScrolled = window.scrollY > 80;
    if (shouldBeScrolled !== scrolled) {
      setScrolled(shouldBeScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  return (
    <div
      className={`fixed w-full h-[72px] flex justify-between items-center px-8 md:px-16 transition-all duration-700 z-50 ${
        scrolled
          ? "bg-void/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* Wordmark */}
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="font-serif font-semibold text-lg tracking-[2px] text-cream cursor-pointer"
      >
        REINALDO PINO
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-2">
        {siteConfig.navItems.map((item) => (
          <li key={item.id} className="px-0">
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              spy={true}
              className="font-mono text-[10px] tracking-[2px] uppercase text-muted hover:text-cream transition-colors duration-300 px-5 py-2 cursor-pointer"
              activeClass="!text-cyan"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li className="px-0 ml-3">
          <a
            href={resume}
            className="font-mono text-[10px] tracking-[2px] uppercase text-cyan border border-cyan/40 px-5 py-2 hover:bg-cyan/10 transition-all duration-300"
          >
            Download CV
          </a>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <button
        onClick={handleClick}
        className="md:hidden z-30 text-cream text-lg"
        aria-label={nav ? "Close menu" : "Open menu"}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </button>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 z-10 w-full h-screen bg-void flex flex-col justify-center items-center"
        }
      >
        {siteConfig.navItems.map((item) => (
          <li key={item.id} className="py-5 px-0">
            <Link
              onClick={handleClick}
              to={item.id}
              smooth={true}
              duration={500}
              className="font-serif text-3xl font-semibold text-cream hover:text-cyan transition-colors duration-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li className="mt-6 px-0">
          <a
            href={resume}
            className="font-mono text-sm text-cyan border border-cyan/40 px-6 py-3 hover:bg-cyan/10 transition-all duration-300"
          >
            Download CV
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
