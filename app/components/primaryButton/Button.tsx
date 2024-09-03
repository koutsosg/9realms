"use client";
import {
  buttonStyles,
  sizeStyles,
} from "@/app/components/primaryButton/Button.styles";
import { ButtonProps } from "@/app/components/primaryButton/Button.types";
import Spinner from "../spinner/Spinner";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  isLoading = false,
  loadingText = "Loading...",
  spinnerClasses = "",
  className,
  children,
  ...props
}) => {
  const variantClass = buttonStyles[variant];
  const sizeClass = sizeStyles[size];

  return (
    <button
      className={`inline-flex items-center justify-center font-medium rounded-md transition duration-150 ease-in-out ${variantClass} ${sizeClass} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {!isLoading ? (
        <div className="relative flex items-center justify-center">
          <Spinner size="medium" color="#FFF" />
          <span className="sr-only">{loadingText}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};
export default Button;
