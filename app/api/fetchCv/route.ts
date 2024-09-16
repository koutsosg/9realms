import { fetchCvData } from "@/app/lib/api/api";
import { NextResponse } from "next/server";
import { simplifyCVResponse } from "@/app/lib/utils/CvService";

export async function GET() {
  const rawCvData = await fetchCvData();
  console.log(rawCvData.expand.user_id.expand.urls);
  const simplifiedCv = simplifyCVResponse(rawCvData);

  return NextResponse.json({ cv: simplifiedCv }, { status: 200 });
}
