/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useRouter } from "next/navigation";
import Sidebard from "../src/components/dashboard/Sidebar";
import { useEffect } from "react";
import axios from "axios";
// import { Provider, useDispatch, useSelector } from "react-redux";

export default function layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7222/api/user/issignedin"
        );

        if (!response.data.isSuccess) {
          console.log("auth ok");
          router.push("/login");
        }
      } catch (error) {
        console.error("auth error", error);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <div className="w-full h-screen flex justify-between bg-white">
      <div className="w-72">
        <Sidebard />
      </div>
      <div className="w-full p-8 flex flex-col">{children}</div>
    </div>
  );
}
