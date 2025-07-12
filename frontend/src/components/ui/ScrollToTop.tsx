"use client";
import React from "react";

const ScrollToTop = () => {
  return (
    <div className="mt-8 text-center w-fit mx-auto">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        ↑ Back to Top
      </button>
    </div>
  );
};

export default ScrollToTop;
