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
      <div className="flex flex-col gap-y-8 items-center mt-4">
        <h1 className="text-emerald-600 text-8xl font-black  inline-block mx-4">
          طیورتک
        </h1>
        <p className="text-gray-700 text-5xl font-semibold">
          راه حلی نوین برای مرغداری شما
        </p>
        <p className="text-lg font-light text-gray-500 text-center w-2/3 leading-8 mt-4">
          پرورش طیور به پرورش انواع مختلف طیور اهلی مانند مرغ، غاز، اردک،
          بوقلمون، بلدرچین و غیره به منظور تولید گوشت، تخم مرغ و پر اشاره دارد.
          جوجه های صنعتی اغلب در کنار هزاران مرغ دیگر نگهداری می شوند و از رژیم
          غذایی ذرت و دانه های سویا استفاده می کنند
        </p>
        <div className="flex justify-center gap-x-4 mt-6">
          <button
            // onClick={}
            className="btn btn-basic-tonal w-48 h-12 text-lg hover:scale-95"
          >
            بیشتر بدانید
          </button>
          <button
            // onClick={
            //   login
            //     ? () => router.push("/counter")
            //     : () => router.push("/login")
            // }
            className="btn btn-basic-fill w-48 h-12 text-lg hover:scale-95"
          >
            مدیریت مرغداری
          </button>
        </div>
      </div>
    </div>
  );
}
