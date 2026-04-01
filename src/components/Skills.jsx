import React from "react";
import SkillCard from "./SkillCard";
import siteConfig from "../data/siteConfig.json";
import { skillIcons } from "../utils/imageRegistry";

const Skills = () => {
  const { skills } = siteConfig;

  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full min-h-screen py-16">
      <div className="max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full">
        <div data-aos="fade-up">
          <p className="text-4xl font-bold inline border-b-4 border-[#1abbec]">
            {skills.title}
          </p>
          <p className="py-4">{skills.description}</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center py-8">
          {skills.items.map((skill, index) => (
            <div key={skill.name} data-aos="fade-up" data-aos-delay={index * 50}>
              <SkillCard
                icon={skillIcons[skill.icon]}
                name={skill.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
