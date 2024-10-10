import * as React from "react";

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 10H3m18 4H3m9-10v6m0 4v6m3-2-3 3-3-3m6-12-3-3-3 3"
    />
  </svg>
);

export default SvgComponent;
