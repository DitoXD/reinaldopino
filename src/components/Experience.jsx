import React from "react";
import ExperienceCard from "./ExperienceCard";
import siteConfig from "../data/siteConfig.json";

const Experience = () => {
  const { experience } = siteConfig;

  if (!experience || !experience.items || experience.items.length === 0) {
    return null;
  }

  return (
    <div name="experience" className="bg-[#0a192f] text-gray-300 w-full py-16">
      <div className="max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#1abbec]">
            {experience.title}
          </p>
          <p className="py-4">{experience.description}</p>
        </div>
        <div className="grid gap-6 py-8">
          {experience.items.map((item, index) => (
            <ExperienceCard
              key={`${item.company}-${index}`}
              company={item.company}
              position={item.position}
              duration={item.duration}
              location={item.location}
              type={item.type}
              companyUrl={item.companyUrl}
              highlights={item.highlights}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
