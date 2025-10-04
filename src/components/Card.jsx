// import React, { useState } from "react";

// const INITIAL_CARDS = [
//   { 
//     id: 1, 
//     title: "DRIVEN BY IMPACT", 
//     sub: "Making a meaningful difference",
//     image: "/src/assets/img 11.jpg",
//     borderColor: "border-yellow-400"
//   },
//   { 
//     id: 2, 
//     title: "BREAKING NEW GROUND", 
//     sub: "Doing something new and ambitious ",
//     image: "/src/assets/img 12.jpg",
//     borderColor: "border-purple-500"
//   },
//   { 
//     id: 3, 
//     title: "PUTING PEOPLE FIRST", 
//     sub: "Leading with empathy and a positive culture",
//     image: "/src/assets/img 13.jpg",
//     borderColor: "border-red-500"
//   },
//   { 
//     id: 4, 
//     title: "BUILDING GREAT TEAMS", 
//     sub: "Thinking long-term to build a great business",
//     image: "/src/assets/img 14.jpg",
//     borderColor: "border-yellow-400"
//   },
// ];

// export default function () {
//   const [cards, setCards] = useState(INITIAL_CARDS);

//   const rotateTopToBack = () => {
//     if (cards.length <= 1) return;
//     const [first, ...rest] = cards;
//     setCards([...rest, first]);
//   };

//   return (
//     <div className="min-h-screen bg-[#fcf5ea] flex items-center justify-center p-8">
//       <div className="w-full max-w-lg">
//         {/* Bold text above the cards */}
//         <div className="text-center mb-6 select-none">
//           <h1 className="font-extrabold text-black leading-tight text-5xl md:text-6xl">
//             We love partnering with
//             <br />
//             businesses who are
//           </h1>

//           <h2 className="font-extrabold text-black text-3xl md:text-4xl mt-4">
//             Driven by impact
//             <br />
//             Driven
//           </h2>
//         </div>

//         {/* Card stack */}
//         <div className="relative w-full h-[480px] mx-auto">
//           {cards.map((card, idx) => {
//             const topOffset = idx * 12;
//             const scale = 1 - idx * 0.03;
//             const zIndex = 100 - idx;
//             const isTop = idx === 0;

//             return (
//               <div
//                 key={card.id}
//                 onClick={isTop ? rotateTopToBack : undefined}
//                 role={isTop ? "button" : undefined}
//                 aria-label={isTop ? `Show next card (click)` : undefined}
//                 className={`absolute left-0 right-0 mx-auto w-full h-full rounded-2xl ${card.borderColor} border-4 bg-white shadow-md flex flex-col items-center text-center overflow-hidden select-none ${
//                   isTop ? "cursor-pointer" : "cursor-default"
//                 }`}
//                 style={{
//                   top: `${topOffset}px`,
//                   transform: `scale(${scale})`,
//                   zIndex,
//                 }}
//               >
//                 {/* Card Image */}
//                 <img 
//                   src={card.image} 
//                   alt={card.title} 
//                   className="w-full h-48 object-cover rounded-t-2xl"
//                 />

//                 {/* Card Content */}
//                 <div className="px-6 py-4 flex-1 flex flex-col justify-center">
//                   <h3 className="text-2xl md:text-3xl font-bold text-black">
//                     {card.title}
//                   </h3>
//                   <p className="text-sm mt-3 text-gray-700">{card.sub}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import img11 from "/src/assets/img 11.jpg";
import img12 from "/src/assets/img 12.jpg";
import img13 from "/src/assets/img 13.jpg";
import img14 from "/src/assets/img 14.jpg";

const INITIAL_CARDS = [
  { 
    id: 1, 
    title: "DRIVEN BY IMPACT", 
    sub: "Making a meaningful difference",
    image: img11,
    borderColor: "border-yellow-400"
  },
  { 
    id: 2, 
    title: "BREAKING NEW GROUND", 
    sub: "Doing something new and ambitious",
    image: img12,
    borderColor: "border-purple-500"
  },
  { 
    id: 3, 
    title: "PUTTING PEOPLE FIRST", 
    sub: "Leading with empathy and a positive culture",
    image: img13,
    borderColor: "border-red-500"
  },
  { 
    id: 4, 
    title: "BUILDING GREAT TEAMS", 
    sub: "Thinking long-term to build a great business",
    image: img14,
    borderColor: "border-yellow-400"
  },
];

export default function () {
  const [cards, setCards] = useState(INITIAL_CARDS);

  const rotateTopToBack = () => {
    if (cards.length <= 1) return;
    const [first, ...rest] = cards;
    setCards([...rest, first]);
  };

  return (
    <div className="min-h-screen bg-[#fcf5ea] flex items-center justify-center p-8">
      <div className="w-full max-w-lg">
        {/* Bold text above the cards */}
        <div className="text-center mb-6 select-none">
          <h1 className="font-extrabold text-black leading-tight text-5xl md:text-6xl">
            We love partnering with
            <br />
            businesses who are
          </h1>

          <h2 className="font-extrabold text-black text-3xl md:text-4xl mt-4">
            Driven by impact
            <br />
            Driven
          </h2>
        </div>

        {/* Card stack */}
        <div className="relative w-full h-[480px] mx-auto">
          {cards.map((card, idx) => {
            const topOffset = idx * 12;
            const scale = 1 - idx * 0.03;
            const zIndex = 100 - idx;
            const isTop = idx === 0;

            return (
              <div
                key={card.id}
                onClick={isTop ? rotateTopToBack : undefined}
                role={isTop ? "button" : undefined}
                aria-label={isTop ? `Show next card (click)` : undefined}
                className={`absolute left-0 right-0 mx-auto w-full h-full rounded-2xl ${card.borderColor} border-4 bg-white shadow-md flex flex-col items-center text-center overflow-hidden select-none ${
                  isTop ? "cursor-pointer" : "cursor-default"
                }`}
                style={{
                  top: `${topOffset}px`,
                  transform: `scale(${scale})`,
                  zIndex,
                }}
              >
                {/* Card Image */}
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />

                {/* Card Content */}
                <div className="px-6 py-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-black">
                    {card.title}
                  </h3>
                  <p className="text-sm mt-3 text-gray-700">{card.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
