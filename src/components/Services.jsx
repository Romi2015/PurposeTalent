
import React from "react";
import icon5 from "/src/assets/img 5.jpg";
import icon6 from "/src/assets/img 6.jpg";
import icon7 from "/src/assets/img 7.jpg";
import icon8 from "/src/assets/img 8.jpg";

const servicesData = [
  {
    id: 1,
    title: "EXECUTIVE SEARCH",
    description: "Helping clients identify experienced operators who can level them up.",
    icon: icon5,
    rotation: "-2deg",
  },
  {
    id: 2,
    title: "NEXT-GEN SEARCH",
    description: "Identifying emerging leaders and builders for startups & scale-ups.",
    icon: icon6,
    rotation: "1deg",
  },
  {
    id: 3,
    title: "COACHING",
    description: "Proven advisors and mentors who can accelerate early stage startup growth.",
    icon: icon7,
    rotation: "-1deg",
  },
  {
    id: 4,
    title: "TALENT STRATEGY CONSULTING",
    description: "Working with client leaders to shape and align strategy to their unique culture.",
    icon: icon8,
    rotation: "2deg",
  },
];

export default function () {
  return ( 
    <section className="bg-black py-16 px-8 lg:px-32 flex flex-col items-center">
      <div>
        <h4 className="text-1xl font-bold text-white mb-10 text-center">Service</h4>
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          FLEXIBLE INTEGRATED TALENT PARTNERS
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-[#fcf5ea] rounded-3xl p-8 w-64 sm:w-72 flex flex-col items-center text-center transform"
            style={{ rotate: service.rotation }}
          >
            <span className="mb-4">{service.id.toString().padStart(2, "0")}</span>
            <h3 className="font-bold text-lg mb-4">{service.title}</h3>
            <img
              src={service.icon}
              alt={service.title}
              className="w-full h-40 mb-10 object-cover"
            />
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
