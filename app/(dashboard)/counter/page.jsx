/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Link from "next/link";
import Image from "next/image";
import { BarChart } from "@mui/x-charts";

export default function page() {
  const [chickens, setChickens] = useState([]);
  const [zones, setZones] = useState([]);
  const [chartData, setChartData] = useState({
    xAxis: [
      {
        scaleType: "band",
        data: ["Feeding area", "Laying area", "Health area"],
      },
    ],
    series: [],
  });
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

          const temperatureData = response.data.data.map(
            (zone) => zone.weather.averageTemperature
          );
          const humidityData = response.data.data.map(
            (zone) => zone.weather.averageHumidity
          );
          const ventilationData = response.data.data.map(
            (zone) => zone.weather.averageVentilation
          );

          // ذخیره داده‌ها در استیت محلی
          setChartData({
            xAxis: [
              {
                scaleType: "band",
                data: ["Feeding area", "Laying area", "Health area"],
              },
            ],
            series: [
              { data: temperatureData, name: "Average Temperature" },
              { data: humidityData, name: "Average Humidity" },
              { data: ventilationData, name: "Average Ventilation" },
            ],
          });
          console.log("extractedData : ", extractedData);
        }
      } catch (error) {
        console.error("Error fetching zones:", error);
      }
    };

    fetchZones();
  }, []);

  console.log("zones : ", zones);

  return (
    <div className="flex w-full h-full flex-col gap-y-24">
      <div className="flex justify-between gap-x-8 mt-4">
        <Link
          href="/poultry-condition"
          className="flex w-full text-xl justify-center items-start text-emerald-600 font-black border-2 border-gray-300 hover:border-emerald-600 duration-300 py-6 rounded-xl hover:-translate-y-2 px-4"
        >
          <div className="flex gap-x-8 items-centet">
            <Image
              src={"/icons/text-enabled.svg"}
              width={48}
              height={48}
              alt=""
            ></Image>
            <div className="flex flex-col gap-y-2">
              <p>وضعیت طیور</p>
              <p className="text-sm text-gray-500 font-normal">
                مشاهده، حذف و افزودن اطلاعات طیور
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/state-areas"
          className="flex w-full text-xl justify-center items-start text-emerald-600 font-black border-2 border-gray-300 hover:border-emerald-600 duration-300 py-6 rounded-xl hover:-translate-y-2 px-4"
        >
          <div className="flex gap-x-8 items-centet">
            <Image
              src={"/icons/garage-enabled.svg"}
              width={48}
              height={48}
              alt=""
            ></Image>
            <div className="flex flex-col gap-y-2">
              <p> وضعیت نواحی</p>
              <p className="text-sm text-gray-500 font-normal">
                بررسی و تحلیل وضعیت نواحی{" "}
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/profile"
          className="flex w-full text-xl justify-center items-start text-emerald-600 font-black border-2 border-gray-300 hover:border-emerald-600 duration-300 py-6 rounded-xl hover:-translate-y-2 px-4"
        >
          <div className="flex gap-x-8 items-centet">
            <Image
              src={"/icons/user-enabled.svg"}
              width={48}
              height={48}
              alt=""
            ></Image>
            <div className="flex flex-col gap-y-2">
              <p>اطلاعات کاربری</p>
              <p className="text-sm text-gray-500 font-normal">
                مشاهده و ویرایش اطلاعات کاربری{" "}
              </p>
            </div>
          </div>
        </Link>

        {/* <Link
          href="/profile"
          className="flex w-full text-2xl justify-center items-center text-emerald-600 font-black border-2 border-gray-300 hover:bg-emerald-600 hover:text-white duration-300 py-8 rounded-xl hover:border-gray-300/0 hover:-translate-y-2"
        >
          اطلاعات کاربری
        </Link> */}
      </div>
      <div className="flex flex-col gap-y-16 items-start w-full">
        <h2 className="text-2xl font-extrabold text-gray-900">
          نظارت بر وضعیت طیور و نواحی
        </h2>
        <div className="flex w-full justify-between gap-x-10 rounded-xl">
          <div className="w-1/3 flex flex-col gap-y-6 rounded-lg">
            <div className="flex justify-between w-full">
              <h3 className="text-gray-500 font-semibold text-lg w-full text-right">
                نسبت تعداد مرغ و خروس
              </h3>
              <div className="px-4 py-0.5 flex gap-x-2 items-center bg-gray-200 rounded-lg">
                <span className="font-extrabold text-gray-600 text-base whitespace-nowrap">
                  {chickens.length}
                </span>
                <span className="text-gray-500">عدد</span>
              </div>
            </div>

            <div
              dir="ltr"
              lang="en"
              className=" border border-gray-300 gap-y-6 bg-white rounded-xl flex justify-center items-center"
            >
              <PieChart
                series={[
                  {
                    data: [
                      {
                        id: 0,
                        value: (
                          (chickens.filter(
                            (chicken) => chicken.gender === false
                          ).length /
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
                      innerRadius: 50,
                      additionalRadius: -10,
                      color: "gray",
                    },
                  },
                ]}
                width={320}
                height={240}
              />
            </div>
          </div>

          <div className="w-1/3 flex flex-col gap-y-6 rounded-lg">
            {/* <div className="flex  items-center h-16 gap-x-4 rounded-xl w-full justify-center">
              <span className="text-base text-gray-700">تعداد نواحی :</span>
              <span className="font-black text-4xl">{zones.length}</span>
            </div> */}
            <div className="flex justify-between w-full">
              <h3 className="text-gray-500 font-semibold text-lg w-full text-right">
                نوع نواحی مرغداری
              </h3>
              <div className="px-4 py-0.5 flex gap-x-2 items-center bg-gray-200 rounded-lg">
                <span className="font-bold text-gray-600 text-base whitespace-nowrap">
                  {zones.length}
                </span>
                <span className="text-gray-500">عدد</span>
              </div>
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
                      innerRadius: 50,
                      additionalRadius: -10,
                      color: "gray",
                    },
                  },
                ]}
                width={320}
                height={240}
              />
            </div>
          </div>

          <div className="w-1/3 flex flex-col gap-y-6 rounded-lg">
            {/* <div
              className={`flex  items-center h-16 gap-x-4 rounded-xl w-full justify-center`}
            >
              <span className="text-base text-gray-700">
                وضعیت سلامت طیور :
              </span>
              <span
                className={`font-black text-2xl ${
                  health ? "text-emerald-600" : "text-red-600"
                } `}
              >
                {health ? "سالم" : "بحرانی"}
              </span>
            </div> */}
            <div className="flex justify-between w-full">
              <h3 className="text-gray-500 font-semibold text-lg w-full text-right">
                وضعیت سلامت طیور
              </h3>
              <span
                className={`font-bold text-base whitespace-nowrap rounded-lg px-4 py-0.5 ${
                  health
                    ? "text-emerald-600 bg-emerald-100"
                    : "text-red-600 bg-red-100"
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
                        label: "Sick",
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
                      innerRadius: 50,
                      additionalRadius: -10,
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
      <div className="flex flex-col gap-y-16 items-start w-full">
        <h2 className="text-2xl font-extrabold text-gray-900">
          بررسی داده‌های نواحی مرغداری
        </h2>
        <div className="flex w-full justify-between gap-x-10 rounded-xl">
          <div className="w-full flex flex-col gap-y-6 rounded-lg">
            <div className="flex justify-between w-full">
              <h3 className="text-gray-500 font-semibold text-lg w-full text-right">
                تحلیل سنسور ها اندازه‌گیری{" "}
              </h3>
              <div className="flex justify-between gap-x-3">
                <span className="font-medium whitespace-nowrap text-sm border border-gray-300 px-3 py-0.5 rounded-lg text-[#0FADAA]">
                  میانگین دما
                </span>
                <span className="font-medium whitespace-nowrap text-sm border border-gray-300 px-3 py-0.5 rounded-lg text-[#3694F2]">
                  میانگین رطوبت
                </span>
                <span className="font-medium whitespace-nowrap text-sm border border-gray-300 px-3 py-0.5 rounded-lg text-[#B20DCF]">
                  میزان تهویه هوا
                </span>
              </div>
            </div>

            <div
              dir="ltr"
              lang="en"
              className=" border border-gray-300 gap-y-6 bg-white w-full rounded-xl flex justify-center items-center"
            >
              <BarChart
                xAxis={chartData.xAxis}
                series={chartData.series}
                width={1000}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 text-white">sdss</div>
    </div>
  );
}
