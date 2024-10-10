import * as React from "react";
const AddIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    {...props}
  >
    <title />
    <g
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      data-name="add"
    >
      <path d="M12 19V5M5 12h14" />
    </g>
  </svg>
);
export default AddIcon;
