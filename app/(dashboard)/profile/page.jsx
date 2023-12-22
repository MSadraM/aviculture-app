/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [isFormChanged, setFormChanged] = useState(false);

  useEffect(() => {
    // Fetch initial data from the API
    fetchDataFromApi();
  }, []);

  useEffect(() => {
    // Check if all fields are filled to enable the button
    const areFieldsFilled = Object.values(formData).every(
      (value) => value !== ""
    );
    setButtonDisabled(!areFieldsFilled || !isFormChanged);
  }, [formData, isFormChanged]);

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

      // Create a temporary variable for updated form data
      const updatedFormData = {
        username: apiData.username,
        email: apiData.email,
        mobileNumber: apiData.mobileNumber,
        password: "S4fuujtgkghn",
      };

      // Update form data with API response
      setFormData(updatedFormData);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the form changed state
    setFormChanged(true);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      // Replace 'API_SUBMIT_URL' with the actual API endpoint for submitting data
      const repsonse2 = await axios.put(
        "http://localhost:86/api/user/edituserinfo",
        formData,
        {
          headers: {
            Authorization: `${token ? `Bearer ${token}` : null}`,
          },
        }
      );

      // Optional: Display a success message or redirect the user
      console.log("Data submitted successfully!");
      localStorage.setItem("token", repsonse2.data.data.token);

      // Reset the form changed state after successful submission
      setFormChanged(false);
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
              name="username"
              id="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              className="input-default text-left w-full peer"
              autoComplete={false}
            />
            <label
              htmlFor="username"
              className="text-gray-400 text-sm peer-focus-within:font-semibold peer-focus-within:text-gray-800"
            >
              نام کاربری :{" "}
            </label>
          </div>
          <div className="flex flex-col-reverse gap-y-3 w-full">
            <input
              name="email"
              id="email"
              type="email"
              value={formData.email}
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
              name="mobileNumber"
              id="mobileNumber"
              type="tel"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="input-default text-left w-full peer"
            />
            <label
              htmlFor="mobileNumber"
              className="text-gray-400 text-sm peer-focus-within:font-semibold peer-focus-within:text-gray-800"
            >
              شماره تلفن :
            </label>
          </div>
          <div className="hidden">
            <input
              name="password"
              id="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-default text-left w-full peer"
            />
            <label
              htmlFor="password"
              className="text-gray-400 text-sm peer-focus-within:font-semibold peer-focus-within:text-gray-800"
            >
              password{" "}
            </label>
          </div>
        </div>

        <button
          className="btn-basic-fill btn h-12"
          onClick={handleSubmit}
          // disabled={isButtonDisabled}
        >
          تأیید اطلاعات
        </button>
      </div>
    </div>
  );
}
