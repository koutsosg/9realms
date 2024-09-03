import { HTMLAttributes } from "react";

export type SpinnerSize = "small" | "medium" | "large";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  color?: string;
}
