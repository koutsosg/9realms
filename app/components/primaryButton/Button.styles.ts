import {
  ButtonVariant,
  ButtonSize,
} from "@/app/components/primaryButton/Button.types";

export const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary_2/80 text-white hover:bg-primary_2 focus:outline-none focus:ring-2 focus:ring-blue-500",
  secondary:
    "bg-primary_1/80 text-black hover:bg-primary_1 focus:outline-none focus:ring-2 focus:ring-gray-500",
  danger:
    "bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500",
};

export const sizeStyles: Record<ButtonSize, string> = {
  small: "py-1 px-3 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-6 text-lg",
};
