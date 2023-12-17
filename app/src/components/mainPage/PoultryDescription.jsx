import Image from "next/image";
import React from "react";

export default function PoultryDescription() {
  return (
    <div
      id="section-2"
      className="w-full h-screen flex justify-center items-center "
    >
      <div className="flex flex-col items-center gap-y-6">
        <h2 className="text-4xl font-bold">مرغداری هوشمند چیست ؟</h2>
        <p className="text-lg font-light text-gray-500 text-center w-2/3 leading-8 mt-4">
          پرورش طیور به پرورش انواع مختلف طیور اهلی مانند مرغ، غاز، اردک،
          بوقلمون، بلدرچین و غیره به منظور تولید گوشت، تخم مرغ و پر اشاره دارد.
          جوجه های صنعتی اغلب در کنار هزاران مرغ دیگر نگهداری می شوند و از رژیم
          غذایی ذرت و دانه های سویا استفاده می کنند پرورش طیور به پرورش انواع
          مختلف طیور اهلی مانند مرغ، غاز، اردک، بوقلمون، بلدرچین و غیره به منظور
          تولید گوشت، تخم مرغ و پر اشاره دارد. جوجه های صنعتی اغلب در کنار
          هزاران مرغ دیگر نگهداری می شوند و از رژیم غذایی ذرت و دانه های سویا
          استفاده می کنند
        </p>

        <div className="flex gap-x-24 mt-8">
          <Image
            className="rounded-xl hover:scale-125 duration-500"
            src={"/images/img-1.svg"}
            alt="aviculture"
            title="aviculture"
            width={240}
            height={240}
          />
          <Image
            className="rounded-xl hover:scale-125 duration-500"
            src={"/images/img-3.svg"}
            alt="aviculture"
            title="aviculture"
            width={240}
            height={240}
          />
          <Image
            className="rounded-xl hover:scale-125 duration-500"
            src={"/images/img-2.svg"}
            alt="aviculture"
            title="aviculture"
            width={240}
            height={240}
          />
        </div>
      </div>
    </div>
  );
}
