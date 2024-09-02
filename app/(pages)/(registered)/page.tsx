"use client";
import Test from "@/app/components/test";
import { signOut } from "next-auth/react";
import React from "react";

export default function Home() {
  /*   const renderItem = ({ content }: { content: React.ReactNode }) => (
    <div style={{ padding: 8, border: "1px solid gray" }}>{content}</div>
  ); */
  return (
    <main className=" flex flex-col items-center justify-between p-24 ">
      <Test />
      <button
        className="flex items-center p-2 duration-400 ease-in-out "
        onClick={() => signOut({ callbackUrl: "/login" })}
      >
        <span className=" text-[0.55rem] text-black leading-[0.625rem] font-semibold uppercase text-polo-500 hidden lg:block xl:text-xxs ">
          Signout
        </span>
      </button>
    </main>
  );
}
