/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

export default function page() {
  const [chickens, setChickens] = useState([]);

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

  const handleDelete = (id) => {
    try {
      // ارسال درخواست به API برای حذف
      axios.delete(`http://localhost:86/api/Chicken/?id=${id}`);
      console.log("chickenId", id);

      // حذف سطر از جدول محلی
      setChickens((prevChickens) =>
        prevChickens.filter((chicken) => chicken.id !== id)
      );
    } catch (error) {
      console.error("Error deleting chicken:", error);
    }
  };

  // استورهای مورد نیاز برای مدیریت مودال
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newChickenData, setNewChickenData] = useState({
    gender: false, // مقدار پیش‌فرض برای جنسیت
    chickenType: 0, // مقدار پیش‌فرض برای نوع مرغ
    age: 1,
    weight: 1,
    layingRate: 0,
  });

  // تابع باز و بسته کردن مودال
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "640px",
      height: "580px",
      padding: "24px",
      borderRadius: "12px",
    },
  };

  // تابع برای ثبت اطلاعات مرغ به API
  const handleSaveChicken = async () => {
    try {
      // ارسال درخواست به API برای ثبت اطلاعات مرغ
      const saveChickenResponse = await axios.post(
        "http://localhost:86/api/Chicken",
        newChickenData
      );

      const savedChickenId = saveChickenResponse.data.data.id;
      console.log("savedChickenId : ", savedChickenId);
      const savedHealthLevel = newChickenData.healthLevel;

      axios.put("http://localhost:86/api/HealthStatus", {
        id: savedChickenId,
        healthLevel: savedHealthLevel,
        bodyTemprature: 39,
        checkupDate: "2023-12-24T18:34:16.482Z",
      });

      // بازنشانی داده‌های فرم

      setNewChickenData({
        gender: false,
        chickenType: 0,
        age: 1,
        weight: 1,
        layingRate: 0,
      });

      // درخواست جدید برای به‌روزرسانی لیست مرغ‌ها از API
      const updatedChickensResponse = await axios.get(
        "http://localhost:86/api/Chicken"
      );
      if (updatedChickensResponse.data) {
        setChickens(updatedChickensResponse.data.data);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error saving chicken:", error);
    }
  };

  return (
    <div className="flex flex-col justify-start items-start gap-y-8 pb-8 ">
      <h1 className="text-3xl font-bold text-gray-800">وضعیت طیور</h1>
      <div className="overflow-hidden rounded-xl w-full">
        <table className="min-w-full bg-white w-full">
          <thead>
            <tr className="">
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                ردیف
              </th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                جنسیت
              </th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                نوع
              </th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                سن
              </th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                وزن
              </th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                نرخ تخم گذاری
              </th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                وضعیت سلامت
              </th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">
                عملیات
              </th>
              {/* سایر ستون‌ها */}
            </tr>
          </thead>
          <tbody className="pt-12">
            {chickens &&
              chickens.map((chicken, index) => (
                <tr key={chicken.id} className="row-default">
                  <td className="py-4 px-4 border-b text-center text-gray-800">
                    <p>{index + 1}</p>
                  </td>
                  <td className="py-4 px-4 border-b text-center text-gray-800">
                    <p>{chicken.gender ? "خروس" : "مرغ"}</p>
                  </td>
                  <td className="py-4 px-4 border-b text-center text-gray-800">
                    {chicken.chickenType == 0
                      ? "تخم گذار"
                      : chicken.chickenType == 1
                      ? "گوشتی"
                      : chicken.chickenType == 2
                      ? "غیره"
                      : null}
                  </td>
                  <td className="py-4 px-4 border-b text-center text-gray-800">
                    {chicken.age}&nbsp; سال
                  </td>
                  <td className="py-4 px-4 border-b text-center text-gray-800">
                    {chicken.weight}
                    <span className="mx-1">Kg</span>
                  </td>
                  <td className="py-4 px-4 border-b text-center text-gray-800">
                    <div className="w-full flex justify-center">
                      <p className="bg-gray-200 text-gray-700 font-medium w-16 py-1 rounded-xl">
                        <span className="mx-[2px]">%</span> {chicken.layingRate}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4 border-b text-center text-gray-800 flex justify-center">
                    {chicken.healthStatus.healthLevel == 0 ? (
                      <p className="bg-emerald-100 text-emerald-700 font-medium w-16 py-1 rounded-xl">
                        سالم
                      </p>
                    ) : chicken.healthStatus.healthLevel == 1 ? (
                      <p className="bg-orange-100 text-orange-700 font-medium w-16 py-1 rounded-xl">
                        بیمار
                      </p>
                    ) : chicken.healthStatus.healthLevel == 2 ? (
                      <p className="bg-red-100 text-red-700 font-medium w-16 py-1 rounded-xl">
                        بحرانی
                      </p>
                    ) : null}
                  </td>
                  <td className="py-4 px-4 border-b text-center text-gray-800">
                    {/* اضافه کردن دکمه حذف */}
                    <button
                      onClick={() => handleDelete(chicken.id)}
                      className="btn-danger-text font-medium"
                    >
                      حذف
                    </button>
                  </td>
                  {/* سایر ستون‌ها */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex w-full mt-6">
        {/* دکمه اضافه کردن به پایین جدول */}
        <button
          onClick={toggleModal}
          className="btn btn-basic-tonal w-full py-6"
        >
          افزودن
        </button>
        {/* مودال */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={toggleModal}
          style={customStyles}
          contentLabel="اطلاعات مرغ جدید"
        >
          <div className="flex flex-col gap-y-8 h-full backdrop-blur-xl">
            <h2 className="font-bold w-full text-right text-xl pb-4 border-b border-gray-300">
              اطلاعات مرغ جدید
            </h2>
            {/* ایجاد فرم با فیلدهای مرغ */}
            <div className="flex flex-col justify-between h-full w-full">
              {/* <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                جنسیت:
              </label>
              <input
                type="checkbox"
                checked={newChickenData.gender}
                onChange={(e) =>
                  setNewChickenData({
                    ...newChickenData,
                    gender: e.target.checked,
                  })
                }
              />
            </div> */}
              <div className="w-full flex flex-col gap-y-4">
                <div className="flex w-full gap-x-8">
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      جنسیت:
                    </label>
                    <select
                      value={newChickenData.gender}
                      onChange={(e) =>
                        setNewChickenData({
                          ...newChickenData,
                          gender: JSON.parse(e.target.value),
                        })
                      }
                      className="input-default w-full mt-4"
                    >
                      <option value={"false"}>مرغ</option>
                      <option value={"true"}>خروس</option>
                    </select>
                  </div>
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      نوع:
                    </label>
                    <select
                      value={newChickenData.chickenType}
                      onChange={(e) =>
                        setNewChickenData({
                          ...newChickenData,
                          chickenType: Number(e.target.value),
                        })
                      }
                      className="input-default w-full mt-4"
                    >
                      <option value={0}>تخم‌گذار</option>
                      <option value={1}>گوشتی</option>
                      <option value={2}>غیره</option>
                    </select>
                  </div>
                </div>
                <div className="flex w-full gap-x-8">
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      سن :
                    </label>
                    <input
                      type="number"
                      value={newChickenData.age}
                      onChange={(e) =>
                        setNewChickenData({
                          ...newChickenData,
                          age: Number(e.target.value),
                        })
                      }
                      className="input-default w-full mt-4"
                    />
                  </div>
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      وزن:
                    </label>
                    <input
                      type="number"
                      value={newChickenData.weight}
                      onChange={(e) =>
                        setNewChickenData({
                          ...newChickenData,
                          weight: Number(e.target.value),
                        })
                      }
                      className="input-default w-full mt-4"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-x-8">
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      نرخ تخم‌گذاری:
                    </label>
                    <input
                      type="number"
                      value={newChickenData.layingRate}
                      onChange={(e) =>
                        setNewChickenData({
                          ...newChickenData,
                          layingRate: Number(e.target.value),
                        })
                      }
                      className="input-default w-full mt-4"
                    />
                  </div>
                  <div className="mb-4 w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      وضعیت سلامت:
                    </label>
                    <select
                      value={newChickenData.healthLevel}
                      onChange={(e) =>
                        setNewChickenData({
                          ...newChickenData,
                          healthLevel: Number(e.target.value),
                        })
                      }
                      className="input-default w-full mt-4"
                    >
                      <option value={0}>سالم</option>
                      <option value={1}>بیمار</option>
                      <option value={2}>بحرانی</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <button onClick={toggleModal} className="w-1/3 btn-danger-text">
                  انصراف
                </button>
                <button
                  onClick={handleSaveChicken}
                  className="w-2/3 btn btn-basic-fill"
                >
                  افزودن
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
