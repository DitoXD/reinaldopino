import React from "react";
import siteConfig from "../data/siteConfig.json";
import { skillIcons } from "../utils/imageRegistry";

const Skills = () => {
  const { skills } = siteConfig;

  return (
    <div name="skills" className="bg-void text-cream w-full py-24 section-border">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 border-b border-elevated"
        >
          <h2 className="font-serif font-light italic text-5xl text-cream tracking-tight">
            {skills.title}
          </h2>
          <p className="font-mono text-[10px] tracking-[2px] uppercase text-muted text-right max-w-[280px] leading-loose mt-4 md:mt-0">
            {skills.description}
          </p>
        </div>

        {/* Category rows */}
        {skills.categories.map((category, catIndex) => (
          <div
            key={category.label}
            data-aos="fade-up"
            data-aos-delay={catIndex * 100}
            className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-10 py-8 border-b border-[#141414] last:border-b-0"
          >
            <span className="font-mono text-[10px] tracking-[2px] uppercase text-cyan pt-1">
              {category.label}
            </span>
            <div className="flex flex-wrap gap-2.5">
              {category.items.map((skill) => (
                <span
                  key={skill.name}
                  className="skill-pill inline-flex items-center gap-2.5 px-5 py-2.5 bg-surface border border-[#1e1e1e] text-warm text-[13px] font-light"
                >
                  <img
                    src={skillIcons[skill.icon]}
                    alt=""
                    className="w-[18px] h-[18px] object-contain"
                  />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
