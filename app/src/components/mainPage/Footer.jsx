import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="sm:max-w-7xl mb-6 rounded-xl flex justify-between w-full bg-emerald-900/10 backdrop-blur-md p-8 gap-x-8 mt-10">
      <Image src="/images/logo.svg" alt="logo" width={104} height={104} />
      <div className="w-[1px]  bg-gray-400"> </div>
      <p className=" text-gray-600 text-justify leading-8">
        با توجه به رشد روز افزون جمعیت انسانی در جهان و افزایش نیاز روزانه جامعه
        بشری به پروتئین حیوانی از یک طرف و نیز محدود بودن منابع طبیعی و امکانات
        جهت پرورش به روش سنتی از طرف دیگر، بشر از دیرباز به فکر احداث واحد های
        پرورش صنعتی دام و طیور برای رفع نیاز های خود افتاده است. با توجه به
        اهمیت مصرف گوشت مرغ و تخم مرغ در سلامت فکری و جسمی افراد جامعه، تقریباً
        تمام کشور های جهان برنامه هایی برای افزایش مصرف سرانه محصولات طیور
        دارند. تامین پروتئین مورد نیاز کشور همواره از عمده ترین مشکلات اقتصادی
        بوده است. در شرایط فعلی نیاز های غذایی انسان ها از طریق تولیدات گیاهی یا
        دامی برطرف میشود. تولیدات دامی بهترین منبع تامین پروتئین مورد نیاز جوامع
        بشری است.
      </p>
    </footer>
  );
}
