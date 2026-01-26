import React from "react";

const Button = ({
  children,
  variant = "outline",
  className = "",
  href,
  onClick,
  type = "button",
  ...props
}) => {
  const baseStyles = "px-6 py-3 flex items-center font-bold transition-all duration-200";

  const variants = {
    outline: "text-white border-2 hover:bg-[#1abbec] hover:border-[#1abbec]",
    primary: "bg-white text-gray-700 rounded-lg hover:bg-gray-100",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
