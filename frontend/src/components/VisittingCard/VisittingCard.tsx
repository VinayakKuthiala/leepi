"use client";
import React, { useState } from "react";
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

  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(category.subcategory_image);

  const handleImageError = () => {
    console.log("Image failed to load, using fallback");
    setImageError(true);
    setImageSrc(
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=260&h=260&fit=crop&crop=center",
    );
  };

  console.log("category image", category.subcategory_image);
  return (
    <>
      <div className="flex flex-col md:flex-row gap-16 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 shadow-lg w-full transition-colors duration-200">
        {/* Left: Image & Title */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 gap-6 justify-center">
          <Image
            src={imageSrc}
            alt={category.subcategory_name}
            width={260}
            height={260}
            className="rounded-lg object-cover border border-gray-100 dark:border-gray-700 shadow w-full max-w-lg"
            onError={handleImageError}
          />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center md:text-left w-full">
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
                <label className="font-medium text-gray-700 dark:text-gray-200">
                  Material <span className="text-red-500">*</span>
                </label>
                <select
                  {...field}
                  className={`w-full px-4 py-3 rounded-lg border text-gray-700 dark:text-gray-200 ${
                    errors.material
                      ? "border-red-500 focus:ring-red-500 dark:border-red-400"
                      : "border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                  } outline-none focus:ring-2 focus:border-transparent transition-colors`}
                >
                  <option value="">Select Material</option>
                  {materialOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.material && (
                  <p className="text-red-600 dark:text-red-400 text-sm">
                    {String(errors.material.message)}
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
            rules={{
              required: "Matter is required",
              minLength: {
                value: 5,
                message: "Matter should be at least 5 characters",
              },
            }}
            render={({ field }) => (
              <div className="flex flex-col gap-2 w-full max-w-2xl">
                <label className="font-medium text-gray-700 dark:text-gray-200">
                  Matter <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...field}
                  className={`w-full px-4 py-3 rounded-lg border text-gray-700 dark:text-gray-200 ${
                    errors.matter
                      ? "border-red-500 focus:ring-red-500 dark:border-red-400"
                      : "border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                  } outline-none focus:ring-2 focus:border-transparent resize-none min-h-[120px] transition-colors`}
                  placeholder="Enter details to print on your card"
                ></textarea>
                {errors.matter && (
                  <p className="text-red-600 dark:text-red-400 text-sm">
                    {String(errors.matter.message)}
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
                <label className="font-medium text-gray-700 dark:text-gray-200">
                  Upload Design <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      field.onChange(file.name);
                    }
                  }}
                  className={`w-full px-4 py-3 rounded-lg border text-gray-700 dark:text-gray-200 ${
                    errors.file
                      ? "border-red-500 focus:ring-red-500 dark:border-red-400"
                      : "border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                  } outline-none focus:ring-2 focus:border-transparent transition-colors file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0 file:bg-blue-50 dark:file:bg-blue-900 file:text-blue-600 dark:file:text-blue-300
                  file:font-medium hover:file:bg-blue-100 dark:hover:file:bg-blue-800 cursor-pointer`}
                />
                {errors.file && (
                  <p className="text-red-600 dark:text-red-400 text-sm">
                    {String(errors.file.message)}
                  </p>
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
                  ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white cursor-pointer"
                  : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed "
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
                  ? "bg-black hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-900 text-white cursor-pointer"
                  : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
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
