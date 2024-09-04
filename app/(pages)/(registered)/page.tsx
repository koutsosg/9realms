"use client";
import Test from "@/app/components/test";
import { signOut, useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  return (
    <main>
      <Test />
      <button onClick={() => signOut({ callbackUrl: "/cv_view" })}>
        <span>Signout</span>
      </button>
    </main>
  );
}
