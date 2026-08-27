import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import siteConfig from "../data/siteConfig.json";

const Contact = () => {
  const { personal, contact } = siteConfig;

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: siteConfig.social.find((s) => s.type === "linkedin")?.url,
      label: "Li",
      ariaLabel: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: siteConfig.social.find((s) => s.type === "github")?.url,
      label: "Gh",
      ariaLabel: "GitHub",
    },
    {
      icon: HiOutlineMail,
      href: `mailto:${personal.email}`,
      label: "Em",
      ariaLabel: "Email",
    },
  ];

  return (
    <div name="contact" className="bg-void text-cream w-full py-24 section-border">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Left - Info */}
          <div data-aos="fade-right">
            <h2 className="font-serif font-light italic text-[clamp(36px,5vw,56px)] text-cream leading-[1.1] tracking-tight mb-6">
              Let's build
              <br />
              something{" "}
              <span className="font-semibold not-italic">together</span>
            </h2>
            <p className="text-sm text-muted font-light leading-relaxed max-w-[360px] mb-8">
              {contact.description}
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="font-mono text-[11px] tracking-[1px] text-warm hover:text-cyan transition-colors duration-300 block mb-6"
            >
              {personal.email}
            </a>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.ariaLabel}
                  href={link.href}
                  target={link.ariaLabel === "Email" ? undefined : "_blank"}
                  rel={
                    link.ariaLabel === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="w-10 h-10 border border-elevated flex items-center justify-center text-muted hover:border-cyan hover:text-cyan transition-all duration-300"
                  aria-label={link.ariaLabel}
                >
                  <link.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <form
            method="POST"
            action={contact.formEndpoint}
            data-aos="fade-left"
            className="flex flex-col"
          >
            <div className="form-field">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Type here..."
                required
                aria-label="Your name"
              />
            </div>
            <div className="form-field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Type here..."
                required
                aria-label="Your email"
              />
            </div>
            <div className="form-field">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Type here..."
                rows="4"
                required
                aria-label="Your message"
                className="resize-none"
              />
            </div>
            <div className="mt-8">
              <button type="submit" className="btn-accent">
                {contact.submitText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
