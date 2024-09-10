"use client";
import { SimplifiedCVResponse } from "@/app/lib/utils/CvService";
import { useEffect, useState } from "react";

const CvPreview = () => {
  const [cv, setCv] = useState<SimplifiedCVResponse | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCvData = async () => {
      try {
        const response = await fetch(`/api/fetchCv`);
        if (!response.ok) {
          throw new Error("Failed to fetch CV data");
        }
        const result = await response.json();
        setCv(result.cv as SimplifiedCVResponse);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCvData();
  }, []);

  return (
    <div>
      <>{cv?.title}</>
    </div>
  );
};

export default CvPreview;
