import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function () {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const companies = [
    "Paytient",
    "Outschool",
    "hook",
    "baton",
    "Casper",
    "Kickstarter",
    "Etsy",
    "Turquoise Health",
    "Company A",
    "Company B",
    "Company C",
    "Company D",
  ];

  return (
    <div className="bg-[#fdf7f0] py-16 text-center">
      <p className="text-sm text-gray-500 mb-2">Companies</p>
      <h2 className="text-4xl font-extrabold mb-8">WE'RE TRUSTED BY</h2>

      {/* Arrows */}
      <div className="relative w-full">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10"
        >
          <FaArrowLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth px-16"
        >
          {companies.map((name, idx) => (
            <div
              key={idx}
              className="min-w-[200px] h-28 flex items-center justify-center rounded-xl shadow bg-white font-semibold text-lg"
            >
              {name}
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
