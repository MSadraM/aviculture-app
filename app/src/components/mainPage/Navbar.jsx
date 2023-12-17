"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
// import Link from "next/link";
import styled from "styled-components";
import { Link } from "react-scroll";

const Header = styled.header`
  background-color: ${(props) =>
    props.isScrolled ? "#f0fdf4" : "transparent"};
  transition: background-color 0.3s ease;
  /* دیگر استایل‌های هدر */
`;

export default function Navbar() {
  const router = useRouter();
  <div className="bg-emerald-100"></div>;

  const [login, setLogin] = useState(false);

  useEffect(() => {
    localStorage.getItem("token") ? setLogin(true) : setLogin(false);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // تعیین حداقل مقدار اسکرولی که می‌خواهید از آنجا به بعد، بک‌گراند هدر را تغییر دهید
      const scrollThreshold = 70;

      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // اضافه کردن گوش دادن به رویداد اسکرول
    window.addEventListener("scroll", handleScroll);

    // تخریب گوش دادن به رویداد اسکرول در زمان حذف کامپوننت
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Header
      isScrolled={isScrolled}
      className="w-full fixed flex justify-center z-20 select-none"
    >
      <navbar className="flex w-full justify-between items-center sm:max-w-7xl py-6">
        <Link
          activeClass="active"
          to="section-1"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="cursor-pointer"
        >
          <Image src="/images/logo.svg" alt="logo" width={104} height={104} />
        </Link>

        <ul className="flex justify-between w-fit gap-x-8">
          <li>
            <Link
              activeClass="active"
              to="section-1"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="hover:text-emerald-500 text-gray-800 duration-300 cursor-pointer"
            >
              معرفی
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section-2"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="hover:text-emerald-500 text-gray-800 duration-300 cursor-pointer"
            >
              مرغداری هوشمند
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section-3"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="hover:text-emerald-500 text-gray-800 duration-300 cursor-pointer"
            >
              قابلیت‌های طیورتک{" "}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section-4"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="hover:text-emerald-500 text-gray-800 duration-300 cursor-pointer"
            >
              داده‌ها{" "}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section-5"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="hover:text-emerald-500 text-gray-800 duration-300 cursor-pointer"
            >
              درباره ما{" "}
            </Link>
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
    </Header>
  );
}
