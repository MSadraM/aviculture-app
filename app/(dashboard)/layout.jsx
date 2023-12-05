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
        const response = await axios.get("http://localhost:3001/check-auth", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        if (!response.data.authenticated) {
          router.push("/login");
        }
      } catch (error) {
        console.error("خطا در بررسی احراز هویت:", error);
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
