import React, { createContext, useContext } from "react";
import { SimplifiedCVResponse } from "../utils/CVService.types";

interface CVContextType {
  state: SimplifiedCVResponse; // Use your actual state type instead of 'any' for better type safety
  dispatch: React.Dispatch<any>; // Update this to your specific action type if you have one
}

// Create the context
export const CVContext = createContext<CVContextType | undefined>(undefined);

// Create a custom hook for using the CVContext
export const useCVContext = (): CVContextType => {
  const context = useContext(CVContext);
  if (context === undefined) {
    throw new Error("useCVContext must be used within a CVProvider");
  }
  return context;
};
