import { fetchCvData } from "@/app/lib/api/api";
import { SimplifiedCVResponse } from "@/app/lib/utils/CVService.types";
import React from "react";

const Home = async () => {
  const cv: SimplifiedCVResponse = await fetchCvData(); // Fetch the CV data directly

  return (
    <CVProvider initialData={cv}>
      {/* Pass the fetched CV data as initial context */}
      <div className="flex flex-col px-10 py-[200px]">
        <CVEdit /> {/* Use CVEdit directly without passing cv prop */}
      </div>
    </CVProvider>
  );
};
export default Home;
