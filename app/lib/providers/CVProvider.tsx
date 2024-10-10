"use client";
import React, { ReactNode, useReducer } from "react";
import { CVContext } from "@/app/lib/providers/CVContext";
import { SimplifiedCVResponse } from "@/app/lib/utils/CVService.types";
import { cvReducer } from "@/app/lib/reducers/CVReducer";

interface CVProviderProps {
  CVData: SimplifiedCVResponse;
  children: ReactNode;
}
const initialState = (CVData: SimplifiedCVResponse) => ({
  data: CVData,
  modal: {
    open: false,
  },
  loading: false,
  saving: false,
});
const CVProvider: React.FC<CVProviderProps> = ({ CVData, children }) => {
  const [state, dispatch] = useReducer(cvReducer, initialState(CVData));

  return (
    <CVContext.Provider value={{ state, dispatch }}>
      {children}
    </CVContext.Provider>
  );
};

export default CVProvider;
