"use client";

const listItemClass =
  "flex items-center gap-3 bg-white/80 rounded-xl p-4 shadow hover:shadow-lg transition";
const listItemIconClass =
  "inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-2xl";

const WhatYouGetSection = () => (
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
      <li className={listItemClass}>
        <span className={listItemIconClass}>🎁</span>
        <span className="font-medium text-blue-900">
          Exclusive offers & discounts
        </span>
      </li>
      <li className={listItemClass}>
        <span className={listItemIconClass}>📊</span>
        <span className="font-medium text-blue-900">
          Personalized project dashboard
        </span>
      </li>
      <li className={listItemClass}>
        <span className={listItemIconClass}>⚡</span>
        <span className="font-medium text-blue-900">
          Priority customer support
        </span>
      </li>
      <li className={listItemClass}>
        <span className={listItemIconClass}>📦</span>
        <span className="font-medium text-blue-900">
          Easy order tracking & history
        </span>
      </li>
      <li className={listItemClass + "col-span-full sm:col-span-2"}>
        <span className={listItemIconClass}>🚀</span>
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
);

export default WhatYouGetSection;
