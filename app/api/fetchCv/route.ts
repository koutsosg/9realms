import type { NextApiRequest, NextApiResponse } from "next";
import { fetchCvData } from "@/app/lib/api/api";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetchCvData();

  return NextResponse.json({ cv: response }, { status: 200 });
}
