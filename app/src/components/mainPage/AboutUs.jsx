import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div
      id="section-5"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="flex flex-col items-center gap-y-12">
        <h2 className="text-4xl font-bold">درباره ما</h2>
        <div className="flex justify-between w-3/4 items-start gap-x-32">
          <p className="text-lg font-light text-gray-500 text-justify leading-8">
            با کمال مسرت ما، مرغداری هوشمند خوش آمدید می‌گوید. در مرغداری
            هوشمند، مفتخریم که با ارائه آخرین فناوری‌ها و راهکارهای نوین در حوزه
            پرورش مرغ، به ارتقاء صنعت پرورش طیور کمک نموده و بهترین شرایط برای
            رشد و توسعه مرغان فراهم سازیم.
            <br />
            <br />
            ماموریت ما در مرغداری هوشمند، ارتقاء بهره‌وری و کیفیت پرورش مرغان
            است. از طریق جمع‌آوری دقیق داده‌های محیطی، مصرف غذای مرغ، و وضعیت
            سلامتی آن‌ها، به تحلیل دقیق و هوشمندانه این اطلاعات می‌پردازیم تا به
            مرغداران این امکان را بدهیم تا تصمیمات بهینه‌تری در مدیریت مرغداری
            خود اتخاذ کنند.
          </p>

          <Image
            src="/images/img-8.svg"
            width={480}
            height={480}
            alt="section-5"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
