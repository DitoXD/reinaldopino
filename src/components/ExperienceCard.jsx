import React from "react";

const ExperienceCard = ({
  company,
  position,
  duration,
  location,
  type,
  companyUrl,
  highlights,
}) => {
  const CompanyName = companyUrl ? (
    <a
      href={companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl font-bold text-white hover:text-[#1abbec] transition-colors duration-300"
    >
      {company}
    </a>
  ) : (
    <span className="text-xl font-bold text-white">{company}</span>
  );

  return (
    <div className="bg-[#112240] border-l-4 border-[#1abbec] shadow-md shadow-[#040c16] hover:shadow-lg hover:shadow-[#040c16] transition-all duration-300 p-6">
      <div className="flex justify-between items-start flex-wrap gap-2">
        <div>
          {CompanyName}
          <p className="text-[#1abbec] font-medium">{position}</p>
          <p className="text-gray-400 text-sm">
            {duration}
            {location && ` · ${location}`}
          </p>
        </div>
        {type && (
          <span className="text-xs px-2 py-1 rounded bg-[#1abbec]/20 text-[#1abbec] whitespace-nowrap">
            {type}
          </span>
        )}
      </div>
      {highlights && highlights.length > 0 && (
        <ul className="mt-4 space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-gray-300 text-sm flex">
              <span className="text-[#1abbec] mr-2">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceCard;
