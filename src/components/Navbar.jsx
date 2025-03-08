import React, { useEffect, useState } from "react";
import LOGO from "../assets/images/webdevgary.png";
import { MENU_LINKS } from "../utils/data";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logo = "<webdev.gary>";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHireMe = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({
        behavior: "smooth",
        block: "start",
        top: -50,
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="container max-w-[1400px] mx-auto sticky top-5 z-10">
      <div className="flex items-center justify-between rounded-full bg-white/20 border border-cyan-500 backdrop-blur-[10px] m-5 p-3 md:p-0">
        {/* logo */}
        <span className="ml-6 text-xl">{logo}</span>

        <button
          className="block md:hidden text-[#333] mr-6 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.to}
                smooth
                spy
                offset={item.offest}
                className="menu-item"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="hidden cursor-pointer md:block h-12 text-[15px] font-medium text-white bg-linear-to-r from-cyan-500 to-blue-500 rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105"
          onClick={handleHireMe}
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
