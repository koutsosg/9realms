"use client";
import { useEffect } from "react";

const CvPreview = () => {
  useEffect(() => {
    const fetchCvData = async () => {
      try {
        /* const cvId = "8ruortmj0vdvbjh"; */
        const response = await fetch(`/api/fetchCv`);

        if (!response.ok) {
          throw new Error("Failed to fetch CV data");
        }
        const cv = await response.json();
        console.log(cv);
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
