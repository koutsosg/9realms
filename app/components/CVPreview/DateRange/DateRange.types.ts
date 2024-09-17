interface DateRangeBaseProps {
  format?: string;
  showPresent?: boolean;
  className?: string;
}

export type DateRangeProps =
  | ({ start: string; end?: string | null } & DateRangeBaseProps) // Start required, end optional
  | ({ start?: string | null; end: string } & DateRangeBaseProps); // End  required, start  optional
