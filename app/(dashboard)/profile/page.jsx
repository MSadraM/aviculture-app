/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
  });

  const [isButtonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    // Fetch initial data from the API
    fetchDataFromApi();
  }, []);

  useEffect(() => {
    // Check if all fields are filled to enable the button
    const areFieldsFilled = Object.values(formData).every(
      (value) => value !== ""
    );
    setButtonDisabled(!areFieldsFilled);
  }, [formData]);

  const fetchDataFromApi = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:86/api/user/getuserinfo",
        {
          headers: {
            Authorization: `${token ? `Bearer ${token}` : null}`,
          },
        }
      );
      const apiData = response.data.data;
      console.log("res :", response.data.data);

      // Update form data with API response
      setFormData({
        field1: apiData.username,
        field2: apiData.field2,
        field3: apiData.field3,
      });
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'API_SUBMIT_URL' with the actual API endpoint for submitting data
      await axios.post("http://localhost:86/api/Zone", formData);

      // Optional: Display a success message or redirect the user
      console.log("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      // Optional: Display an error message to the user
    }
  };

  return (
    <div className="flex flex-col justify-start items-start gap-y-16">
      <h1 className="text-3xl font-bold text-gray-800">اطلاعات کاربری</h1>
      <div className=" flex flex-col gap-y-12 w-full">
        <div className="flex gap-x-8">
          <div className="flex flex-col-reverse gap-y-3 w-full">
            <input
              name="field1"
              id="user"
              type="text"
              value={formData.field1}
              onChange={handleInputChange}
              className="input-default text-left w-full peer"
            />
            <label
              htmlFor="user"
              className="text-gray-400 text-sm peer-focus-within:font-semibold peer-focus-within:text-gray-800"
            >
              نام کاربری :{" "}
            </label>
          </div>
          <div className="flex flex-col-reverse gap-y-3 w-full">
            <input
              name="field2"
              id="email"
              type="email"
              value={formData.field2}
              onChange={handleInputChange}
              className="input-default text-left w-full peer"
            />
            <label
              htmlFor="email"
              className="text-gray-400 text-sm peer-focus-within:font-semibold peer-focus-within:text-gray-800"
            >
              ایمیل :
            </label>
          </div>
          <div className="flex  flex-col-reverse gap-y-3 w-full">
            <input
              name="field3"
              id="tel"
              type="tel"
              value={formData.field3}
              onChange={handleInputChange}
              className="input-default text-left w-full peer"
            />
            <label
              htmlFor="tel"
              className="text-gray-400 text-sm peer-focus-within:font-semibold peer-focus-within:text-gray-800"
            >
              شماره تلفن :
            </label>
          </div>
        </div>

        <button
          className="btn-basic-fill btn h-12"
          onClick={handleSubmit}
          disabled={isButtonDisabled}
        >
          تأیید اطلاعات
        </button>
      </div>
    </div>
  );
}
