"use client";
import { SimplifiedCVResponse } from "@/app/lib/utils/CvService";
import { useEffect, useState } from "react";

const CvPreview = () => {
  const [cv, setCv] = useState<SimplifiedCVResponse | null>(null);

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
  console.log(cv);
  return (
    <div className="flex flex-col gap-2">
      {/* header */}
      <div className="flex justify-between">
        <div className="text-nowrap text-xl font-semibold uppercase">
          {cv?.user.name} {cv?.user.lastname}
        </div>
        <div className="flex gap-2 text-nowrap">
          <p>
            {cv?.user.city}, {cv?.user.country}
          </p>
          |<p>{cv?.user.phone}</p>|<p>{cv?.user.email}</p>|<p>linkdin</p>
        </div>
      </div>
      {/** title-Description */}
      <div className="flex flex-col gap-2">
        <div className="font-semibold">{cv?.title}</div>
        <div>{cv?.description.description_content[0].content}</div>
      </div>
      <div></div>
    </div>
  );
};

export default CvPreview;
