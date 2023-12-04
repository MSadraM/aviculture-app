import React from "react";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-y-12 pb-4 items-center">
        <h1 className="text-emerald-600 text-9xl font-black  inline-block mx-4">
          طیورتک
        </h1>
        <p className="text-gray-700 text-7xl font-semibold">
          راه حلی نوین برای مرغداری شما
        </p>
      </div>
    </div>
  );
}
