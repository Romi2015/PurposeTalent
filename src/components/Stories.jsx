

// const storiesData = [
//   {
//     id: 1,
//     title: "Finding Your Rhythm: Purpose Talent's New Beat",
//     date: "11.19.2024",
//     time: "3 min",
//     badge: "Updates",
//     image: "/src/assets/img 3.jpg", // replace with your image
//   },
//   {
//     id: 2,
//     title: "Two Year Updates",
//     date: "8.2.2022",
//     time: "4 min",
//     badge: "Updates",
//     image: "/src/assets/img 4.jpg", // replace with your image
//   },
// ];

// export default function () {
//   return (
//     <section className="bg-[#fcf5ea] py-16 px-8 lg:px-32 flex flex-col items-center">
//       <h2 className="text-4xl font-bold mb-2 text-center">STORIES</h2>
//       <p className="text-center text-gray-700 mb-12">
//         Updates, insights and stories of those who have found their purpose.
//       </p>

//       <div className="flex flex-wrap justify-center gap-8">
//         {storiesData.map((story) => (
//           <div
//             key={story.id}
//             className="bg-white rounded-xl shadow-lg w-64 sm:w-72 p-4 flex flex-col items-center transform rotate-[-2deg] hover:rotate-0 transition"
//           >
//             <img
//               src={story.image}
//               alt={story.title}
//               className="rounded-lg mb-4 w-full h-40 object-cover"
//             />
//             <span className="bg-yellow-500 text-white px-3 py-1 text-xs rounded-full mb-2">
//               {story.badge}
//             </span>
//             <h3 className="text-center font-semibold mb-2">{story.title}</h3>
//             <p className="text-gray-500 text-sm mb-4">
//               {story.date} | {story.time}
//             </p>
//             <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition">
//               Read
//             </button>
//           </div>
//         ))}
//       </div>

//       <button className="mt-12 bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
//         All Stories
//       </button>
//     </section>
//   );
// }
import React from "react";
import img3 from "/src/assets/img 3.jpg";
import img4 from "/src/assets/img 4.jpg";

const storiesData = [
  {
    id: 1,
    title: "Finding Your Rhythm: Purpose Talent's New Beat",
    date: "11.19.2024",
    time: "3 min",
    badge: "Updates",
    image: img3,
  },
  {
    id: 2,
    title: "Two Year Updates",
    date: "8.2.2022",
    time: "4 min",
    badge: "Updates",
    image: img4,
  },
];

export default function () {
  return (
    <section className="bg-[#fcf5ea] py-16 px-8 lg:px-32 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-2 text-center">STORIES</h2>
      <p className="text-center text-gray-700 mb-12">
        Updates, insights and stories of those who have found their purpose.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {storiesData.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-xl shadow-lg w-64 sm:w-72 p-4 flex flex-col items-center transform rotate-[-2deg] hover:rotate-0 transition"
          >
            <img
              src={story.image}
              alt={story.title}
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <span className="bg-yellow-500 text-white px-3 py-1 text-xs rounded-full mb-2">
              {story.badge}
            </span>
            <h3 className="text-center font-semibold mb-2">{story.title}</h3>
            <p className="text-gray-500 text-sm mb-4">
              {story.date} | {story.time}
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition">
              Read
            </button>
          </div>
        ))}
      </div>

      <button className="mt-12 bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
        All Stories
      </button>
    </section>
  );
}
