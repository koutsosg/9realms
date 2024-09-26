import React, { createContext } from "react";

interface CVContextType {
  state: any;
  dispatch: React.Dispatch<any>;
}

// Create the context
export const CVContext = createContext<CVContextType | undefined>(undefined);
