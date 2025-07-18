"use client";

const listItemClass =
  "flex items-center gap-3 bg-white/80 dark:bg-gray-800/90 rounded-xl p-4 shadow hover:shadow-lg transition";
const listItemIconClass =
  "inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-2xl";

const benefitsData = [
  {
    id: 1,
    icon: "🎁",
    text: "Exclusive offers & discounts",
    isFullWidth: false,
  },
  {
    id: 2,
    icon: "📊",
    text: "Personalized project dashboard",
    isFullWidth: false,
  },
  {
    id: 3,
    icon: "⚡",
    text: "Priority customer support",
    isFullWidth: false,
  },
  {
    id: 4,
    icon: "📦",
    text: "Easy order tracking & history",
    isFullWidth: false,
  },
  {
    id: 5,
    icon: "🚀",
    text: "Early access to new features",
    isFullWidth: true,
  },
];

const WhatYouGetSection = () => (
  <div className=" md:w-[90vw] mt-8 md:mt-12 lg:mt-16 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 bg-gradient-to-br from-blue-100/80 via-white to-blue-50 rounded-xl sm:rounded-2xl  md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8  lg:p-10 mx-auto border border-blue-200 relative overflow-hidden">
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200/30 dark:bg-blue-700/20 rounded-full blur-2xl z-0" />
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/20 dark:bg-blue-500/20 rounded-full blur-2xl z-0" />
    <h3 className="text-3xl lg:text-4xl font-extrabold text-blue-900 dark:text-white mb-2 z-10 drop-shadow">
      Unlock Premium Benefits
    </h3>
    <p className=" text-base md:text-lg lg:text-xl text-blue-700 dark:text-blue-400 mb-4 z-10">
      Sign up and elevate your creative journey with us!
    </p>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full z-10">
      {benefitsData.map((benefit) => (
        <li
          key={benefit.id}
          className={`${listItemClass} ${
            benefit.isFullWidth ? "col-span-full sm:col-span-2" : ""
          }`}
        >
          <span className={listItemIconClass}>{benefit.icon}</span>
          <span className="font-medium lg:text-lg text-blue-900 dark:text-white">
            {benefit.text}
          </span>
        </li>
      ))}
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
