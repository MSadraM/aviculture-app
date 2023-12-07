"use client";

import axios from "axios";
import React, { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:7222/api/Chicken");
        console.log(response.data); // نمایش response در console
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // آرایه خالی به معنای اجرای useEffect یک بار در هنگام اجرای اولیه
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-y-12 pb-4 items-center">
        <h1 className="text-emerald-600 text-9xl font-black  inline-block mx-4">
          طیورتک
        </h1>
        <p className="text-gray-700 text-7xl font-semibold">
          راه حلی نوین برای مرغداری شما
        </p>
        {/* <div className="flex justify-center gap-x-4">
          <button
            onClick={
              login
                ? () => router.push("/counter")
                : () => router.push("/login")
            }
            className="btn btn-basic-fill w-32 hover:scale-95"
          >
            مدیریت مرغداری
          </button>
          <button
            // onClick={}
            className="btn btn-basic-tonal w-32 hover:scale-95"
          >
            بیشتر بدانید
          </button>
        </div> */}
      </div>
    </div>
  );
}
