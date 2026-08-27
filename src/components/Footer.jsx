import React from "react";
import { Link } from "react-scroll";
import siteConfig from "../data/siteConfig.json";

const Footer = () => {
  return (
    <footer className="bg-void border-t border-elevated">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Initials */}
          <span className="font-serif font-semibold text-lg text-cream tracking-[1px]">
            RP
          </span>

          {/* Copyright */}
          <span className="font-mono text-[9px] tracking-[2px] uppercase text-muted">
            &copy; {new Date().getFullYear()}
          </span>

          {/* Nav links */}
          <ul className="flex gap-6 md:gap-8">
            {siteConfig.navItems
              .filter((item) => item.id !== "home")
              .map((item) => (
                <li key={item.id} className="px-0">
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    className="font-mono text-[9px] tracking-[2px] uppercase text-muted hover:text-cream transition-colors duration-300 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
