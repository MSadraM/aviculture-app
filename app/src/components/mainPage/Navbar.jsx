"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../reducers/authReducer";

export default function Navbar() {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const { isLoggedIn, login, logout } = useAuth();

  console.log("log : " + isLoggedIn);

  return (
    <div className="w-full backdrop-blur-2xl fixed flex justify-center">
      <navbar className="flex w-full justify-between items-center sm:max-w-7xl py-8">
        <Image src="/images/logo.svg" alt="logo" width={104} height={104} />
        <ul className="flex justify-between w-fit gap-x-8">
          <li className="hover:text-emerald-500 text-gray-800 duration-300">
            معرفی
          </li>
          <li className="hover:text-emerald-500 text-gray-800 duration-300">
            مرغداری هوشمند
          </li>
          <li className="hover:text-emerald-500 text-gray-800 duration-300">
            نواحی نگهداری{" "}
          </li>
          <li className="hover:text-emerald-500 text-gray-800 duration-300">
            سیستم تغذیه{" "}
          </li>
          <li className="hover:text-emerald-500 text-gray-800 duration-300">
            درباره ما{" "}
          </li>
        </ul>
        <button
          onClick={
            isLoggedIn
              ? () => router.push("/counter")
              : () => router.push("/login")
          }
          className="btn btn-basic-fill w-32 hover:scale-95"
        >
          {isLoggedIn ? "داشبورد" : "ورود"}
        </button>
      </navbar>
    </div>
  );
}
