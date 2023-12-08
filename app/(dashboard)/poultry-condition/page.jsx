/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [chickens, setChickens] = useState([]);

  useEffect(() => {
    const fetchChickens = async () => {
      try {
        const response = await axios.get("http://localhost:86/api/Chicken");
        if (response.data) {
          setChickens(response.data.data);
          console.log("chicken info : ", response.data.data);
        }
      } catch (error) {
        console.error("Error fetching chickens:", error);
      }
    };

    fetchChickens();
  }, []);

  return (
    <div className="flex flex-col justify-start items-start gap-y-8">
      <h1 className="text-3xl font-bold text-gray-800">اطلاعات طیور</h1>
      <div className="overflow-hidden  rounded-xl w-full">
        <table className="min-w-full bg-white w-full">
          <thead>
            <tr>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                ردیف
              </th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                جنسیت
              </th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                نوع
              </th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                سال
              </th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                وزن
              </th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                نرخ تخم گذاری
              </th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                وضعیت سلامت
              </th>

              {/* سایر ستون‌ها */}
            </tr>
          </thead>
          <tbody className="pt-12">
            {chickens &&
              chickens.map((chicken, index) => (
                <tr key={chicken.id}>
                  <td className="py-4 px-4 border-b text-center text-gray-800">
                    <p>{index + 1}</p>
                  </td>
                  <td className="py-4 px-4 border-b text-center text-gray-800">
                    <p>{chicken.gender ? "خروس" : "مرغ"}</p>
                  </td>
                  <td className="py-4 px-4 border-b text-center text-gray-800">
                    {chicken.chickenType == 0
                      ? "تخم گذار"
                      : chicken.chickenType == 1
                      ? "گوشتی"
                      : chicken.chickenType == 2
                      ? "غیره"
                      : null}
                  </td>
                  <td className="py-4 px-4 border-b text-center text-gray-800">
                    {chicken.age}&nbsp; سال
                  </td>
                  <td className="py-4 px-4 border-b text-center text-gray-800">
                    {chicken.weight}
                    <span className="mx-1">Kg</span>
                  </td>
                  <td className="py-4 px-4 border-b text-center text-gray-800">
                    <span className="mx-[2px]">%</span> {chicken.layingRate}
                  </td>
                  <td className="py-4 px-4 border-b text-center text-gray-800">
                    {chicken.healthStatus.healthLevel == 0
                      ? "سالم"
                      : chicken.healthStatus.healthLevel == 1
                      ? "مریض"
                      : chicken.healthStatus.healthLevel == 2
                      ? "بحرانی"
                      : null}
                  </td>
                  {/* سایر ستون‌ها */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
