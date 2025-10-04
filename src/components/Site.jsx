import React from "react";

export default function () {
  return (
    <a
      href="https://www.awwwards.com/sites/purpose-talent"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-1/2 -translate-y-1/2 bg-red-600 text-white px-3 py-6 font-bold z-50"
      style={{
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        right: "0", // stays flush to the right edge
      }}
    >
      <span className="text-lg">W.</span>
      <span className="text-sm font-normal"> Site of the Day</span>
    </a>
  );
}
