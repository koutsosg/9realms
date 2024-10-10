import CVEdit from "@/app/components/CVEdit/CVEdit";
import { fetchCvData } from "@/app/lib/api/api";
import CVProvider from "@/app/lib/providers/CVProvider";
import { SimplifiedCVResponse } from "@/app/lib/utils/CVService.types";
import React from "react";

const Home = async () => {
  const cv: SimplifiedCVResponse = await fetchCvData(); // Fetch the CV data directly

  return (
    <CVProvider CVData={cv}>
      {/* Pass the fetched CV data as initial context */}
      <div className="flex flex-col px-10 py-[200px]">
        <CVEdit />
      </div>
    </CVProvider>
  );
};
export default Home;
