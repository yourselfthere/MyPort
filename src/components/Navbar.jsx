import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import pic from "../assets/icon.png";
const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 mb-20 flex items-center justify-between pt-3 pb-2 backdrop-blur shadow-lg z-20 pr-9">
        <div className="mx-11">
          <img src={pic} alt="VN Icon" className="w-14 h-14 cursor-pointer"
          onClick={scrollToTop}></img>
        </div>
        <div className="flex space-x-4">
     

          <a
            href="https://www.linkedin.com/in/navneet-singh-27a4b222b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[#0A66C2] text-5xl p-1 hover:bg-white hover:shadow-lg hover:rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </a>
          <a
            href="https://github.com/yourselfthere"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-5xl p-1 hover:bg-purple-500 hover:shadow-lg hover:rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </a>
          <a href="mailto:nsd02rtk@gmail.com?subject=Hello%20from%20Your%20Website&body=Hi%2C%20I%20wanted%20to%20reach%20out%20to%20you%20regarding%20...">
            <CgMail className="text-[#D44638] text-5xl hover:bg-white hover:shadow-lg hover:rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
