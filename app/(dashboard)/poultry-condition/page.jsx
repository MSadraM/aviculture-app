/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import React, { useEffect, useState } from "react";

export default function page() {
  const [chickens, setChickens] = useState([]);

  useEffect(() => {
    const fetchChickens = async () => {
      try {
        const response = await axios.get("https://localhost:7222/api/Chicken");
        setChickens(response.data);
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
                سن
              </th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                نوع
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
          <tbody>
            {chickens.map((chicken) => (
              <tr key={chicken.id}>
                <td className="py-4 px-4 border-b text-center text-gray-800">
                  {chicken.Age}
                </td>
                <td className="py-4 px-4 border-b text-center text-gray-800">
                  {chicken.ChickenType}
                </td>
                <td className="py-4 px-4 border-b text-center text-gray-800">
                  {chicken.Weight}
                </td>
                <td className="py-4 px-4 border-b text-center text-gray-800">
                  {chicken.LayingRate}
                </td>
                <td className="py-4 px-4 border-b text-center text-gray-800">
                  {chicken.HealthStatus}
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
