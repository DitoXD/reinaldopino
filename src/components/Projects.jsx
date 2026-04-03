import React from "react";
import ProjectCard from "./ProjectCard";
import siteConfig from "../data/siteConfig.json";
import { projectImages } from "../utils/imageRegistry";

const Projects = () => {
  const { projects } = siteConfig;

  return (
    <div
      name="projects"
      className="bg-[#0a192f] text-gray-300 w-full md:h-screen pb-48 sm:pb-10"
    >
      <div className="max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8" data-aos="fade-up">
          <p className="text-4xl font-bold inline border-b-4 border-[#1abbec]">
            {projects.title}
          </p>
          <p className="py-4">{projects.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.items.map((project, index) => (
            <div key={project.title} data-aos="zoom-in" data-aos-delay={index * 150}>
            <ProjectCard
              image={projectImages[project.image]}
              title={project.title}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
