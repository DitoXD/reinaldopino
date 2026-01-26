import React from "react";
import Button from "./Button";

const ProjectCard = ({ image, title, demoUrl, codeUrl }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-80 transition-opacity duration-300">
        <span className="text-2xl font-bold text-white tracking-wider">
          {title}
        </span>
        <div className="pt-8 text-center">
          {demoUrl && (
            <Button href={demoUrl} variant="primary" className="m-2 inline-flex">
              Demo
            </Button>
          )}
          {codeUrl && (
            <Button href={codeUrl} variant="primary" className="m-2 inline-flex">
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
