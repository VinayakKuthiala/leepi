"use client";
import React, { useState } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("signup");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const { handleSubmit, control, reset } = useForm({ mode: "onChange" });
  const { isValid, errors } = useFormState({ control });

  // Reset form when switching tabs
  const handleTabChange = (tab: "login" | "signup") => {
    setActiveTab(tab);
    reset();
  };

  const onSubmit = async (formData: any) => {
    try {
      const formdata = new FormData();

      if (activeTab === "login") {
        formdata.append("name", formData.name);
        formdata.append("mobile", formData.mobile);
        formdata.append("email", formData.email);
        formdata.append("password", formData.password);

        //API call for login
        await new Promise((res) => setTimeout(res, 1000));
        toast.success("Login successful! Welcome back.");
      } else {
        formdata.append("name", formData.name);
        formdata.append("mobile", formData.mobile);
        formdata.append("email", formData.email);
        formdata.append("password", formData.password);
        formdata.append("retypePassword", formData.retypePassword);

        //API call for sign up
        await new Promise((res) => setTimeout(res, 1000));
        toast.success("Sign up successful! Please verify your mobile number.");
        setShowOtpModal(true);
      }
    } catch (error) {
      toast.error(`Failed to ${activeTab}. Please try again.`);
    }
  };

  // Handle OTP input change
  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  // Handle OTP verification
  const handleOtpVerify = () => {
    const otpCode = otpValues.join("");
    if (otpCode.length === 6) {
      toast.success("OTP verified successfully! Account created.");
      setShowOtpModal(false);
      setOtpValues(["", "", "", "", "", ""]);
      reset();
    } else {
      toast.error("Please enter a valid 6-digit OTP.");
    }
  };

  // Handle back from OTP
  const handleOtpBack = () => {
    setShowOtpModal(false);
    setOtpValues(["", "", "", "", "", ""]);
  };

  const inputClassName =
    "w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-300 text-black";

  return (
    <>
      <div className="flex flex-col gap-6 bg-white border border-gray-200 p-8 rounded-xl shadow-lg max-w-lg mx-auto my-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2 text-center">
          It's fun getting to know each other
        </h2>

        {/* Tab Navigation */}
        <div className="flex gap-2 p-1 bg-gray-100 rounded-full mb-6">
          <button
            onClick={() => handleTabChange("login")}
            className={`flex-1 font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform ${
              activeTab === "login"
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg scale-105"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => handleTabChange("signup")}
            className={`flex-1 font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform ${
              activeTab === "signup"
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg scale-105"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Name Field - Both Login and Signup */}
          <Controller
            name="name"
            control={control}
            defaultValue={""}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-black">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...field}
                  type="text"
                  placeholder="Your Name"
                  className={inputClassName}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    {errors.name.message as string}
                  </span>
                )}
              </div>
            )}
          />

          {/* Mobile Number Field - Both Login and Signup */}
          <Controller
            name="mobile"
            control={control}
            defaultValue={""}
            rules={{
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit mobile number",
              },
            }}
            render={({ field }) => (
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-black">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  {...field}
                  type="tel"
                  placeholder="1234567890"
                  className={inputClassName}
                />
                {errors.mobile && (
                  <span className="text-red-500 text-xs">
                    {errors.mobile.message as string}
                  </span>
                )}
              </div>
            )}
          />

          {/* Email Field - Both Login and Signup */}
          <Controller
            name="email"
            control={control}
            defaultValue={""}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-black">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  {...field}
                  type="email"
                  placeholder="you@email.com"
                  className={inputClassName}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message as string}
                  </span>
                )}
              </div>
            )}
          />

          {/* Password Field - Both Login and Signup */}
          <Controller
            name="password"
            control={control}
            defaultValue={""}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            render={({ field }) => (
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-black">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  {...field}
                  type="password"
                  placeholder="Password"
                  className={inputClassName}
                />
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    {errors.password.message as string}
                  </span>
                )}
              </div>
            )}
          />

          {/* Retype Password Field - Only for Signup */}
          {activeTab === "signup" && (
            <Controller
              name="retypePassword"
              control={control}
              defaultValue={""}
              rules={{
                required: "Please confirm your password",
                validate: (value, formValues) =>
                  value === formValues.password || "Passwords do not match",
              }}
              render={({ field }) => (
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-black">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...field}
                    type="password"
                    placeholder="Confirm Password"
                    className={inputClassName}
                  />
                  {errors.retypePassword && (
                    <span className="text-red-500 text-xs">
                      {errors.retypePassword.message as string}
                    </span>
                  )}
                </div>
              )}
            />
          )}

          {/* Forgot Password Link - Only for Login */}
          {activeTab === "login" && (
            <div className="text-center">
              <button
                type="button"
                className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors duration-200"
                onClick={() =>
                  toast.info("Forgot password functionality coming soon!")
                }
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-colors duration-200 ${
              isValid
                ? "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {activeTab === "login" ? "Login" : "Sign Up"}{" "}
          </button>
        </form>
      </div>

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                Verify Your Mobile
              </h3>
              <p className="text-gray-600">
                We've sent a 6-digit verification code to your mobile number
              </p>
            </div>

            {/* OTP Input Fields */}
            <div className="flex justify-center gap-3 mb-6">
              {otpValues.map((value, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={value}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !value && index > 0) {
                      const prevInput = document.getElementById(
                        `otp-${index - 1}`,
                      );
                      prevInput?.focus();
                    }
                  }}
                  className=" text-black w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                  maxLength={1}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleOtpBack}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleOtpVerify}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-600 transition-colors"
              >
                Verify OTP
              </button>
            </div>

            {/* Resend Link */}
            <div className="text-center mt-4">
              <button
                onClick={() => toast.info("OTP resent successfully!")}
                className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors"
              >
                Didn't receive the code? Resend
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
