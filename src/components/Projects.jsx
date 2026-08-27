import React from "react";
import siteConfig from "../data/siteConfig.json";
import { projectImages } from "../utils/imageRegistry";

const Projects = () => {
  const { projects } = siteConfig;
  const count = String(projects.items.length).padStart(2, "0");

  return (
    <div name="projects" className="bg-void w-full py-24 section-border">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div
          data-aos="fade-up"
          className="flex justify-between items-end mb-16"
        >
          <h2 className="font-serif font-light italic text-5xl text-cream tracking-tight">
            {projects.title}
          </h2>
          <span className="font-mono text-[10px] tracking-[2px] uppercase text-muted">
            {count} Projects
          </span>
        </div>
      </div>

      {/* Gallery items - full width */}
      {projects.items.map((project, index) => {
        const num = String(index + 1).padStart(2, "0");
        const isEven = index % 2 === 1;

        return (
          <a
            key={project.title}
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="gallery-item block border-t border-elevated hover:bg-surface/50 transition-colors duration-500"
          >
            <div
              className={`grid md:grid-cols-2 min-h-[400px] ${
                isEven ? "" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`gallery-img-wrap bg-surface flex items-center justify-center ${
                  isEven ? "md:order-2" : ""
                }`}
              >
                <img
                  src={projectImages[project.image]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
              </div>

              {/* Info */}
              <div
                className={`flex flex-col justify-center px-8 md:px-16 py-12 ${
                  isEven ? "md:order-1" : ""
                }`}
              >
                <span className="font-mono text-[10px] tracking-[3px] text-cyan mb-5">
                  {num} / {count}
                </span>
                <h3 className="font-serif font-semibold text-3xl text-cream tracking-tight mb-3">
                  {project.title}
                </h3>
                <span className="gallery-link font-mono text-[10px] tracking-[2px] uppercase text-cyan mt-6 inline-flex items-center">
                  View Project
                </span>
              </div>
            </div>
          </a>
        );
      })}

      {/* Unlisted-projects note */}
      {projects.note && (
        <div
          data-aos="fade-up"
          className="border-t border-elevated"
        >
          <p className="max-w-[1200px] mx-auto px-8 md:px-16 py-10 font-mono text-[10px] tracking-[2px] uppercase text-muted">
            {projects.note}
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;
