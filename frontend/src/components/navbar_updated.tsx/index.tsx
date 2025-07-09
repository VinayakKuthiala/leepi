"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import CategoriesData from "./categories.json";

const Navbar_Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(
    null
  );

  console.log("hoveredSubcategory", hoveredSubcategory);

  // Mobile accordion state
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(
    null
  );
  const [mobileSubcategoryOpen, setMobileSubcategoryOpen] = useState<
    string | null
  >(null);

  return (
    <nav className="bg-white shadow-md px-6 py-3 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2 flex space-x-1">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
          {/* <span className="font-bold text-lg text-gray-800">YourCompany</span> */}
          <Link href="/">
            <Image
              src="/leepi_hindi_logo_trimmed.jpg"
              alt="leepi Logo"
              width={130}
              height={0}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Menu items */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium font-sans">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 md:hidden">
          <div className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-lg p-4 overflow-y-auto transition-transform duration-300">
            <button
              className="mb-4 text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col gap-2">
              {CategoriesData?.categories?.map((category) => (
                <div key={category.category_name}>
                  <button
                    className="w-full flex items-center justify-between py-2 px-2 text-left text-base font-medium text-gray-800 hover:bg-gray-100 rounded"
                    onClick={() =>
                      setMobileCategoryOpen(
                        mobileCategoryOpen === category?.category_name
                          ? null
                          : category?.category_name
                      )
                    }
                  >
                    {category?.category_name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        mobileCategoryOpen === category?.category_name
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                  {mobileCategoryOpen === category?.category_name && (
                    <div className="pl-4 border-l border-gray-200">
                      {category?.subcategories?.map((subcategory) => (
                        <div key={subcategory?.subcategory_name}>
                          <button
                            className="w-full flex items-center justify-between py-2 px-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded"
                            onClick={() =>
                              setMobileSubcategoryOpen(
                                mobileSubcategoryOpen ===
                                  `${category?.category_name}__${subcategory?.subcategory_name}`
                                  ? null
                                  : `${category?.category_name}__${subcategory?.subcategory_name}`
                              )
                            }
                          >
                            {subcategory?.subcategory_name}
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${
                                mobileSubcategoryOpen ===
                                `${category?.category_name}__${subcategory?.subcategory_name}`
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                          {mobileSubcategoryOpen ===
                            `${category?.category_name}__${subcategory?.subcategory_name}` && (
                            <div className="pl-4 border-l border-gray-100">
                              {subcategory?.subcategory_products?.map(
                                (product) => (
                                  <Link
                                    key={product?.product_name}
                                    href={product?.product_link}
                                    className="block py-2 px-2 text-xs text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {product?.product_name}
                                  </Link>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
      {/* Categories Dropdown */}
      {!isOpen && (
        <div className="mt-4 relative">
          <div className="flex justify-center items-center">
            {CategoriesData?.categories?.map((category) => (
              <div
                key={category?.category_name}
                className="relative group"
                onMouseEnter={() => setHoveredCategory(category?.category_name)}
                onMouseLeave={() => {
                  setHoveredCategory(null);
                  setHoveredSubcategory(null);
                }}
              >
                {/* Category Button */}
                <button className="flex items-center gap-1 px-6 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">
                  {category?.category_name}
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                {/* Full Width Subcategories Dropdown */}
                {hoveredCategory === category?.category_name && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen bg-white border-t border-gray-200 shadow-lg z-50 py-8 overflow-visible">
                    <div className="max-w-7xl mx-auto px-6 overflow-visible">
                      <div className="flex justify-between items-start gap-8 overflow-visible z-50 relative">
                        {category?.subcategories?.map((subcategory) => (
                          <div
                            key={subcategory?.subcategory_name}
                            className="flex-1 text-center relative overflow-visible"
                            onMouseEnter={() =>
                              setHoveredSubcategory(
                                subcategory?.subcategory_name
                              )
                            }
                            onMouseLeave={() => setHoveredSubcategory(null)}
                          >
                            <Link
                              href={subcategory?.subcategory_link}
                              className="block group hover:bg-gray-50 rounded-lg p-4 transition-colors duration-200"
                            >
                              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                                <Image
                                  src={subcategory?.subcategory_image}
                                  alt={subcategory?.subcategory_name}
                                  width={64}
                                  height={64}
                                  className="object-cover"
                                />
                              </div>
                              <h4 className="text-sm font-medium text-gray-900 mb-1">
                                {subcategory?.subcategory_name}
                              </h4>
                              <p className="text-xs text-gray-500">
                                {subcategory?.subcategory_products?.length}{" "}
                                product
                                {subcategory?.subcategory_products?.length !== 1
                                  ? "s"
                                  : ""}
                              </p>
                            </Link>

                            {/* Products List on Hover */}
                            {hoveredSubcategory ===
                              subcategory?.subcategory_name &&
                              subcategory?.subcategory_products?.length > 0 && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-full z-[999] mt-0 bg-white rounded-lg p-4 border border-gray-200 shadow-2xl min-w-[220px] max-w-xs overflow-visible flex flex-col items-start group/dropdown pointer-events-auto">
                                  {/* Arrow/connector */}
                                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45 z-0 shadow-md pointer-events-none"></div>
                                  <h5 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">
                                    Products
                                  </h5>
                                  <div className="space-y-2 w-full">
                                    {subcategory?.subcategory_products?.map(
                                      (product) => (
                                        <Link
                                          key={product?.product_name}
                                          href={product?.product_link}
                                          style={{ color: "black" }}
                                          className="flex items-center gap-2 text-sm text-black hover:text-blue-600 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50 w-full"
                                        >
                                          <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                                            <Image
                                              src={product?.product_image}
                                              alt={product?.product_name}
                                              width={24}
                                              height={24}
                                              className="object-cover"
                                            />
                                          </div>
                                          <span className="text-gray-900 truncate">
                                            {product?.product_name}
                                          </span>
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar_Products;
