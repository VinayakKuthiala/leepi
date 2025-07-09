import Image from "next/image";
import AnimatedWriting from "@/components/AnimatedWriting";
import ListingCard from "../components/ListingCard";
import Caresoul from "@/components/HomeCaresoul";
import FeatureProduct from "@/components/FeatureProduct";
import { CategoryCarousel } from "@/components/ProductCategory";

export default function Home() {
  return (
    <div className="p-8">
      <AnimatedWriting
        imageSrc="/leepi_english_logo.jpg"
        text="Welcome to our creative studio – where design meets emotion"
      />
      <Caresoul />

      {/* Product Categories Section */}
      <div className="my-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Service Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of printing and design services,
            tailored to meet all your business needs.
          </p>
        </div>
        <CategoryCarousel />
      </div>

      <FeatureProduct />

      {/* What You Get Section & Sign Up Button (Elegant UI) */}
      <div className="mt-16 flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-blue-100/80 via-white to-blue-50 rounded-3xl shadow-2xl p-10 max-w-3xl mx-auto border border-blue-200 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl z-0" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl z-0" />
        <h3 className="text-3xl font-extrabold text-blue-900 mb-2 z-10 drop-shadow">
          Unlock Premium Benefits
        </h3>
        <p className="text-lg text-blue-700 mb-4 z-10">
          Sign up and elevate your creative journey with us!
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full z-10">
          <li className="flex items-center gap-3 bg-white/80 rounded-xl p-4 shadow hover:shadow-lg transition">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-2xl">
              🎁
            </span>
            <span className="font-medium text-blue-900">
              Exclusive offers & discounts
            </span>
          </li>
          <li className="flex items-center gap-3 bg-white/80 rounded-xl p-4 shadow hover:shadow-lg transition">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-2xl">
              📊
            </span>
            <span className="font-medium text-blue-900">
              Personalized project dashboard
            </span>
          </li>
          <li className="flex items-center gap-3 bg-white/80 rounded-xl p-4 shadow hover:shadow-lg transition">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-2xl">
              ⚡
            </span>
            <span className="font-medium text-blue-900">
              Priority customer support
            </span>
          </li>
          <li className="flex items-center gap-3 bg-white/80 rounded-xl p-4 shadow hover:shadow-lg transition">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-2xl">
              📦
            </span>
            <span className="font-medium text-blue-900">
              Easy order tracking & history
            </span>
          </li>
          <li className="flex items-center gap-3 bg-white/80 rounded-xl p-4 shadow hover:shadow-lg transition col-span-full sm:col-span-2">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-2xl">
              🚀
            </span>
            <span className="font-medium text-blue-900">
              Early access to new features
            </span>
          </li>
        </ul>
        <a
          href="/signup"
          className="mt-8 inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white text-xl font-bold rounded-full shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 z-10 tracking-wide drop-shadow-lg"
        >
          Sign Up Now
        </a>
      </div>
    </div>
  );
}
