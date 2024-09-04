import { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "danger";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style of the button.
   * "primary": "bg-blue-500 text-white hover:bg-blue-600",
   * "secondary": "bg-gray-500 text-white hover:bg-gray-600",
   * "danger": "bg-red-500 text-white hover:bg-red-600",
   */
  variant?: ButtonVariant;
  /** The size of the button.
   * "small": "py-1 px-3 text-sm",
   * "medium": "py-2 px-4 text-base",
   * "large": "py-3 px-6 text-lg",
   */
  size?: ButtonSize;
  /** Whether the button shows a loading state. */
  isLoading?: boolean;
  /** Text to display when the button is loading. */
  loadingText?: string;
  /** Additional classes for custom styling. */
  extraClasses?: string;
  /** Whether to show a spinner when loading. */
  spinner?: boolean;
  /** Color of the spinner. */
  spinnerColor?: string;
  /** Additional classes for the spinner. */
  spinnerClasses?: string;
}
