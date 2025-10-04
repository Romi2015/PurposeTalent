// import React from "react";

// export default function () {
//   return (
//     <header className="flex justify-between items-center px-8 py-4 bg-[#f9f3e9]">
//       {/* Left */}
//       <div className="flex gap-3">
//         <button className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300 font-sans">
//           👀 Companies
//         </button>
//         <button className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300 font-sans">
//           📊 Candidates
//         </button>
//       </div>

//       {/* Logo */}
//       <div className="font-logo font-bold text-xl">
//         Purpose <span className="text-yellow-600">Talent</span>
//       </div>

//       {/* Right */}
//       <div className="flex items-center gap-4">
//         <span className="text-sm text-gray-700 font-sans">New York | 2:17 am</span>
//         <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 font-sans">
//           ✉ Contact
//         </button>
//       </div>
//     </header>
//   );
// };


import React from "react";

export default function () {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-[#f9f3e9] shadow-md z-50">
      {/* Left */}
      <div className="flex gap-3">
        <button className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300 font-sans">
          👀 Companies
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300 font-sans">
          📊 Candidates
        </button>
      </div>

      {/* Logo */}
      <div className="font-logo font-bold text-xl">
        Purpose <span className="text-yellow-600">Talent</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700 font-sans">New York | 2:17 am</span>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 font-sans">
          ✉ Contact
        </button>
      </div>
    </header>
  );
}
