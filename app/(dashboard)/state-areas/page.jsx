/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Tooltip } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function page() {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    const fetchZones = async () => {
      try {
        const response = await axios.get("http://localhost:86/api/Zone");
        if (response.data) {
          setZones(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching zones:", error);
      }
    };

    fetchZones();
  }, []);

  return (
    <div className="flex flex-col justify-start items-start gap-y-16">
      <h1 className="text-3xl font-bold text-gray-800">وضعیت نواحی</h1>

      <div className="flex flex-wrap w-full justify-between gap-y-24 pb-8">
        {zones.map((zone, index) => (
          <div key={index} className="flex flex-col gap-y-8 items-center ">
            <div className="flex flex-col gap-y-6 items-center">
              <Image
                className="rounded-xl hover:scale-95 duration-500"
                src={`${
                  zone.zoneType == 0
                    ? "/images/z1.png"
                    : zone.zoneType == 1
                    ? "/images/z2.png"
                    : "/images/z3.png"
                }`}
                width={360}
                height={360}
                alt="zone"
                // quality={100}
              ></Image>
              <div className="flex w-full justify-between items-center">
                <p className="text-center font-bold text-xl text-gray-900">
                  ناحیه شماره {index + 1}
                </p>
                <p
                  className={`font-semibold text-sm text-gray-700 text-center py-1 rounded-xl w-fit px-4 ${
                    zone.zoneType == 0
                      ? "bg-[#F6D9AC]/50"
                      : zone.zoneType == 1
                      ? "bg-[#E8E8E8]/50"
                      : "bg-[#C1F7E2]/50"
                  }`}
                >
                  {zone.zoneType == 0 ? (
                    <p>ناحیه تغذیه</p>
                  ) : zone.zoneType == 1 ? (
                    <p>ناحیه تخم‌گذاری</p>
                  ) : (
                    <p>ناحیه سلامت</p>
                  )}
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-x-3 w-full font-normal text-base text-gray-500">
              <Tooltip
                title={<p className="text-base font-sans">میانگین دما</p>}
              >
                <div className="flex justify-center gap-x-2 w-full py-2 hover:bg-gray-200 duration-300 text-center rounded-xl text-base font-medium items-center">
                  <p>{zone.weather.averageTemperature}</p>
                  <Image
                    src={"/icons/temperature.svg"}
                    width={24}
                    height={24}
                    alt="temperature"
                  ></Image>
                </div>
              </Tooltip>
              <Tooltip
                title={<p className="text-base font-sans">میانگین رطوبت</p>}
              >
                <div className="flex justify-center gap-x-2 w-full py-2 hover:bg-gray-200 duration-300 text-center rounded-xl text-base font-medium items-center">
                  <p>{zone.weather.averageHumidity}</p>
                  <Image
                    src={"/icons/waterdrops.svg"}
                    width={24}
                    height={24}
                    alt="temperature"
                  ></Image>
                </div>
              </Tooltip>
              <Tooltip
                title={<p className="text-base font-sans">میزان تهویه هوا</p>}
              >
                <div className="flex justify-center gap-x-2 w-full py-2 hover:bg-gray-200 duration-300 text-center rounded-xl text-base font-medium items-center">
                  <p>{zone.weather.averageVentilation}</p>
                  <Image
                    src={"/icons/ventilation.svg"}
                    width={24}
                    height={24}
                    alt="temperature"
                  ></Image>
                </div>
              </Tooltip>
              <Tooltip
                title={<p className="text-base font-sans">میزان نور محیط</p>}
              >
                <div className="flex justify-center gap-x-2 w-full py-2 hover:bg-gray-200 duration-300 text-center rounded-xl text-base font-medium items-center">
                  <p>{zone.lightingStatus.amount}</p>
                  <Image
                    src={"/icons/lightingStatus.svg"}
                    width={24}
                    height={24}
                    alt="temperature"
                  ></Image>
                </div>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex gap-x-8">
        {zones.map((zone, index) => (
          <div key={index} className="border border-emerald-600 rounded-xl p-6">
            <h3>Zone {index + 1}</h3>
            <p>Zone Type: {zone.zoneType}</p>
            <p>
              Lighting Status Type: {zone.lightingStatus.lightingStatusType}
            </p>
            <p>Amount: {zone.lightingStatus.amount}</p>
            <p>------------------------------</p>
            <p>{zone.weather.averageTemperature}</p>
            <p>{zone.weather.averageHumidity}</p>
            <p>{zone.weather.averageVentilation}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

// 0 : ناحیه تغذیه
// 1 : ناحیه تخم گذاری
// 2 : ناحیه سلامت
