import React from "react";
import SkillCard from "./SkillCard";
import siteConfig from "../data/siteConfig.json";
import { skillIcons } from "../utils/imageRegistry";

const Skills = () => {
  const { skills } = siteConfig;

  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      <div className="max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#1abbec]">
            {skills.title}
          </p>
          <p className="py-4">{skills.description}</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.items.map((skill) => (
            <SkillCard
              key={skill.name}
              icon={skillIcons[skill.icon]}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
