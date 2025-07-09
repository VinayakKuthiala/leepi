"use client";
import React from "react";
import { Controller, useForm, useFormState } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { handleSubmit, control } = useForm({ mode: "onChange" });
  const { isValid, errors } = useFormState({ control });

  const onSubmit = async (formData: any) => {
    try {
        const formdata= new FormData();
        formdata.append("name", formData.name);
        formdata.append("email", formData.email);
        formdata.append("password", formData.password);


        //API call for sign up
      await new Promise((res) => setTimeout(res, 1000));
      toast.success("Sign up successful! Welcome aboard.");
    } catch (error) {
      toast.error("Failed to sign up. Please try again.");
    }
  };


  const inputClassName="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-300 text-black"
  return (
    <div className="flex flex-col gap-6 bg-white border border-gray-200 p-8 rounded-xl shadow-lg max-w-lg mx-auto my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Create your free account
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 ">
        <Controller
          name="name"
          control={control}
          defaultValue={""}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <div className="flex flex-col gap-1">
              <label className="font-medium text-black">
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
              <label className="font-medium text-black">
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
              <label className="font-medium text-black">
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
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-3 rounded-lg font-semibold text-white transition-colors duration-200 ${
            isValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Sign Up
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
