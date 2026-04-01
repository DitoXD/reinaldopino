import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Button from "./Button";
import siteConfig from "../data/siteConfig.json";
import { backgroundImages, resume } from "../utils/imageRegistry";

const About = () => {
  const { personal, about } = siteConfig;
  const bgImage = backgroundImages[about.backgroundImage];

  return (
    <div
      name="about"
      style={{ backgroundImage: `url(${bgImage})` }}
      className="w-full h-screen bg-cover bg-fixed bg-center text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-80">
        <div className="max-w-[1080px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4" data-aos="fade-up">
            <p className="text-4xl font-bold inline border-b-4 border-[#1abbec]">
              {about.title}
            </p>
          </div>
        </div>
        <div className="max-w-[1080px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right font-bold" data-aos="fade-right" data-aos-delay="200">
            <p className="text-4xl">
              {about.subtitle} <span className="text-[#1abbec]">{personal.name}</span>?
            </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="400">
            <p>{about.bio}</p>
          </div>
        </div>
        <div className="z-0 mt-8 md:mt-16" data-aos="fade-up" data-aos-delay="600">
          <Button href={resume} variant="outline" className="my-2">
            {about.ctaText}
            <BsFillPersonLinesFill className="ml-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
