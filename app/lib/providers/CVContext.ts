import React, { createContext, useContext } from "react";
import { SimplifiedCVResponse } from "@/app/lib/utils/CVService.types";

interface CVContextType {
  state: SimplifiedCVResponse;
  dispatch: React.Dispatch<any>;
}

export const CVContext = createContext<CVContextType | undefined>(undefined);

export const useCVContext = (): CVContextType => {
  const context = useContext(CVContext);
  if (context === undefined) {
    throw new Error("useCVContext must be used within a CVProvider");
  }
  return context;
};
