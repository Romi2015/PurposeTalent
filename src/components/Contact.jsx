import React from "react";

export default function () {
  return (
    <section className="bg-black text-white h-screen w-full flex flex-col justify-center items-center text-center relative">
      {/* Big Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        READY <br /> TO CONNECT?
      </h1>

      {/* Contact Email */}
      <div className="mt-12">
        <a
          href="mailto:andrew@purposetalent.xyz"
          className="text-lg md:text-xl font-medium hover:underline"
        >
          andrew@purposetalent.xyz
        </a>
      </div>

      
    </section>
  );
}
