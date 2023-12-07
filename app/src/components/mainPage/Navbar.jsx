"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  const [login, setLogin] = useState(false);

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/check-auth", {
  //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //       });

  //       if (response.data.authenticated) {
  //         setLogin(true);
  //       }
  //     } catch (error) {
  //       console.error("خطا در بررسی احراز هویت:", error);
  //     }
  //   };

  //   checkAuthentication();
  // }, []);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7222/api/user/issignedin"
        );

        if (response.data.data) {
          console.log("auth ok");
          setLogin(response.data.data);
        }
      } catch (error) {
        console.error("auth error", error);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <div className="w-full backdrop-blur-2xl fixed flex justify-center">
      <navbar className="flex w-full justify-between items-center sm:max-w-7xl py-8">
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" width={104} height={104} />
        </Link>
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
            login ? () => router.push("/counter") : () => router.push("/login")
          }
          className="btn btn-basic-fill w-32 hover:scale-95"
        >
          {login ? "داشبورد" : "ورود"}
        </button>
      </navbar>
    </div>
  );
}
