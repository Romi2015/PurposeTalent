import React from "react";


export default function () {
  return (
    <footer className="bg-[#f9f3e9] px-8 py-10 flex justify-between items-center">
      {/* Left Section */}
      <div>
        <p className="text-sm text-black mb-4">New York © 2020-2024</p>
        <h1 className="font-logo font-bold text-2xl leading-tight">
          PURPOSE <br /> TALENT, INC.
        </h1>
      </div>

      {/* Middle Buttons */}
      <div className="flex flex-col gap-3">
        {/* Companies Button */}
        <button className="flex items-center justify-between w-64 bg-[#f0e7da] rounded-full px-2 py-2">
          <span className="bg-[#7a5c10] text-white w-10 h-10 flex items-center justify-center rounded-full">
            &gt;
          </span>
          <span className="flex-1 text-left ml-4 text-black font-sans">
            For companies
          </span>
        </button>

        {/* Candidates Button */}
        <button className="flex items-center justify-between w-64 bg-[#f0e7da] rounded-full px-2 py-2">
          <span className="bg-[#e6a816] text-white w-10 h-10 flex items-center justify-center rounded-full">
            &gt;
          </span>
          <span className="flex-1 text-left ml-4 text-black font-sans">
            For candidates
          </span>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-4xl rotate-[-20deg]">↖</span>
        <h2 className="font-logo font-bold text-xl text-black leading-tight text-center">
          BACK <br /> TO TOP
        </h2>
      </div>
    </footer>
  );
}
