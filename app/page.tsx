"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Welcome to SpyderWeb
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          SpyderWeb is a collection of tools and resources to help you build your
          next project. We have a wide range of tools to help you build your
          project, from design to development.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}