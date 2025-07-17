"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import CategoriesData from "./categories.json";
// import ThemeToggle from "@/components/ThemeToggle";

const Navbar_Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(
    null
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 450);
    };
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  console.log("hoveredSubcategory", hoveredSubcategory);

  // Mobile accordion state
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(
    null
  );
  const [mobileSubcategoryOpen, setMobileSubcategoryOpen] = useState<
    string | null
  >(null);

  const MenuArr = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Contact", link: "/contact" },
  ];
  return (
    <nav
      ref={navRef}
      className="bg-white dark:bg-gray-800 shadow-md px-6 py-3 relative z-40 transition-colors duration-200"
    >
      <div className="flex md:hidden space-x-6 text-gray-700 dark:text-gray-200 font-semibold text-base antialiased tracking-normal font-sans mt-3 justify-end pb-4">
        {MenuArr.map((item, idx) => {
          return (
            <Link
              prefetch={true}
              key={idx}
              className="hover:text-gray-900 dark:hover:text-white"
              href={item.link}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="w-full mx-auto flex items-center justify-between">
        {/* Theme indicator - for debugging */}
        {/* <div className="hidden sm:flex absolute top-0 right-0 bg-green-500 dark:bg-purple-500 text-white text-xs px-2 py-1 rounded-bl">
          Theme Mode: <span className="dark:hidden">LIGHT</span><span className="hidden dark:inline">DARK</span>
        </div> */}

        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2 flex space-x-1">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 dark:bg-white bg-black rounded-full"></div>
          </div>
          {/* <span className="font-bold text-lg text-gray-800">YourCompany</span> */}
          <Link prefetch={true} href="/">
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
        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium font-sans">
          {MenuArr.map((item, idx) => {
            return (
              <Link
                prefetch={true}
                key={idx}
                className="font-medium text-base hover:text-gray-900 dark:hover:text-white transition-all duration-300 ease-in-out hover:scale-105 antialiased tracking-wide relative group"
                href={item.link}
              >
                {item.title}{" "}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </div>

        {/* Theme toggle and mobile menu */}
        <div className="flex items-center gap-4 md:hidden">
          {/* <ThemeToggle /> */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 md:hidden">
          <div className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white dark:bg-gray-800 shadow-lg p-4 overflow-y-auto transition-transform duration-300">
            <button
              className="mb-4 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            {/* <div className="flex items-center gap-2 mb-6">
              <ThemeToggle />
              <span className="text-sm text-gray-600 dark:text-gray-300">Toggle Theme</span>
            </div> */}
            <nav className="flex flex-col gap-2">
              {CategoriesData?.categories?.map((category) => (
                <div key={category.category_name}>
                  <button
                    className="w-full flex items-center justify-between py-2 px-2 text-left text-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded antialiased tracking-wide transition-all duration-200"
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
                    <div className="pl-4 border-l border-gray-200 dark:border-gray-700">
                      {category?.subcategories?.map((subcategory) => (
                        <div key={subcategory?.subcategory_name}>
                          <button
                            className="w-full flex items-center justify-between py-2 px-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded"
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
                            <div className="pl-4 border-l border-gray-100 dark:border-gray-700 space-y-2">
                              {subcategory?.subcategory_products?.map(
                                (product) => (
                                  <div
                                    className=" flex gap-1"
                                    key={product?.product_name}
                                  >
                                    <Image
                                      src={product?.product_image}
                                      alt={product?.product_name}
                                      width={36}
                                      height={24}
                                      className="object-cover flex-shrink-0"
                                    />

                                    <Link
                                      prefetch={true}
                                      href={product?.product_link}
                                      className="block py-2 px-2 text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {product?.product_name}
                                    </Link>
                                  </div>
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
      {!isMobile && (
        <div className="mt-4 relative w-full">
          <div className="flex justify-center items-center min-w-full">
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
                <button className="flex items-center gap-1 px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors duration-300 antialiased tracking-wide group-hover:scale-105">
                  {category?.category_name}
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                {/* Full Width Subcategories Dropdown */}
                {hoveredCategory === category?.category_name && (
                  <div
                    style={{ top: navHeight - 12 }}
                    className="fixed  left-0 w-screen bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50 py-8 overflow-visible transition-all duration-500 ease-in-out animate-fade-slide"
                  >
                    <div className="w-full mx-auto px-6 overflow-visible">
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
                              prefetch={true}
                              href={subcategory?.subcategory_link}
                              className="block group hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-4 transition-colors duration-200"
                            >
                              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                                <Image
                                  src={subcategory?.subcategory_image}
                                  alt={subcategory?.subcategory_name}
                                  width={64}
                                  height={64}
                                  className="object-cover"
                                />
                              </div>
                              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 antialiased tracking-wide">
                                {subcategory?.subcategory_name}
                              </h4>
                              <p className="text-xs text-gray-500 dark:text-gray-400 antialiased">
                                {subcategory?.subcategory_products?.length}{" "}
                                {subcategory?.subcategory_products?.length &&
                                  "Product"}
                                {subcategory?.subcategory_products?.length > 1
                                  ? "s"
                                  : ""}
                              </p>
                            </Link>

                            {/* Products List on Hover */}
                            {hoveredSubcategory ===
                              subcategory?.subcategory_name &&
                              subcategory?.subcategory_products?.length > 0 && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-full z-[999] mt-0 bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-2xl min-w-[220px] max-w-xs overflow-visible flex flex-col items-start group/dropdown pointer-events-auto transition-all duration-500 ease-in-out animate-fade-slide">
                                  {/* Arrow/connector */}
                                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 rotate-45 z-0 shadow-md pointer-events-none transition-colors duration-200"></div>
                                  <h5 className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide mb-3">
                                    Products
                                  </h5>
                                  <div className="space-y-2 w-full">
                                    {subcategory?.subcategory_products?.map(
                                      (product) => (
                                        <Link
                                          prefetch={true}
                                          key={product?.product_name}
                                          href={product?.product_link}
                                          style={{ color: "black" }}
                                          className="flex items-center gap-2 text-sm text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50 dark:hover:bg-gray-700 w-full"
                                        >
                                          <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center overflow-hidden">
                                            <Image
                                              src={product?.product_image}
                                              alt={product?.product_name}
                                              width={24}
                                              height={24}
                                              className="object-cover"
                                            />
                                          </div>
                                          <span className="text-gray-900 dark:text-gray-100 truncate">
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
