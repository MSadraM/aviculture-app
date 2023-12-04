/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  // const router = useRouter();
  // const dispatch = useDispatch();
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/check-auth", {
  //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //       });

  //       if (!response.data.authenticated) {
  //         router.push("/login");
  //         dispatch({ type: "SET_IS_LOGGED_IN", payload: false });
  //       } else {
  //         dispatch({ type: "SET_IS_LOGGED_IN", payload: true });
  //       }
  //     } catch (error) {
  //       console.error("خطا در بررسی احراز هویت:", error);
  //     }
  //   };

  //   checkAuthentication();
  // }, [router, dispatch]);

  return (
    <div className="w-full h-full flex justify-between py-6">
      <div className="flex flex-col justify-between items-center w-full px-4">
        <div className="flex flex-col gap-y-16 w-full">
          <p className="font-medium text-center w-full">کابر ادمین</p>
          <div className="flex flex-col gap-y-3 w-full items-center justify-center ">
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
          // onClick={handleLogout}
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
