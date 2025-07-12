"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const carouselImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "Professional Business Cards - Premium printing services for your brand identity",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern Office Printing - High-quality document and marketing material printing",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "Creative Design Studio - Professional graphic design and printing solutions",
  },
];

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      setIsTransitioning(false);
    }, 700); // Match the CSS transition duration
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
      );
      setIsTransitioning(false);
    }, 700);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setIsAutoPlaying(false);

    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
      // Resume auto-play after 10 seconds of inactivity
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }, 700);
  };

  const goToPrevious = () => {
    prevSlide();
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    nextSlide();
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Main Carousel Container */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        {/* Image Container with Sliding Effect */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full relative">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div
          className="absolute left-2 md:left-4 top-1/2 z-30 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full w-10 h-10 md:w-12 md:h-12 shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={goToPrevious}
          style={{
            opacity: isTransitioning ? 0.5 : 1,
            pointerEvents: isTransitioning ? "none" : "auto",
          }}
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </div>

        <div
          className="absolute right-2 md:right-4 top-1/2 z-30 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full w-10 h-10 md:w-12 md:h-12 shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={goToNext}
          style={{
            opacity: isTransitioning ? 0.5 : 1,
            pointerEvents: isTransitioning ? "none" : "auto",
          }}
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 py-4 bg-white">
        {carouselImages.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? "w-6 h-2 bg-purple-500 rounded-full"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full"
            }`}
            onClick={() => goToSlide(index)}
            style={{
              pointerEvents: isTransitioning ? "none" : "auto",
            }}
          />
        ))}
      </div>
    </div>
  );
}
