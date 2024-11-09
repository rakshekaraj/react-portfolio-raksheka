import logo from "../assets/raksheka_logo_pink.png";
import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        id="navbar"
        className="text-neutral-100 fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(5,5,5,0.3),rgba(5,5,5,0.2))]" // Ensure background is the same as before rgba(120,119,198,0.3)
      >
        {/* Align the logo to start */}
        <div className="flex flex-shrink-0 items-start">
          <img
            src={logo}
            alt="RR"
            className="ml-5 w-40 h-auto object-contain"
          />
        </div>

        {/* Hamburger button */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Menu items for large screens */}
        <div className="hidden md:flex m-8 items-center justify-center gap-4">
          <ul className="flex space-x-4">
            <li className="hover:text-purple-400">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-purple-400">
              <a
                href="https://github.com/rakshekaraj/rakshekaraj/blob/main/Raksheka_Rajakumar_resume.pdf"
                download="raksheka-resume"
              >
                Resume
              </a>
            </li>
            <li className="hover:text-purple-400">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-purple-500">
              <a href="#experience">Experience</a>
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
              <a href="#about">About</a>
            </li>
            <li className="hover:text-cyan-400">
              <a href="#experience">Experience</a>
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
