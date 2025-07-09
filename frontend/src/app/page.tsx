import Image from "next/image";
import AnimatedWriting from "@/components/AnimatedWriting";
import ListingCard from "../components/ListingCard";
import Caresoul from "@/components/HomeCaresoul";
import FeatureProduct from "@/components/FeatureProduct";
import { CategoryCarousel } from "@/components/ProductCategory";
import WhatYouGetSection from "@/components/WhatYouGetSection";

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
      <WhatYouGetSection />
    </div>
  );
}
