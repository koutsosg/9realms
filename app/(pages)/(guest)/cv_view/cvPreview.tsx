"use client";
import { CVResponse, simplifyCVResponse } from "@/app/lib/utils/CvService";
import { useEffect } from "react";

const CvPreview = () => {
  useEffect(() => {
    const fetchCvData = async () => {
      try {
        const response = await fetch(`/api/fetchCv`);

        if (!response.ok) {
          throw new Error("Failed to fetch CV data");
        }
        const result = await response.json();
        const cv: CVResponse = await result.cv;
        const simplifiedCV = simplifyCVResponse(cv);
        console.log(simplifiedCV);
      } catch (err) {}
    };

    fetchCvData();
  }, []);

  const handleLogin = async () => {
    // Your login logic
  };

  return <div></div>;
};

export default CvPreview;
