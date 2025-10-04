
// import React from "react";

// export default function () {
//   return (
//     <section className="relative bg-[#fcf5ea] w-full h-screen flex flex-col md:flex-row items-center">
//       {/* Left side: Illustration */}
//       <div className="flex-1 flex justify-center items-center h-full">
//         <img
//           src="/src/assets/img 1.jpg"
//           alt="Illustration"
//           className="max-w-full max-h-full object-contain"
//         />
//       </div>

//       {/* Right side: Text (only this part has padding) */}
//       <div className="flex-1 flex flex-col justify-center gap-6 h-full px-8 lg:px-32">
//         <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
//           WORK <span className="text-[#f2b30c]">THAT</span> MATTERS
//         </h1>

//         <p className="text-gray-800 text-lg">
//           Connecting groundbreaking companies with extraordinary talent
//         </p>

//         <div className="flex gap-4 mt-4">
//           <button className="bg-[#f2b30c] text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
//             Learn more
//           </button>
//           <button className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
//             Get in touch
//           </button>
//         </div>
//       </div>

//       {/* Site of the Day strip at the edge */}
     
//     </section>
//   );
// }
import heroImg from '../assets/img 1.jpg'; // adjust relative path

export default function () {
  return (
    <section className="relative bg-[#fcf5ea] w-full h-screen flex flex-col md:flex-row items-center">
      {/* Left side: Illustration */}
      <div className="flex-1 flex justify-center items-center h-full">
        <img
          src={heroImg}
          alt="Illustration"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Right side: Text */}
      <div className="flex-1 flex flex-col justify-center gap-6 h-full px-8 lg:px-32">
        <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
          WORK <span className="text-[#f2b30c]">THAT</span> MATTERS
        </h1>

        <p className="text-gray-800 text-lg">
          Connecting groundbreaking companies with extraordinary talent
        </p>

        <div className="flex gap-4 mt-4">
          <button className="bg-[#f2b30c] text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
            Learn more
          </button>
          <button className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
