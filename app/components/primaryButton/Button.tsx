import {
  buttonStyles,
  sizeStyles,
} from "@/app/components/primaryButton/Button.styles";
import { ButtonProps } from "@/app/components/primaryButton/Button.types";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  isLoading = false,
  loadingText = "Loading...",
  className = "",
  children,
  ...props
}) => {
  const variantClass = buttonStyles[variant];
  const sizeClass = sizeStyles[size];
  console.log("Button classes:", variantClass, sizeClass, className);
  return (
    <button
      className={`inline-flex items-center justify-center font-medium rounded-md transition duration-150 ease-in-out ${variantClass} ${sizeClass} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <span>{loadingText}</span> : children}
    </button>
  );
};
export default Button;
