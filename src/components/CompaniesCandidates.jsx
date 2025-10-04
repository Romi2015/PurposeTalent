
// import React from "react";

// export default function () {
//   return (
//     <section className="bg-[#fcf5ea] min-h-screen flex flex-col justify-center px-8 py-16 space-y-12">
//       {/* Black Bold Title */}
//       <h2 className="text-6xl md:text-7xl font-extrabold text-black text-center leading-tight">
//         People <br /> Make <br /> Businesses
//       </h2>

//       {/* Heading + Paragraph in two columns */}
//       <div className="flex flex-col md:flex-row items-start max-w-6xl mx-auto gap-12">
//         {/* Heading */}
//         <div className="md:w-1/2">
//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
//             WE'VE BEEN THERE. <br /> WE KNOW WHAT IT TAKES.
//           </h1>
//         </div>

//         {/* Paragraph */}
//         <div className="md:w-1/2 text-gray-700 text-lg md:text-xl">
//           Unlike traditional search firms, we’ve been part of building innovative
//           companies – like{" "}
//           <span className="bg-yellow-300 px-1 rounded">Kickstarter</span>,{" "}
//           <span className="bg-purple-300 px-1 rounded">Casper</span> and{" "}
//           <span className="bg-red-300 px-1 rounded">Etsy</span> – from the ground
//           up, giving us a deep understanding of what it takes to build effective,
//           thriving teams.
//         </div>
//       </div>

//       {/* Cards centered and perfectly proportional inside */}
//       <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
//         {/* Companies Card */}
//         <div className="bg-white rounded-xl p-8 shadow-lg flex-1 flex flex-col">
//           <div className="mb-6 text-center">
//             <img
//               src="/src/assets/img 9.jpg"
//               alt="For Companies"
//               className="mx-auto"
//             />
//           </div>
//           <div className="flex-1 flex flex-col justify-between">
//             <div>
//               <p className="text-gray-700 mb-2">
//                 “They just get it. They 100% understand what we’re trying to build and
//                 the team we’re trying to build.”
//               </p>
//               <p className="font-semibold">Sarah</p>
//               <p className="text-gray-400 text-sm mb-4">HR manager, Google</p>
//             </div>
//             <button className="bg-purple-400 text-white px-6 py-2 rounded-full hover:bg-purple-500 transition mt-4">
//               Complete your team
//             </button>
//           </div>
//         </div>

//         {/* Candidates Card */}
//         <div className="bg-white rounded-xl p-8 shadow-lg flex-1 flex flex-col">
//           <div className="mb-6 text-center">
//             <img
//               src="/src/assets/img 10.jpg"
//               alt="For Candidates"
//               className="mx-auto"
//             />
//           </div>
//           <div className="flex-1 flex flex-col justify-between">
//             <div>
//               <p className="text-gray-700 mb-2">
//                 “I would work with Purpose again in a heartbeat. I've been wowed by
//                 their ability to lead me to mission-focused opportunities.”
//               </p>
//               <p className="font-semibold">Ruby Hoose</p>
//               <p className="text-gray-400 text-sm mb-4">Global Talent Leader</p>
//             </div>
//             <button className="bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-500 transition mt-4">
//               Find your rhythm
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import img9 from "/src/assets/img 9.jpg";
import img10 from "/src/assets/img 10.jpg";

export default function () {
  return (
    <section className="bg-[#fcf5ea] min-h-screen flex flex-col justify-center px-8 py-16 space-y-12">
      {/* Black Bold Title */}
      <h2 className="text-6xl md:text-7xl font-extrabold text-black text-center leading-tight">
        People <br /> Make <br /> Businesses
      </h2>

      {/* Heading + Paragraph in two columns */}
      <div className="flex flex-col md:flex-row items-start max-w-6xl mx-auto gap-12">
        {/* Heading */}
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            WE'VE BEEN THERE. <br /> WE KNOW WHAT IT TAKES.
          </h1>
        </div>

        {/* Paragraph */}
        <div className="md:w-1/2 text-gray-700 text-lg md:text-xl">
          Unlike traditional search firms, we’ve been part of building innovative
          companies – like{" "}
          <span className="bg-yellow-300 px-1 rounded">Kickstarter</span>,{" "}
          <span className="bg-purple-300 px-1 rounded">Casper</span> and{" "}
          <span className="bg-red-300 px-1 rounded">Etsy</span> – from the ground
          up, giving us a deep understanding of what it takes to build effective,
          thriving teams.
        </div>
      </div>

      {/* Cards centered and perfectly proportional inside */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
        {/* Companies Card */}
        <div className="bg-white rounded-xl p-8 shadow-lg flex-1 flex flex-col">
          <div className="mb-6 text-center">
            <img src={img9} alt="For Companies" className="mx-auto" />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-gray-700 mb-2">
                “They just get it. They 100% understand what we’re trying to build and
                the team we’re trying to build.”
              </p>
              <p className="font-semibold">Sarah</p>
              <p className="text-gray-400 text-sm mb-4">HR manager, Google</p>
            </div>
            <button className="bg-purple-400 text-white px-6 py-2 rounded-full hover:bg-purple-500 transition mt-4">
              Complete your team
            </button>
          </div>
        </div>

        {/* Candidates Card */}
        <div className="bg-white rounded-xl p-8 shadow-lg flex-1 flex flex-col">
          <div className="mb-6 text-center">
            <img src={img10} alt="For Candidates" className="mx-auto" />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-gray-700 mb-2">
                “I would work with Purpose again in a heartbeat. I've been wowed by
                their ability to lead me to mission-focused opportunities.”
              </p>
              <p className="font-semibold">Ruby Hoose</p>
              <p className="text-gray-400 text-sm mb-4">Global Talent Leader</p>
            </div>
            <button className="bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-500 transition mt-4">
              Find your rhythm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
