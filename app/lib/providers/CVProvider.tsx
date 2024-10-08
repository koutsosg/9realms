"use client";
import React, { ReactNode, useReducer } from "react";
import { CVContext } from "@/app/lib/providers/CVContext"; 
import { SimplifiedCVResponse } from "@/app/lib/utils/CVService.types";
import { cvReducer } from "@/app/lib/reducers/CVReducer";

interface CVProviderProps {
  initialData: SimplifiedCVResponse;
  children: ReactNode;
}

const CVProvider: React.FC<CVProviderProps> = ({ initialData, children }) => {
  const [state, dispatch] = useReducer(cvReducer, initialData); // Use the cvReducer with initial data

  return (
    <CVContext.Provider value={{ state, dispatch }}>
      {children}
    </CVContext.Provider>
  );
};

export default CVProvider;
