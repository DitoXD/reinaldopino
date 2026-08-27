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
  const baseStyles = "px-6 py-3 flex items-center font-semibold font-body transition-all duration-300 rounded-lg";

  const variants = {
    outline: "text-white border border-navy-border hover:border-cyan hover:text-cyan",
    primary: "btn-gradient text-navy font-bold",
    ghost: "text-slate-light border border-navy-border hover:border-cyan/50 hover:text-cyan",
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
