"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PenTool } from "lucide-react";
import { useRef, useEffect, useState } from "react";

import { Dancing_Script } from "next/font/google";

const scriptFont = Dancing_Script({ subsets: ["latin"], weight: "400" });

interface AnimatedWritingProps {
  imageSrc: string;
  text: string;
}

const AnimatedWriting: React.FC<AnimatedWritingProps> = ({
  imageSrc,
  text,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const charRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [penPosition, setPenPosition] = useState({ x: 0, y: 0 });

  // Typing effect
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  // Update pen position based on last char
  useEffect(() => {
    if (charRef.current && containerRef.current) {
      const charRect = charRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setPenPosition({
        x: charRect.right - containerRect.left,
        y: charRect.top - containerRect.top,
      });
    }
  }, [displayedText]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6">
      {/* Writing area */}
      <div
        ref={containerRef}
        className={`relative w-full text-2xl md:text-4xl leading-relaxed font-light text-gray-800 break-words ${scriptFont.className}`}
      >
        <span className="inline-block whitespace-pre-wrap break-words">
          {displayedText.split(/(\s+)/).map((word, wordIndex, wordArray) => (
            <span key={wordIndex} className="inline-block">
              {word.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  ref={
                    wordIndex === wordArray.length - 1 &&
                    charIndex === word.length - 1
                      ? charRef
                      : null
                  }
                  className="inline"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          ))}
        </span>

        {/* Feather pen */}
        {currentIndex < text.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [0, 5, -3, 2, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="absolute"
            style={{ left: `${penPosition.x}px`, top: `${penPosition.y}px` }}
          >
            <PenTool size={20} className="text-indigo-600" />
          </motion.div>
        )}
      </div>
      {/* Image */}

      <div className="w-40 h-24 relative rounded-lg shadow-md overflow-hidden">
        <Image src={imageSrc} alt="Left Image" fill className="object-cover" />
      </div>
    </div>
  );
};

export default AnimatedWriting;
