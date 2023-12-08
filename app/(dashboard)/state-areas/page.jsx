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
          // console.log("Zone info : ", zones);
        }
      } catch (error) {
        console.error("Error fetching zones:", error);
      }
    };

    fetchZones();
  }, []);
  return (
    <div className="flex flex-col gap-y-8">
      {console.log("z : ", zones)}

      {zones.map((zone, index) => (
        <div key={index} className="border border-emerald-600 rounded-xl p-6">
          <h3>Zone {index + 1}</h3>
          <p>Zone Type: {zone.zoneType}</p>
          <p>Lighting Status Type: {zone.lightingStatus.lightingStatusType}</p>
          <p>Amount: {zone.lightingStatus.amount}</p>
          <p>Weather Zone ID: {zone.weather.zoneId}</p>
        </div>
      ))}
    </div>
  );
}

// 0 : ناحیه تغذیه
// 1 : ناحیه تخم گذاری
// 2 : ناحیه سلامت
