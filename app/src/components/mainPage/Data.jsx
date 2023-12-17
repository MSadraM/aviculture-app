import Image from "next/image";
import React from "react";

export default function Data() {
  return (
    <div
      id="section-4"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="flex flex-col items-center gap-y-12">
        <h2 className="text-4xl font-bold">اهمیت داده‌ها</h2>
        <div className="flex justify-between w-3/4 items-center gap-x-32">
          <p className="text-lg font-light text-gray-500 text-justify leading-8">
            در مرغداری هوشمند، تحلیل دقیق داده‌ها یکی از ابزارهای حیاتی برای
            بهره‌گیری از اطلاعات به دست آمده از سنسورها و دستگاه‌های متصل است.
            با جمع‌آوری اطلاعات در زمینه‌های گوناگون از جمله دما، رطوبت، مصرف
            غذا، وضعیت سلامت مرغان، و تغییرات محیطی، این داده‌ها تبدیل به منابع
            ارزشمندی می‌شوند.
            <br />
            <br />
            تحلیل آماری داده‌ها نه تنها این اطلاعات را سازماندهی می‌کند بلکه
            الگوهای مهم را در عملکرد مرغداری نیز شناسایی می‌کند. از مدل‌های هوش
            مصنوعی مانند یادگیری ماشین برای پیش‌بینی نیازهای مرغان در شرایط
            مختلف استفاده می‌شود. این تحلیل دقیق به مدیران مرغداری امکان می‌دهد
            تا تصمیمات هوشمندانه‌تری در زمینه‌هایی مانند تنظیمات تغذیه،
            بهینه‌سازی مصرف انرژی، و پیشگیری از بیماری‌ها اتخاذ کنند، که در
            نهایت به بهبود بهره‌وری و سلامتی مرغان منجر خواهد شد.
          </p>
          <Image
            src="/images/img-7.svg"
            width={400}
            height={400}
            alt="section-4"
          />
        </div>
      </div>
    </div>
  );
}
