/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Link from "next/link";

export default function page() {
  const [chickens, setChickens] = useState([]);
  const [zones, setZones] = useState([]);

  const health =
    chickens.filter((chicken) => chicken.healthStatus.healthLevel === 0)
      .length /
      chickens.length >=
      0.5 && "سالم";

  const health0 = (
    (chickens.filter((chicken) => chicken.healthStatus.healthLevel === 0)
      .length /
      chickens.length) *
    100
  ).toFixed();

  const health1 = (
    (chickens.filter((chicken) => chicken.healthStatus.healthLevel === 1)
      .length /
      chickens.length) *
    100
  ).toFixed();

  const health2 = (
    (chickens.filter((chicken) => chicken.healthStatus.healthLevel === 2)
      .length /
      chickens.length) *
    100
  ).toFixed();

  const zoneType0 = (
    (zones.filter((zone) => zone.zoneType === 0).length / zones.length) *
    100
  ).toFixed();

  const zoneType1 = (
    (zones.filter((zone) => zone.zoneType === 1).length / zones.length) *
    100
  ).toFixed();

  const zoneType2 = (
    (zones.filter((zone) => zone.zoneType === 2).length / zones.length) *
    100
  ).toFixed();

  useEffect(() => {
    const fetchChickens = async () => {
      try {
        const response = await axios.get("http://localhost:86/api/Chicken");
        if (response.data) {
          setChickens(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching chickens:", error);
      }
    };

    fetchChickens();
  }, []);

  useEffect(() => {
    const fetchZones = async () => {
      try {
        const response = await axios.get("http://localhost:86/api/Zone");
        if (response.data) {
          setZones(response.data.data);
          // console.log("Zone info : ", zones);
        }
      } catch (error) {
        console.error("Error fetching zones:", error);
      }
    };

    fetchZones();
  }, []);

  return (
    <div className="flex w-full h-full flex-col gap-y-12 ">
      <div className="flex justify-between gap-x-8 mt-4">
        <Link
          href="/poultry-condition"
          className="flex w-full text-2xl justify-center items-center text-emerald-600 font-black border-2 border-gray-300 hover:bg-emerald-600 hover:text-white duration-300 py-8 rounded-xl hover:border-gray-300/0 hover:-translate-y-2"
        >
          وضعیت طیور
        </Link>
        <Link
          href="/state-areas"
          className="flex w-full text-2xl justify-center items-center text-emerald-600 font-black border-2 border-gray-300 hover:bg-emerald-600 hover:text-white duration-300 py-8 rounded-xl hover:border-gray-300/0 hover:-translate-y-2"
        >
          وضعیت نواحی
        </Link>
        <Link
          href="/profile"
          className="flex w-full text-2xl justify-center items-center text-emerald-600 font-black border-2 border-gray-300 hover:bg-emerald-600 hover:text-white duration-300 py-8 rounded-xl hover:border-gray-300/0 hover:-translate-y-2"
        >
          اطلاعات کاربری
        </Link>
      </div>
      <div className="flex w-full justify-between gap-x-6 bg-gray-200 p-8 rounded-xl">
        <div className="w-1/3  flex flex-col  gap-y-4 rounded-lg">
          <div className="flex  items-center h-16 gap-x-4 rounded-xl w-full justify-center">
            <span className="text-base text-gray-700">تعداد طیور :</span>
            <span className="font-black text-4xl">{chickens.length}</span>
          </div>
          <div
            dir="ltr"
            lang="en"
            className=" border border-gray-300 bg-white rounded-xl flex justify-center items-center"
          >
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: (
                        (chickens.filter((chicken) => chicken.gender === false)
                          .length /
                          chickens.length) *
                        100
                      ).toFixed(),
                      label: "Chicken",
                    },
                    {
                      id: 1,
                      value: (
                        (chickens.filter((chicken) => chicken.gender === true)
                          .length /
                          chickens.length) *
                        100
                      ).toFixed(),
                      label: "Rooster",
                    },
                  ],
                  innerRadius: 50,
                  outerRadius: 80,
                  paddingAngle: 8,
                  cornerRadius: 4,
                  startAngle: 0,
                  endAngle: 360,
                  highlightScope: { faded: "global", highlighted: "item" },

                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "gray",
                  },
                },
              ]}
              width={320}
              height={240}
            />
          </div>
        </div>

        <div className="w-1/3  flex flex-col  gap-y-4 rounded-lg">
          <div className="flex  items-center h-16 gap-x-4 rounded-xl w-full justify-center">
            <span className="text-base text-gray-700">تعداد نواحی :</span>
            <span className="font-black text-4xl">{zones.length}</span>
          </div>
          <div
            dir="ltr"
            lang="en"
            className=" border border-gray-300 bg-white rounded-xl flex justify-center items-center"
          >
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: zoneType0,
                      label: "Feeding area",
                    },
                    {
                      id: 1,
                      value: zoneType1,
                      label: "Laying area",
                    },
                    {
                      id: 2,
                      value: zoneType2,
                      label: "Health area",
                    },
                  ],
                  innerRadius: 50,
                  outerRadius: 80,
                  paddingAngle: 8,
                  cornerRadius: 4,
                  startAngle: 0,
                  endAngle: 360,
                  cx: 70,
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "gray",
                  },
                },
              ]}
              width={320}
              height={240}
            />
          </div>
        </div>

        <div className="w-1/3 flex flex-col gap-y-4 rounded-lg">
          <div
            className={`flex  items-center h-16 gap-x-4 rounded-xl w-full justify-center`}
          >
            <span className="text-base text-gray-700">وضعیت سلامت طیور :</span>
            <span
              className={`font-black text-2xl ${
                health ? "text-emerald-600" : "text-red-600"
              } `}
            >
              {health ? "سالم" : "بحرانی"}
            </span>
          </div>
          <div
            dir="ltr"
            lang="en"
            className=" border border-gray-300 bg-white rounded-xl flex justify-center items-center"
          >
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: health0,
                      label: "Healthy",
                    },
                    {
                      id: 1,
                      value: health1,
                      label: "sick",
                    },
                    {
                      id: 2,
                      value: health2,
                      label: "Critical",
                    },
                  ],
                  innerRadius: 50,
                  outerRadius: 80,
                  paddingAngle: 8,
                  cornerRadius: 4,
                  startAngle: 0,
                  endAngle: 360,
                  highlightScope: { faded: "global", highlighted: "item" },

                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "gray",
                  },
                },
              ]}
              width={320}
              height={240}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
