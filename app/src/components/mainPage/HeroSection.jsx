"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { Link } from "react-scroll";

export default function HeroSection() {
  const router = useRouter();

  return (
    <div
      id="section-1"
      className="flex flex-col justify-center items-center h-screen"
    >
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
          <Link
            activeClass="active"
            to="section-2"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            className="btn btn-basic-tonal w-48 h-12 text-lg hover:scale-95 cursor-pointer"
          >
            بیشتر بدانید
          </Link>
          <button
            onClick={() => router.push("/counter")}
            className="btn btn-basic-fill w-48 h-12 text-lg hover:scale-95"
          >
            مدیریت مرغداری
          </button>
        </div>
      </div>
    </div>
  );
}
