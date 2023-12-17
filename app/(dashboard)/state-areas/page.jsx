/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import axios from "axios";
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
    <div className="flex flex-col justify-start items-start gap-y-8">
      <h1 className="text-3xl font-bold text-gray-800">وضعیت نواحی</h1>

      <div className="flex gap-x-8">
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
      </div>
    </div>
  );
}

// 0 : ناحیه تغذیه
// 1 : ناحیه تخم گذاری
// 2 : ناحیه سلامت
