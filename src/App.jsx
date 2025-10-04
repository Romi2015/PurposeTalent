// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // ✅ Import components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // ✅ Import pages
// import Home from "./pages/Home";
// import ServicesPage from "./pages/ServicesPage";
// import StoriesPage from "./pages/StoriesPage";
// import AboutPage from "./pages/About";
// import ContactPage from "./pages/ContactPage";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
//         {/* Navbar at the top */}
//         <Navbar />

//         {/* Page content */}
//         <main className="flex-grow container mx-auto px-4 py-8">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/services" element={<ServicesPage />} />
//             <Route path="/stories" element={<StoriesPage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//           </Routes>
//         </main>

//         {/* Footer at the bottom */}
//         <Footer />
//       </div>
//     </Router>
//   );
  

// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // ✅ Import components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // ✅ Import pages
// import Home from "./pages/Home";
// import ServicesPage from "./pages/ServicesPage";
// import StoriesPage from "./pages/StoriesPage";
// import AboutPage from "./pages/About";
// import ContactPage from "./pages/ContactPage";
// import Hero from "./components/Hero";

// import Services from "../components/Services";
// import Stories from "../components/Stories";
// import About from "../components/About";
// import Contact from "../components/Contact";


// export default function () {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
//         {/* Navbar at the top */}
//         <Navbar />

//         {/* Page content */}
//         <main className="flex-grow container mx-auto px-4 py-8">
          
          
//           <Routes>
//             <Route path="/" element={<Hero />} />
//             <Route path="/services" element={<ServicesPage />} />
//             <Route path="/stories" element={<StoriesPage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/contact" element={<ContactPage />} />
           
//              <Route path="/service" element={<Services />} />
//               <Route path="/stories" element={<Stories />} />
//                <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>

//         {/* Footer at the bottom */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Import layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ Import section components
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stories from "./components/Stories";
import About from "./components/About";
import Contact from "./components/Contact";
import CompaniesCandidates from "./components/CompaniesCandidates";
import Card from "./components/Card";
import Brand from "./components/Brand";
import Title from "./components/Title";
import Site from "./components/Site";

export default function () {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* Navbar at the top */}
        <Navbar />
        <Site/>
       <Hero/>
       <CompaniesCandidates/>
       <About/>
       <Stories/>
       <Services/>
       <Card/>
       <Brand/>
       <Contact/>
       <Title/>
        <Footer />
      </div>
    </Router>
  );
}
