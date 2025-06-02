import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "white";
};

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  className = "",
  variant = "primary",
}) => {
  // Define base styles based on variant
  let baseStyle = "";

  switch (variant) {
    case "primary":
      baseStyle = "bg-main hover:bg-main/90 text-white";
      break;
    case "secondary":
      baseStyle = "bg-secondary hover:bg-secondary/90 text-white";
      break;
    case "outline":
      baseStyle =
        "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white";
      break;
    case "white":
      baseStyle = "bg-white text-primary hover:bg-gray-100";
      break;
    default:
      baseStyle = "bg-main hover:bg-main/90 text-white";
  }

  const buttonStyle = `${baseStyle} subtitle-primary font-bold py-3 px-6 rounded-lg transition-colors ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
