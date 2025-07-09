"use client";
import React from "react";
import { Controller, useForm, useFormState } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VisittingCardsData from "./VisittingCards.json";

const category = VisittingCardsData.categories[0].subcategories[0];
const materialOptions = [
  { label: "Standard", value: "standard" },
  { label: "Premium", value: "premium" },
  { label: "Textured", value: "textured" },
];

const VisittingCard = () => {
  const router = useRouter();
  const { handleSubmit, control, setValue } = useForm({ mode: "onChange" });
  const { errors, isValid } = useFormState({ control });

  const onSubmit = async (data) => {
    toast.success("Submitted! (Demo only)");
  };

  const handleRedirect = () => {
    router.push("/signup");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-16 bg-white border border-gray-200 p-8 shadow-lg w-full ">
        {/* Left: Image & Title */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 gap-6 justify-center">
          <Image
            src={category.subcategory_image}
            alt={category.subcategory_name}
            width={260}
            height={260}
            className="rounded-lg object-cover border border-gray-100 shadow w-full max-w-lg"
          />
          <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left w-full">
            {category.subcategory_name}
          </h2>
        </div>
        {/* Right: Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 flex flex-col gap-6 items-center"
        >
          {/* Material Dropdown */}
          <Controller
            name="material"
            control={control}
            defaultValue=""
            rules={{ required: "Please select a material" }}
            render={({ field }) => (
              <div className="flex flex-col gap-2 w-full max-w-2x">
                <label className="font-medium text-gray-700">
                  Material <span className="text-red-500">*</span>
                </label>
                <select
                  {...field}
                  className="text-black placeholder:text-gray-500 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                >
                  <option value="">Select Material</option>
                  {materialOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.material && (
                  <p className="text-red-600 text-sm">
                    {errors.material.message}
                  </p>
                )}
              </div>
            )}
          />
          {/* Matter Input */}
          <Controller
            name="matter"
            control={control}
            defaultValue=""
            rules={{ required: "Matter is required" }}
            render={({ field }) => (
              <div className="flex flex-col gap-2 w-full max-w-2xl">
                <label className="font-medium text-gray-700">
                  Matter <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...field}
                  rows={3}
                  placeholder="Enter the text to be printed on the card"
                  className="text-black placeholder:text-gray-500 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                />
                {errors.matter && (
                  <p className="text-red-600 text-sm">
                    {errors.matter.message}
                  </p>
                )}
              </div>
            )}
          />
          {/* File Upload */}
          <Controller
            name="file"
            control={control}
            rules={{
              required: "Please upload a file",
              validate: (fileList) => {
                if (!fileList || fileList.length === 0)
                  return "Please upload a file";
                const file = fileList[0];
                if (file.type.startsWith("video/"))
                  return "Video files are not allowed";
                return true;
              },
            }}
            render={({ field }) => (
              <div className="flex flex-col gap-2 w-full max-w-2xl">
                <label className="font-medium text-gray-700">
                  Upload File <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"
                  onChange={(e) => field.onChange(e.target.files)}
                  className=" text-black placeholder:text-gray-500 w-full border border-gray-300 rounded-lg p-2 bg-white"
                />
                {errors.file && (
                  <p className="text-red-600 text-sm">{errors.file.message}</p>
                )}
              </div>
            )}
          />
          {/* Buttons */}
          <div className="flex gap-4 mt-2 w-full max-w-2xl">
            <button
              type="button"
              onClick={handleRedirect}
              className={`flex-1 font-semibold py-2 rounded-lg shadow transition-colors duration-200  ${
                isValid
                  ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed "
              }`}
              disabled={!isValid}
            >
              Add to Cart
            </button>
            <button
              type="button"
              onClick={handleRedirect}
              className={`flex-1 font-semibold py-2 rounded-lg shadow transition-colors duration-200  ${
                isValid
                  ? "bg-black hover:bg-gray-900 text-white cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!isValid}
            >
              Buy Now
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default VisittingCard;
