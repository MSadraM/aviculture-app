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
          مرغداری هوشمند به معنای استفاده از فناوری‌های نوین در صنعت دامپروری
          است تا بهبودهای قابل توجهی در عملکرد و مدیریت مرغداری حاصل شود. از
          تجهیزات هوشمند و حسگرهای متنوع برای اندازه‌گیری شرایط محیطی چون دما و
          رطوبت استفاده می‌شود. سپس با استفاده از دستگاه‌های اتوماسیون و
          نرم‌افزارهای پیشرفته، تنظیمات مرغداری به صورت خودکار تغییر می‌کنند. با
          کاهش هدر منابع مانند آب و خوراک و ارائه اطلاعات دقیق به مدیران،
          مرغداری هوشمند به دامداران امکان بهینه‌سازی فرآیندها و افزایش بهره‌وری
          را می‌دهد.
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
