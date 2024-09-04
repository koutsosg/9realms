"use client";
import Button from "@/app/components/primaryButton/Button";
import Test from "@/app/components/test";
import { signOut } from "next-auth/react";
import React from "react";

export default function Home() {
  return (
    <main>
      <Test />
      <Button
        variant="danger"
        onClick={() => signOut({ callbackUrl: "/cv_view" })}
      >
        Sign Out
      </Button>
    </main>
  );
}
