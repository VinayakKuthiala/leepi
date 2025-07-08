"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import categoriesData from "./Category.json"

interface Subcategory {
  id: number
  title: string
  image: string
}

interface Category {
  id: number
  title: string
  image: string
  subcategories: Subcategory[]
}

const CategoryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const categories: Category[] = categoriesData.categories

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    timerRef.current = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isAutoPlaying])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length)
      setIsTransitioning(false)
    }, 700)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length)
      setIsTransitioning(false)
    }, 700)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setIsAutoPlaying(false)

    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
      setTimeout(() => setIsAutoPlaying(true), 10000)
    }, 700)
  }

  const goToPrevious = () => {
    prevSlide()
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    nextSlide()
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  // Render subcategories based on count
  const renderSubcategories = (subcategories: Subcategory[]) => {
    const count = subcategories.length

    switch (count) {
      case 2:
        return (
          <div className="grid grid-rows-2 gap-2 h-full">
            {subcategories.map((subcat, index) => (
              <div key={subcat.id} className="relative group cursor-pointer overflow-hidden rounded-lg">
                <Image
                  src={subcat.image}
                  alt={subcat.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <h4 className="text-white text-sm font-semibold truncate">{subcat.title}</h4>
                </div>
              </div>
            ))}
          </div>
        )

      case 3:
        return (
          <div className="grid grid-rows-2 gap-2 h-full">
            {/* Top half - single image */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <Image
                src={subcategories[0].image}
                alt={subcategories[0].title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <h4 className="text-white text-sm font-semibold truncate">{subcategories[0].title}</h4>
              </div>
            </div>
            {/* Bottom half - two images */}
            <div className="grid grid-cols-2 gap-2">
              {subcategories.slice(1).map((subcat) => (
                <div key={subcat.id} className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <Image
                    src={subcat.image}
                    alt={subcat.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-1 left-1 right-1">
                    <h4 className="text-white text-xs font-semibold truncate">{subcat.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
            {subcategories.map((subcat) => (
              <div key={subcat.id} className="relative group cursor-pointer overflow-hidden rounded-lg">
                <Image
                  src={subcat.image}
                  alt={subcat.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-1 left-1 right-1">
                  <h4 className="text-white text-xs font-semibold truncate">{subcat.title}</h4>
                </div>
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  const renderCategoryLayout = (category: Category) => {
    const hasSubcategories = category.subcategories.length > 0

    if (!hasSubcategories) {
      // Full width category image with title overlay
      return (
        <div className="relative h-full overflow-hidden rounded-lg">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">{category.title}</h2>
            {/* <p className="text-white/90 text-lg">Explore our complete range</p> */}
          </div>
        </div>
      )
    }

    // Split layout - category on left, subcategories on right
    return (
      <div className="grid grid-cols-2 gap-4 h-full">
        {/* Left side - Main category */}
        <div className="relative group cursor-pointer overflow-hidden rounded-lg">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-1">{category.title}</h2>
            <p className="text-white/90 text-sm">{category.subcategories.length} subcategories</p>
          </div>
        </div>

        {/* Right side - Subcategories */}
        <div className="h-full">
          {renderSubcategories(category.subcategories)}
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Main Carousel Container */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        {/* Category Container with Sliding Effect */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {categories.map((category, index) => (
            <div key={category.id} className="flex-shrink-0 w-full h-full p-4">
              {renderCategoryLayout(category)}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div
          className="absolute left-2 md:left-4 top-1/2 z-30 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full w-10 h-10 md:w-12 md:h-12 shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center cursor-pointer"
          onClick={goToPrevious}
          style={{
            opacity: isTransitioning ? 0.5 : 1,
            pointerEvents: isTransitioning ? "none" : "auto",
          }}
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </div>

        <div
          className="absolute right-2 md:right-4 top-1/2 z-30 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full w-10 h-10 md:w-12 md:h-12 shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center cursor-pointer"
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
        {categories.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? "w-6 h-2 bg-blue-500 rounded-full"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full"
            }`}
            onClick={() => goToSlide(index)}
            style={{
              pointerEvents: isTransitioning ? "none" : "auto",
            }}
          />
        ))}
      </div>

      {/* Category Title Bar */}
      {/* Showing this for future design reference, currently commented out */}
      {/* <div className="bg-gray-50 px-6 py-3 border-t">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {categories[currentSlide]?.title}
            </h3>
            <p className="text-sm text-gray-600">
              {categories[currentSlide]?.subcategories.length > 0 
                ? `${categories[currentSlide].subcategories.length} subcategories available`
                : "Complete service category"
              }
            </p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
            View All
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default CategoryCarousel
