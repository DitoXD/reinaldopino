import React from "react";

const SocialLink = ({
  href,
  icon: Icon,
  label,
  bgColor,
  variant = "desktop",
  ariaLabel,
}) => {
  if (variant === "mobile") {
    return (
      <li
        className={`h-[60px] flex group justify-between items-center hover:scale-125 hover:rotate-90 transition-transform duration-300 ${bgColor}`}
      >
        <a
          className="w-full flex justify-between items-center text-gray-300 group-hover:-rotate-90 transition-transform duration-300"
          href={href}
          aria-label={ariaLabel || label}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        >
          <Icon size={30} />
        </a>
      </li>
    );
  }

  return (
    <li
      className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all duration-300 ${bgColor}`}
    >
      <a
        className="w-full flex justify-between items-center text-gray-300"
        href={href}
        aria-label={ariaLabel || label}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      >
        {label} <Icon size={30} />
      </a>
    </li>
  );
};

export default SocialLink;
