"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import categoryData from "@/components/ProductCategoryDetail/categoryDetail.json";
import { Breadcrumbs } from "@/components/Breadcrumbs";

// Type definitions
type Product = {
  product_name: string;
  product_image: string;
  product_link: string;
};

type Subcategory = {
  subcategory_name: string;
  subcategory_image: string;
  subcategory_link: string;
  subcategory_products?: Product[];
};

type Category = {
  id: number;
  category_name: string;
  subcategories: Subcategory[];
};

export default function CategoryPage() {
  const params = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Decode the slug to handle URL-encoded characters
    const slug = params?.slug ? decodeURIComponent(params.slug as string) : "";

    // Find the category with the matching name (case-insensitive)
    const foundCategory = categoryData.categories.find(
      (cat) => cat.category_name.toLowerCase() === slug.toLowerCase()
    );

    setCategory(foundCategory || null);
    setLoading(false);
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -z-10 -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-100 rounded-full opacity-50 mix-blend-multiply animate-pulse"></div>
          <div
            className="absolute -z-10 -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-200 to-indigo-100 rounded-full opacity-50 mix-blend-multiply animate-pulse"
            style={{ animationDelay: "500ms" }}
          ></div>

          {/* Loading animation */}
          <div className="flex flex-col items-center backdrop-blur-sm bg-white/30 px-12 py-16 rounded-2xl shadow-xl">
            <div className="flex space-x-2 mb-8">
              <div className="w-4 h-4 rounded-full bg-purple-600 animate-bounce"></div>
              <div
                className="w-4 h-4 rounded-full bg-pink-500 animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-4 h-4 rounded-full bg-indigo-500 animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 bg-white/50 backdrop-blur-sm rounded-lg w-60 mb-4"></div>
              <div className="h-8 bg-white/50 backdrop-blur-sm rounded-lg w-40"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="relative max-w-md w-full backdrop-blur-sm bg-white/70 px-8 py-12 rounded-2xl shadow-xl text-center">
          {/* Decorative elements */}
          <div className="absolute -z-10 -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-100 rounded-full opacity-50 mix-blend-multiply"></div>
          <div className="absolute -z-10 -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-200 to-indigo-100 rounded-full opacity-50 mix-blend-multiply"></div>

          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Category Not Found
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            We couldn't find the category you're looking for. It may have been
            moved or doesn't exist.
          </p>
          <Link
            prefetch={true}
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-300 transition-all duration-300 transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-rose-50">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden z-0 opacity-40 pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full -top-40 -left-20 mix-blend-multiply"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-r from-yellow-200 to-amber-200 rounded-full -top-40 right-20 mix-blend-multiply"></div>
      </div>

      {/* Breadcrumbs */}
      <div className="relative backdrop-blur-sm bg-white/80 shadow-sm z-10">
        <div className="container mx-auto py-4 px-4 md:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: category.category_name, href: "#" },
            ]}
          />
        </div>
      </div>

      {/* Category Header */}
      <header className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-y-0 -inset-x-1/2 w-[200%] bg-[radial-gradient(circle_at_top_left,_transparent_0%,_white_25%)] mix-blend-overlay"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              {category.category_name}
            </span>
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto text-lg">
            Explore our premium collection of{" "}
            {category.category_name.toLowerCase()} designed for professionals
          </p>
        </div>
      </header>

      {/* Subcategories and Products */}
      <main className="container mx-auto py-16 px-4 md:px-8 relative z-10">
        {category.subcategories.map((subcategory, index) => (
          <section
            key={subcategory.subcategory_name}
            className={`mb-24 ${
              index > 0 ? "pt-12 border-t border-gray-200/50" : ""
            } relative`}
          >
            {/* Decorative elements */}
            <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full opacity-30 mix-blend-multiply filter blur-xl"></div>

            {/* Subcategory Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 group">
              <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur p-2 transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-1">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-200">
                  <Image
                    src={subcategory.subcategory_image}
                    alt={subcategory.subcategory_name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="md:mt-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {subcategory.subcategory_name}
                </h2>
                <p className="mt-2 text-gray-600 max-w-2xl">
                  Premium quality {subcategory.subcategory_name.toLowerCase()}{" "}
                  crafted with attention to detail and modern design principles.
                </p>
                <Link
                  prefetch={true}
                  href={subcategory.subcategory_link}
                  className="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-200 transition-all duration-300"
                >
                  <span>View All {subcategory.subcategory_name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Products Grid - 3 items per row */}
            {subcategory.subcategory_products &&
            subcategory.subcategory_products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
                {subcategory.subcategory_products.map((product, idx) => (
                  <Link
                    prefetch={true}
                    href={product.product_link}
                    key={product.product_name}
                    className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="p-8 flex flex-col items-center">
                      <div className="w-36 h-36 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center mb-6 overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
                        <Image
                          src={product.product_image}
                          alt={product.product_name}
                          width={120}
                          height={120}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 text-center group-hover:text-purple-600 transition-colors duration-300">
                        {product.product_name}
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="text-sm px-4 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
                          View Details
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-12 text-center shadow-inner">
                <div className="text-5xl mb-4">✨</div>
                <p className="text-gray-600 text-lg">
                  Products for this category are coming soon!
                </p>
                <p className="text-purple-500 mt-2">
                  Check back later for exciting new additions.
                </p>
              </div>
            )}
          </section>
        ))}
      </main>

      {/* Bottom CTA */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="max-w-lg mx-auto mb-8 text-white/90">
            Contact us today to discuss your{" "}
            {category.category_name.toLowerCase()} needs and get a personalized
            quote.
          </p>
          <Link
            prefetch={true}
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 transform hover:scale-105"
          >
            <span>Contact Us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
