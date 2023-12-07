/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";
import { response } from "express";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [username, setUsername] = useState("");

  useEffect(() => {
    // تابع برای درخواست نام کاربری از API
    const getUsername = async () => {
      try {
        const token = localStorage.getItem("token"); // اینجا باید توکن احراز هویت شما باشد
        const response = await axios.get("http://localhost:3001/get-username", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          setUsername(response.data.username);
          console.log("username : " + response.data.username);
        } else {
          console.error("Failed to fetch username");
        }
      } catch (error) {
        console.error("Error fetching username", error);
      }
    };

    // اجرای تابع برای درخواست نام کاربری
    getUsername();
  }, []); // این useEffect فقط یک بار اجرا می‌شود

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:7222/user/logout");
      console.log("responseeee : " + response.data);
    } catch (error) {
      console.error("Error");
    }
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="w-full h-full flex justify-between py-6">
      <div className="flex flex-col justify-between items-center w-full px-4 py-3">
        <div className="flex flex-col gap-y-16 w-full">
          <Link href="/" className="flex w-full justify-start">
            <Image src="/images/logo.svg" alt="logo" width={72} height={72} />
          </Link>{" "}
          <div className="flex flex-col gap-y-3 w-full items-center justify-center ">
            <div className="flex flex-col gap-y-2 items-start w-full pb-8">
              <p className="text-gray-400 text-sm">خوش آمدید</p>
              <p className="font-medium">{username}</p>
            </div>
            <Link
              href="/counter"
              className={
                pathname == "/counter" ? "lnk-enabled" : "lnk-disabled"
              }
            >
              <Image
                src={
                  pathname == "/counter"
                    ? "/icons/widget-enabled.svg"
                    : "/icons/widget-disabled.svg"
                }
                alt="logo"
                width={24}
                height={24}
              />
              پیشخوان
            </Link>
            <Link
              href="/profile"
              className={
                pathname == "/profile" ? "lnk-enabled" : "lnk-disabled"
              }
            >
              <Image
                src={
                  pathname == "/profile"
                    ? "/icons/user-enabled.svg"
                    : "/icons/user-disabled.svg"
                }
                alt="logo"
                width={24}
                height={24}
              />
              اطلاعات کاربری
            </Link>
            <Link
              href="/poultry-condition"
              className={
                pathname == "/poultry-condition"
                  ? "lnk-enabled"
                  : "lnk-disabled"
              }
            >
              <Image
                src={
                  pathname == "/poultry-condition"
                    ? "/icons/text-enabled.svg"
                    : "/icons/text-disabled.svg"
                }
                alt="logo"
                width={24}
                height={24}
              />
              وضعیت طیور
            </Link>
            <Link
              href="/state-areas"
              className={
                pathname == "/state-areas" ? "lnk-enabled" : "lnk-disabled"
              }
            >
              <Image
                src={
                  pathname == "/state-areas"
                    ? "/icons/garage-enabled.svg"
                    : "/icons/garage-disabled.svg"
                }
                alt="logo"
                width={24}
                height={24}
              />
              وضعیت نواحی
            </Link>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="btn btn-danger-text hover:bg-red-100 w-full"
        >
          {/* <Image src={} width={} height={} alt=""/> */}
          خروج از حساب کاربری
        </button>
      </div>
      <div className="w-[2px] bg-gray-200 rounded-full"></div>
    </div>
  );
}
