import logo from "../assets/raksheka_logo_pink.png";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

// import Projects from "../components/Projects";
import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

// const scrollToSection = (id) => {
//   const section = document.getElementById(id);
//   if (section) {
//     section.scrollIntoView({ behavior: "smooth" });
//   }
// };

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        id="navbar"
        className="text-neutral-100 fixed top-0 left-0 right-0 z-10 flex items-center justify-between  px-10 h-24"
      >
        {/* Align the logo to start */}
        <div className="flex flex-shrink-0 items-start">
          <img
            src={logo}
            alt="RR"
            className="ml-5 w-40 h-auto object-contain"
          />
        </div>
        {/* bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(5,5,5,0.3),rgba(5,5,5,0.2))] */}
        {/* Hamburger button */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Menu items for large screens */}
        <div className="hidden md:flex m-8 items-center justify-center gap-4">
          <ul className="flex space-x-4">
            <li className="hover:text-purple-400">
              <a href="/">Home</a>
            </li>
            {/* <li className="hover:text-purple-400">
              <a
                // href="https://github.com/rakshekaraj/rakshekaraj/blob/main/Raksheka_resume_Dec19_2024.pdf"
                href="https://github.com/rakshekaraj/rakshekaraj/blob/main/raksheka_resume_MLE.pdf"
                download="Raksheka_resume_Jan_23_2025.pdf"
                target="_blank"
              >
                Resume
              </a>
            </li> */}
            <li className="hover:text-purple-400">
              <a
                href="https://raw.githubusercontent.com/rakshekaraj/rakshekaraj/main/raksheka_rajakumar_resume_overall.pdf"
                download="Raksheka_resume_Mar10_2025.pdf"
              >
                Resume
              </a>
            </li>
            <li className="hover:text-purple-400">
              {/* <a href=" /Projects">Projects</a> */}
              <Link to="/projects">Projects</Link>
              {/* <Link to="/Projects">pro</Link> */}
            </li>
            <li className="hover:text-purple-500">
              {/* <a href="/exp_page">Experience</a> */}
              <Link to="/exp_page">Experience</Link>
            </li>
            <li className="hover:text-purple-500">Blogs</li>
            <li>
              <a
                href="https://www.linkedin.com/in/raksheka/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rakshekaraj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/raksheka/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Adjust the following content margin based on the menu open state */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col bg-gray-800 w-full p-4">
          <ul className="flex flex-col space-y-4">
            <li className="hover:text-cyan-400">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-cyan-400">
              <a href=" /Projects">Projects</a>
            </li>
            <li className="hover:text-cyan-400">
              <a href="/exp_page">Experience</a>
            </li>
            <li className="hover:text-cyan-400">
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
