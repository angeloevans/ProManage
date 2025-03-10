import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import logo

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Left side: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-auto" /> {/* Adjusted logo size */}
        </div>

        {/* Right side: Nav links (desktop view) */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white text-sm font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/production-program"
            className="text-white text-sm font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
          >
            Πρόγραμμα Παραγωγής
          </Link>
          <Link
            to="/production"
            className="text-white text-sm font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
          >
            Διαχείριση Παραγωγής
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#2c3e50]">
          <Link
            to="/"
            className="text-white text-lg font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/production-program"
            className="text-white text-lg font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
          >
            Πρόγραμμα Παραγωγής
          </Link>
          <Link
            to="/production"
            className="text-white text-lg font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
          >
            Διαχείριση Παραγωγής
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
