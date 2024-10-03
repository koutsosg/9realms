"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Button from "@/app/components/Button/Button";
import { PrintComponentProps } from "./Print.types";

const PrintComponent: React.FC<PrintComponentProps> = ({
  buttonLabel,
  buttonProps, // Accept buttonProps to pass to Button
  children,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    // You can add print options here if necessary
  });

  return (
    <div>
      {/* Button to trigger the print */}
      <Button onClick={handlePrint} {...buttonProps}>
        {buttonLabel}
      </Button>

      {/* The component to be printed */}
      <div ref={componentRef}>{children}</div>
    </div>
  );
};

export default PrintComponent;
