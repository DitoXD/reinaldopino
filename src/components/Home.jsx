import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import siteConfig from "../data/siteConfig.json";

const Home = () => {
  const { personal, home } = siteConfig;
  const firstName = personal.name.split(" ")[0];
  const lastName = personal.name.split(" ")[1];

  return (
    <div
      name="home"
      className="w-full min-h-screen bg-void relative flex flex-col justify-end overflow-hidden"
    >
      {/* Subtle radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 20%, rgba(26,187,236,0.04) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(13,143,181,0.03) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-8 md:px-16 pb-24 md:pb-32 pt-32 relative z-10">
        {/* Pre-heading */}
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          className="font-mono text-[11px] tracking-[4px] uppercase text-cyan mb-6 flex items-center gap-4"
        >
          <span className="w-10 h-px bg-cyan inline-block" />
          {home.preHeading}
        </p>

        {/* Name */}
        <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <span className="font-serif font-light text-[clamp(60px,12vw,140px)] leading-[0.88] tracking-[-3px] text-cream block">
            {firstName}
          </span>
          <span className="font-serif font-light text-[clamp(60px,12vw,140px)] leading-[0.88] tracking-[-3px] text-cream block ml-12 md:ml-20">
            {lastName}
          </span>
        </h1>

        {/* Tagline */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-muted text-base font-light leading-relaxed mt-8 max-w-[440px]"
        >
          {home.tagline}
        </p>

        {/* CTAs */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-wrap gap-5 mt-10"
        >
          <Link to="projects" smooth={true} duration={500}>
            <button className="btn-accent">{home.ctaPrimary}</button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn-outline-subtle">{home.ctaSecondary}</button>
          </Link>
        </div>

        {/* Social row */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex gap-3 mt-10"
        >
          {siteConfig.social
            .filter((s) => ["linkedin", "github", "email"].includes(s.type))
            .map((link) => {
              const href =
                link.type === "email"
                  ? `mailto:${personal.email}`
                  : link.url;
              const Icon =
                link.type === "linkedin"
                  ? FaLinkedin
                  : link.type === "github"
                  ? FaGithub
                  : HiOutlineMail;
              return (
                <a
                  key={link.type}
                  href={href}
                  target={link.type === "email" ? undefined : "_blank"}
                  rel={link.type === "email" ? undefined : "noopener noreferrer"}
                  className="w-10 h-10 border border-elevated flex items-center justify-center text-muted hover:border-cyan hover:text-cyan transition-all duration-300"
                  aria-label={link.ariaLabel}
                >
                  <Icon size={16} />
                </a>
              );
            })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-10 right-16 z-10">
        <div
          className="font-mono text-[9px] tracking-[3px] uppercase text-muted"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
          <span
            className="block w-px h-10 bg-gradient-to-b from-muted to-transparent mt-3 mx-auto"
            style={{ animation: "scrollPulse 2s infinite" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
