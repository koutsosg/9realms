"use client";
import React, { ReactNode, useReducer } from "react";
import { CVContext } from "./CVContext"; // Import the context
import { SimplifiedCVResponse } from "../utils/CVService.types";
import { cvReducer } from "../reducers/CVReducer";

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
