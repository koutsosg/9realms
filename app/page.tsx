"use client";
import React from "react";
import DndListComponent from "./components/dnd/dndList";
import Test from "./components/test";

export default function Home() {
  /*   const renderItem = ({ content }: { content: React.ReactNode }) => (
    <div style={{ padding: 8, border: "1px solid gray" }}>{content}</div>
  ); */
  return (
    <main className=" flex flex-col items-center justify-between p-24 ">
      <Test />
    </main>
  );
}
