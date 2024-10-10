import * as React from "react";
const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18.378 8.45-9.414 9.415a2 2 0 0 1-1.022.547L5 19l.588-2.942a2 2 0 0 1 .547-1.022l9.415-9.415m2.828 2.829 1.415-1.414a1 1 0 0 0 0-1.415l-1.415-1.414a1 1 0 0 0-1.414 0L15.55 5.621m2.828 2.829L15.55 5.62"
    />
  </svg>
);
export default EditIcon;
