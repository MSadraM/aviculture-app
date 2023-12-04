/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import Image from "next/image";
import React from "react";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      console.log(response);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        router.push("/counter");
        // window.location.href = "/counter";
      } else {
        alert("ورود ناموفق. لطفا نام کاربری و رمز عبور خود را بررسی کنید.");
      }
    } catch (error) {
      console.error("خطا در ورود:", error);
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/3 flex justify-center items-center">
        <div className="flex flex-col gap-y-10 w-full px-24 ">
          <div className="flex flex-col gap-y-12 w-full items-center">
            <h2 className="font-extrabold text-2xl text-gray-800 border-b border-gray-300 w-full text-center pb-6">
              ورود به حساب کاربری
            </h2>
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="user" className="text-gray-400 text-sm">
                  حساب کاربری
                </label>
                <input
                  id="user"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-default text-left"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="pass" className="text-gray-400 text-sm">
                  رمز عبور
                </label>
                <input
                  id="pass"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-default text-left"
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="btn btn-basic-fill w-full h-12 hover:scale-95"
          >
            ورود{" "}
          </button>
        </div>
      </div>
      <div className="w-2/3 h-full relative">
        <Image src="/images/egg.jpg" alt="logo" fill={true} quality={100} />
      </div>
    </div>
  );
}
