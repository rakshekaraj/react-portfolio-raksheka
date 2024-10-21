import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 pb-2 text-3xl text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text font-extralight tracking-wide text-transparent">
        Lets get in touch!
      </h1>
      <div className="text-center tracking-tighter">
        <div className="p-2 flex flex-wrap space-x-10 justify-center">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
        </div>
        <p className="my-4">+1 323(646)-3734</p>
        <a href="rakshekaraj@gmail.com" className="border-b">
          rakshekaraj@gmail.com
        </a>
      </div>
      {/* <p className="text-center justify-center">
        <a href="#navbar" className="text-purple-600 hover:text-purple-400">
          go to top
        </a>
      </p> */}
    </div>
  );
};

export default Contact;
