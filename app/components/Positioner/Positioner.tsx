"use client";
import React, { useState, ReactNode } from "react";
import classNames from "classnames";

interface PositionerProps {
  corner?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-middle"
    | "bottom-middle"
    | "left-middle"
    | "right-middle";
  toggleable?: boolean;
  children: ReactNode; // All children, including the button if toggleable
  extraClasses?: string;
}

const Positioner: React.FC<PositionerProps> = ({
  corner = "top-right",
  toggleable = false,
  children,
  extraClasses = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const cornerClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "top-middle": "top-0 left-1/2 transform -translate-x-1/2",
    "bottom-middle": "bottom-0 left-1/2 transform -translate-x-1/2",
    "left-middle": "top-1/2 left-0 transform -translate-y-1/2",
    "right-middle": "top-1/2 right-0 transform -translate-y-1/2",
  };

  const positionClasses = classNames(
    "fixed", // Fixed positioning
    cornerClasses[corner], // Apply the corner position
    extraClasses, // Additional custom classes
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const renderChildren = () => {
    // If toggleable, assume the first child is the button and the rest is the content
    if (toggleable && React.Children.count(children) > 1) {
      const [button, ...content] = React.Children.toArray(children);
      return (
        <>
          {/* Apply position classes to the button as well */}
          <div
            className={classNames(cornerClasses[corner], "absolute")}
            onClick={handleToggle}
          >
            {button}
          </div>
          {isOpen && <div className="m-6">{content}</div>}
        </>
      );
    }

    return <div>{children}</div>;
  };

  return <div className={positionClasses}>{renderChildren()}</div>;
};

export default Positioner;
