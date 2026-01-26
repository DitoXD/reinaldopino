import React, { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import SocialLink from "./SocialLink";
import siteConfig from "../data/siteConfig.json";
import { logo, resume } from "../utils/imageRegistry";
import { socialIcons } from "../utils/iconRegistry";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleScroll = useCallback(() => {
    const shouldBeScrolled = window.scrollY > 250;
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

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [handleScroll]);

  // Build social links from config
  const socialLinks = siteConfig.social.map((link) => {
    let href;
    if (link.type === "email") {
      href = `mailto:${siteConfig.personal.email}`;
    } else if (link.type === "resume") {
      href = resume;
    } else {
      href = link.url;
    }

    return {
      href,
      icon: socialIcons[link.type],
      label: link.label,
      bgColor: link.bgColor,
      ariaLabel: link.ariaLabel,
    };
  });

  const navbarClass = `fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 transition-colors duration-300 ${
    scrolled ? "bg-[#0a192f]" : "bg-transparent"
  }`;

  return (
    <div className={navbarClass}>
      <div>
        <img src={logo} alt="Logo" style={{ width: "75px" }} />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {siteConfig.navigation.map((item) => (
          <li key={item}>
            <Link to={item} smooth={true} duration={500}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <button
        onClick={handleClick}
        className="md:hidden z-30"
        aria-label={nav ? "Close menu" : "Open menu"}
        aria-expanded={nav}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </button>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 z-10 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {siteConfig.navigation.map((item) => (
          <li
            key={item}
            className="py-6 text-4xl hover:scale-125 transition-transform duration-300"
          >
            <Link onClick={handleClick} to={item} smooth={true} duration={500}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
        <div className="flex flex-row my-4">
          {socialLinks.map((link) => (
            <SocialLink key={link.label} {...link} variant="mobile" />
          ))}
        </div>
      </ul>

      {/* Social Icons - Desktop */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialLinks.map((link) => (
            <SocialLink key={link.label} {...link} variant="desktop" />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
