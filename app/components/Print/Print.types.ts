import Button from "../Button/Button";

export interface PrintComponentProps extends React.HTMLProps<HTMLDivElement> {
  buttonLabel: string;
  buttonProps?: React.ComponentProps<typeof Button>; // Define button props
  children: React.ReactNode;
}
