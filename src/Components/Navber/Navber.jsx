import React, { useState, useEffect } from "react";
import logo from "../../assets/Images/Logo/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobil er menu Open thakle Body scroll off rakhbe
  useEffect(() => {
    document.body.style.overflow = menuShow ? "hidden" : "unset";
  }, [menuShow]);

  const navLinks = ["Home", "About", "Service", "Careers", "Contact"];

  return (
    <>
      {/* --- Main Navbar --- */}
      <nav
        className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ease-in-out
        ${isSticky ? "bg-white py-4 shadow-lg" : "bg-transparent py-6 lg:pt-14"}`}>
        <div className="container mx-auto px-4 lg:px-0 flex justify-between items-center">
          {/* Logo */}
          <div className="w-32 sm:w-40">
            <a href="#">
              <img src={logo} alt="Logo" className="w-full" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-lg font-medium transition-colors ${
                  isSticky ? "text-[#151515] hover:text-[#6A4DF4]" : "text-white hover:text-yellow-400"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <a href="#" className="bg-[#6A4DF4] py-3 px-10 text-white font-semibold rounded-lg hover:bg-[#5638e0]">
              Contact
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <FaBarsStaggered
              onClick={() => setMenuShow(true)}
              className={`text-2xl cursor-pointer ${isSticky ? "text-black" : "text-white"}`}
            />
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay (Nav er bahire) --- */}
      <div
        className={`fixed inset-0 bg-black/70 z-110 transition-opacity duration-300 ${
          menuShow ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuShow(false)}
      />

      {/* --- Mobile Sidebar (Nav er bahire) --- */}
      <div
        className={`fixed top-0 right-0 h-full w-70 bg-[#6A4DF4] z-120 p-10 
        transform transition-transform duration-500 ease-in-out flex flex-col
        ${menuShow ? "translate-x-0" : "translate-x-full"}`}>
        <IoMdClose
          onClick={() => setMenuShow(false)}
          className="text-4xl text-white self-end cursor-pointer mb-10"
        />
        <div className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuShow(false)}
              className="text-white text-2xl font-semibold border-b border-white/10 pb-2 hover:text-yellow-300">
              {link}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar; 