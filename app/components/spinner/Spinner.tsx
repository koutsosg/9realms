import React from "react";
import { SpinnerProps } from "./Spinner.types";
import { sizeStyles } from "./Spinner.styles";

const Spinner: React.FC<SpinnerProps> = ({
  size = "medium",
  color = "white", // Default color
  className,
  ...props
}) => {
  // Define size classes based on the size prop
  const sizeClass = sizeStyles[size];

  // Combine custom color and size with default spinner styles
  const spinnerClass = `border-x-black/20 border-b-black/20 border-spinner rounded-full animate-spin ${sizeClass} ${className}`;

  return (
    <div
      style={{ borderTopColor: color }}
      className={spinnerClass}
      {...props}
    ></div>
  );
};

export default Spinner;
