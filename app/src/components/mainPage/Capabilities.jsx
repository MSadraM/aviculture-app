import Image from "next/image";
import React from "react";
import Property from "./Property";

export default function Capabilities() {
  return (
    <div
      id="section-3"
      className="w-full h-screen flex justify-center items-center "
    >
      <div className="flex flex-col items-center gap-y-8">
        <h2 className="text-4xl font-bold">قابلیت‌های طیورتک</h2>
        <p className="text-lg font-light text-gray-500 text-center w-3/4 leading-8 mt-4">
          مرغداری هوشمند یک نوع مزرعه‌ای است که از فناوری‌های نوین برای بهبود
          کارایی، کنترل، و مدیریت فرآیندهای مرتبط با پرورش مرغ استفاده می‌کند.
          استفاده از مرغداری هوشمند به عنوان یک رویکرد نوین، به کاهش هدررفت
          منابع و بهبود بهره‌وری در صنعت پرورش مرغ کمک کرده و همچنین موجب بهبود
          شرایط زندگی و سلامت مرغ‌ها می‌شود. ویژگی‌های مرغداری هوشمند طیورتک
          شامل موارد زیر هستند:
        </p>

        <div className="flex gap-x-12 mt-8 w-3/4">
          <Property
            title="سنسورها و اتوماسیون"
            description="استفاده از سنسورها برای اندازه‌گیری و نظارت بر عوامل مختلف مانند دما، رطوبت، کیفیت هوا و غذا، نور، وضعیت سلامت مرغ و..."
            iconDefault="/icons/translation-default.svg"
            iconHover="/icons/translation-hover.svg"
          />
          <Property
            title="پایش و مدیریت از راه دور"
            description="امکان پایش و کنترل اجزای مختلف مرغداری از راه دور، که به کاهش نیاز به حضور فیزیکی افراد در مرغداری کمک می‌کند.
"
            iconDefault="/icons/tuning-square-default.svg"
            iconHover="/icons/tuning-square-hover.svg"
          />
          <Property
            title="سامانه‌های گزارش‌دهی"
            description="امکان ارائه گزارشات جامع و تحلیلی از عملکرد مرغداری با استفاده از داده‌های جمع‌آوری شده از سنسور های موجود در مرغداری"
            iconDefault="/icons/pie-chart-default.svg"
            iconHover="/icons/pie-chart-hover.svg"
          />
        </div>
      </div>
    </div>
  );
}
