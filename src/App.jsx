import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Exp_page from "./components/EXP_PAGE";

import MapExperienceOverlay from "./components/MapExperienceOverlay";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

import ProjectGrid from "./components/ProjectGrid";
// import { Route } from "lucide-react";

const Home = () => {
  return (
    // <div className=" mt-20 pt-20 overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
    //   <div className="fixed top-0 -z-10 h-full w-full">
    //     <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    //   </div>

    //   <div className="container mx-auto px-8">
    <div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      {/* <ProjectGrid /> */}
      <Experience />
      <MapExperienceOverlay />
      <Contact />
    </div>
    //   {/* </div>
    // </div> */}
  );
};

const App = () => {
  return (
    <div className=" mt-20 pt-20 overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Hero" element={<Hero />} />
            <Route path="/About" element={<About />} />
            <Route path="/Technologies" element={<Technologies />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/exp_page" element={<Exp_page />} />
            <Route
              path="/MapExperienceOverlay"
              element={<MapExperienceOverlay />}
            />

            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;

//-----------------------------------------2----------------------------------------------------------------

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Technologies from "./components/Technologies";
// import Experience from "./components/Experience";
// import MapExperienceOverlay from "./components/MapExperienceOverlay";
// import Contact from "./components/Contact";
// import Projects from "./components/Projects";

// const Home = () => {
//   return (
//     <div className="mt-20 pt-20 overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
//       <div className="fixed top-0 -z-10 h-full w-full">
//         <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
//       </div>

//       <div className="container mx-auto px-8">
//         <Hero />
//         <About />
//         <Technologies />
//         <Experience />
//         <MapExperienceOverlay />
//         <Contact />
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} /> {/* Home is now the self-path */}
//         <Route path="/projects" element={<Projects />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
