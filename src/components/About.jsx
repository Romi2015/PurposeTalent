
// import React from "react";

// export default function () {
//   return (
//     <section className="bg-black text-white min-h-screen w-full flex flex-col md:flex-row justify-between items-start relative">
//       {/* Left Column */}
//       <div className="md:w-1/2 flex flex-col justify-start relative px-8 lg:px-16">
//         <p className="text-sm mb-2">Purpose Talent. <br /> since 2020</p>
//         <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
//           FOUNDED <br />
//           BY ANDREW BLANCATO — <br />
//           PEOPLE AND TALENT EXPERT
//         </h1>
//         {/* Arrow */}
//         <div className="mt-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="60"
//             height="60"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-white"
//           >
//             <path d="M12 5v14M5 12l7 7 7-7" />
//           </svg>
//         </div>
//         {/* LinkedIn */}
//         <div className="flex items-center mt-12 gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             fill="currentColor"
//             className="bi bi-linkedin"
//             viewBox="0 0 16 16"
//           >
//             <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.215c.837 0 1.358-.554 1.358-1.248-.015-.71-.521-1.248-1.343-1.248-.822 0-1.358.538-1.358 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.215h2.4v-3.93c0-.21.015-.42.077-.57.168-.42.551-.854 1.194-.854.843 0 1.18.644 1.18 1.588v3.766h2.4V9.91c0-2.174-1.157-3.184-2.703-3.184-1.247 0-1.796.694-2.106 1.183h.016v-1.02H8.651c.03.677 0 7.225 0 7.225z" />
//           </svg>
//           <a href="#" className="text-white text-sm font-medium hover:underline">
//             Connect with Andrew
//           </a>
//         </div>
//       </div>

//       {/* Right Column */}
//       <div className="md:w-1/2 flex flex-col items-start md:pl-12 mt-8 md:mt-0 px-8 lg:px-16">
//         <img
//           src="/src/assets/img 2.jpg"
//           alt="Andrew"
//           className="rounded-lg w-full md:w-auto max-w-md"
//         />
//         <p className="mt-6 text-white text-base md:text-lg leading-relaxed">
//           After spending over a decade building companies like Kickstarter, Etsy, and Casper, Andrew saw an opportunity to help the next generation of companies succeed by taking a more thoughtful approach to hiring the right people.
//         </p>
//         <p className="mt-4 text-white text-base md:text-lg leading-relaxed">
//           We believe in developing a true understanding of a company’s mission, business, and culture, so that we can serve as a flexible partner – helping clients navigate the challenges of assembling the teams they need to thrive.
//         </p>
//       </div>

//     </section>
//   );
// }
import React from "react";
import andrewImg from "/src/assets/img 2.jpg"; 

export default function () {
  return (
    <section className="bg-black text-white min-h-screen w-full flex flex-col md:flex-row justify-between items-start relative">
      {/* Left Column */}
      <div className="md:w-1/2 flex flex-col justify-start relative px-8 lg:px-16">
        <p className="text-sm mb-2">Purpose Talent. <br /> since 2020</p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          FOUNDED <br />
          BY ANDREW BLANCATO — <br />
          PEOPLE AND TALENT EXPERT
        </h1>
        {/* Arrow */}
        <div className="mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
        {/* LinkedIn */}
        <div className="flex items-center mt-12 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.215c.837 0 1.358-.554 1.358-1.248-.015-.71-.521-1.248-1.343-1.248-.822 0-1.358.538-1.358 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.215h2.4v-3.93c0-.21.015-.42.077-.57.168-.42.551-.854 1.194-.854.843 0 1.18.644 1.18 1.588v3.766h2.4V9.91c0-2.174-1.157-3.184-2.703-3.184-1.247 0-1.796.694-2.106 1.183h.016v-1.02H8.651c.03.677 0 7.225 0 7.225z" />
          </svg>
          <a href="#" className="text-white text-sm font-medium hover:underline">
            Connect with Andrew
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 flex flex-col items-start md:pl-12 mt-8 md:mt-0 px-8 lg:px-16">
        <img
          src={andrewImg} // ✅ Use imported image here
          alt="Andrew"
          className="rounded-lg w-full md:w-auto max-w-md"
        />
        <p className="mt-6 text-white text-base md:text-lg leading-relaxed">
          After spending over a decade building companies like Kickstarter, Etsy, and Casper, Andrew saw an opportunity to help the next generation of companies succeed by taking a more thoughtful approach to hiring the right people.
        </p>
        <p className="mt-4 text-white text-base md:text-lg leading-relaxed">
          We believe in developing a true understanding of a company’s mission, business, and culture, so that we can serve as a flexible partner – helping clients navigate the challenges of assembling the teams they need to thrive.
        </p>
      </div>
    </section>
  );
}
