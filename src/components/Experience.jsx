import React from "react";
import { HiOutlineCpuChip } from "react-icons/hi2";
import siteConfig from "../data/siteConfig.json";
import { resume, resumeAts } from "../utils/imageRegistry";

const Experience = () => {
  const { experience } = siteConfig;

  if (!experience || !experience.items || experience.items.length === 0) {
    return null;
  }

  // Get short year from duration string (e.g. "Jul 2025 - Jan 2026" -> "25")
  const getYear = (duration) => {
    const match = duration.match(/(\d{4})/);
    return match ? match[1].slice(-2) : "";
  };

  // Get a one-line summary from highlights
  const getExcerpt = (highlights) => {
    if (!highlights || highlights.length === 0) return "";
    const first = highlights[0];
    // Truncate to ~120 chars
    return first.length > 120 ? first.slice(0, 117) + "..." : first;
  };

  return (
    <div name="experience" className="bg-void text-cream w-full py-24 section-border">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div data-aos="fade-up" className="mb-16">
          <h2 className="font-serif font-light italic text-5xl text-cream tracking-tight">
            {experience.title}
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2">
          {experience.items.map((item, index) => (
            <div
              key={`${item.company}-${index}`}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="exp-card relative p-8 md:p-10 border border-elevated cursor-default"
            >
              {/* Year watermark */}
              <span className="exp-year absolute top-4 right-5 font-serif text-[56px] font-light text-[#1a1a1a] leading-none select-none transition-colors duration-500">
                {getYear(item.duration)}
              </span>

              {/* Role */}
              <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-cyan block mb-1">
                {item.position}
              </span>

              {/* Company */}
              <h3 className="font-serif font-semibold text-xl text-cream mb-1">
                {item.company}
              </h3>

              {/* Location */}
              <p className="text-xs text-muted font-light">
                {item.location}
                {item.type && ` · ${item.type}`}
              </p>

              {/* Duration */}
              <div className="font-mono text-[10px] tracking-[1px] text-muted mt-2 flex items-center gap-2">
                <span className="w-3 h-px bg-cyan inline-block" />
                {item.duration}
              </div>

              {/* Excerpt */}
              <p className="text-[13px] text-muted font-light leading-relaxed mt-4 max-w-[320px]">
                {getExcerpt(item.highlights)}
              </p>
            </div>
          ))}
        </div>

        {/* Download CV */}
        <div data-aos="fade-up" className="mt-12 flex flex-col items-center gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a href={resume} download className="btn-outline-subtle inline-block">
              Download Full CV
            </a>
            <a
              href={resumeAts}
              download
              title="Plain, single-column format optimized for applicant-tracking systems (ATS) and automated resume parsers."
              className="btn-outline-subtle inline-flex items-center gap-2"
            >
              <HiOutlineCpuChip className="text-cyan" />
              AI-Parseable Version
            </a>
          </div>
          <p className="font-mono text-[10px] tracking-[1px] uppercase text-muted text-center max-w-sm">
            AI-parseable version is optimized for applicant-tracking systems (ATS) &amp; resume parsers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
