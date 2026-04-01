import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Button from "./Button";
import siteConfig from "../data/siteConfig.json";
import { backgroundImages } from "../utils/imageRegistry";

const Home = () => {
  const { personal, home } = siteConfig;
  const bgImage = backgroundImages[home.backgroundImage];

  return (
    <div
      name="home"
      style={{ backgroundImage: `url(${bgImage})` }}
      className="w-full h-screen bg-cover bg-fixed bg-center"
    >
      {/* Container */}
      <div className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full">
        <p data-aos="fade-down" data-aos-duration="600" className="text-[#1abbec]">{home.greeting}</p>
        <h1 data-aos="fade-right" data-aos-duration="800" data-aos-delay="200" className="text-4xl sm:text-7xl font-bold text-white">
          {personal.name}
        </h1>
        <h1 data-aos="fade-right" data-aos-duration="800" data-aos-delay="400" className="text-4xl sm:text-7xl font-bold text-gray-300 underline">
          I'm a <span className="text-[#1abbec]">{personal.title}</span>.
        </h1>
        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" className="text-white my-4 py-3 max-w-[700px] bg-black bg-opacity-30">
          {home.tagline}
        </p>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
          <Link to="projects" smooth={true} duration={500}>
            <Button
              variant="outline"
              className="my-2 bg-black bg-opacity-70 hover:bg-opacity-100"
            >
              {home.ctaText}
              <span className="group-hover:rotate-90 group-hover:translate-x-[10px] group-hover:translate-y-[-5px] transition-transform duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
