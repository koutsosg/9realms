"use client";
import React, { useState, ReactNode } from "react";
import classNames from "classnames";
import Button from "@/app/components/Button/Button"; // Import your Button component

interface PositionerProps {
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-middle"
    | "bottom-middle"
    | "left-middle"
    | "right-middle";
  toggleable?: boolean; // Whether to use the button to toggle content visibility
  buttonProps?: React.ComponentProps<typeof Button>; // Props to pass to the internal Button component
  children: ReactNode; // The content to be shown/hidden
  extraClasses?: string; // Additional classes for styling
  buttonLabel?: string; //Button Label if Button
}

const Positioner: React.FC<PositionerProps> = ({
  position = "top-right",
  toggleable = false,
  buttonProps,
  children,
  extraClasses = "",
  buttonLabel = "toggle" /* Default label if none provided */,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const positionsClasses = {
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
    positionsClasses[position], // Apply the positions position
    extraClasses, // Additional custom classes
  );
  const buttonClasses = classNames(
    positionsClasses[position],
    "absolute",
    buttonProps && buttonProps.extraClasses,
  );
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const renderChildren = () => {
    // If toggleable, render the button and content accordingly
    if (toggleable) {
      return (
        <>
          <Button
            {...buttonProps}
            extraClasses={buttonClasses}
            onClick={handleToggle}
          >
            {buttonLabel}
          </Button>
          {isOpen && <div className="m-6">{children}</div>}
        </>
      );
    }

    return <div>{children}</div>; // Return children directly if not toggleable
  };

  return <div className={positionClasses}>{renderChildren()}</div>;
};

export default Positioner;
