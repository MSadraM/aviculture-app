/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function page() {
  const [chickens, setChickens] = useState([]);
  const [zones, setZones] = useState([]);

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
    <div className="flex w-full h-full justify-start items-start">
      {console.log(
        "count : ",
        chickens.filter((chicken) => chicken.gender === false)
      )}
      <div className="flex w-full justify-between gap-x-8">
        <div className="w-1/3  flex flex-col  gap-y-4 rounded-lg">
          <div className="flex bg-gray-200 items-center py-4 gap-x-4 rounded-xl w-full justify-center">
            <span className="text-base text-gray-700">تعداد طیور :</span>
            <span className="font-black text-4xl">{chickens.length}</span>
          </div>
          <div
            dir="ltr"
            lang="en"
            className=" border border-gray-300 rounded-xl flex justify-center items-center"
          >
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: chickens.filter(
                        (chicken) => chicken.gender === false
                      ).length,
                      label: "chicken",
                    },
                    {
                      id: 1,
                      value: chickens.filter(
                        (chicken) => chicken.gender === true
                      ).length,
                      label: "rooster",
                    },
                  ],
                  innerRadius: 40,
                  outerRadius: 90,
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
              height={320}
            />
          </div>
        </div>
        <div className="w-1/3  flex flex-col  gap-y-4 rounded-lg">
          <div className="flex bg-gray-200 items-center py-4 gap-x-4 rounded-xl w-full justify-center">
            <span className="text-base text-gray-700">تعداد نواحی :</span>
            <span className="font-black text-4xl">{zones.length}</span>
          </div>
          <div
            dir="ltr"
            lang="en"
            className=" border border-gray-300 rounded-xl flex justify-center items-center"
          >
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: chickens.filter(
                        (chicken) => chicken.gender === false
                      ).length,
                      label: "chicken",
                    },
                    {
                      id: 1,
                      value: chickens.filter(
                        (chicken) => chicken.gender === true
                      ).length,
                      label: "rooster",
                    },
                  ],
                  innerRadius: 40,
                  outerRadius: 90,
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
              height={320}
            />
          </div>
        </div>
        <div className="w-1/3  flex flex-col  gap-y-4 rounded-lg">
          <div className="flex bg-gray-200 items-center py-4 gap-x-4 rounded-xl w-full justify-center">
            <span className="text-base text-gray-700">تعداد طیور :</span>
            <span className="font-black text-4xl">{chickens.length}</span>
          </div>
          <div
            dir="ltr"
            lang="en"
            className=" border border-gray-300 rounded-xl flex justify-center items-center"
          >
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: chickens.filter(
                        (chicken) => chicken.gender === false
                      ).length,
                      label: "chicken",
                    },
                    {
                      id: 1,
                      value: chickens.filter(
                        (chicken) => chicken.gender === true
                      ).length,
                      label: "rooster",
                    },
                  ],
                  innerRadius: 40,
                  outerRadius: 90,
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
              height={320}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
