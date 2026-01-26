import React from "react";

const SkillCard = ({ icon, name, alt }) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 transition-transform duration-300">
      <img src={icon} alt={alt || `${name} Icon`} className="w-20 mx-auto" />
      <p className="my-4">{name}</p>
    </div>
  );
};

export default SkillCard;
