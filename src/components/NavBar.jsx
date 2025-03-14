// NavBar
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import logo

const NavBar = ({ userData, handleLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white text-sm font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
          >
            Home
          </Link>
            {/* Only show Production Program & Production Management if the user is in 'production' OR admin */}
            {userData && (userData.department === "production"  || userData.department === "admin") && (
            <>
              <Link
                to="/production-program"
                className="text-white text-sm font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
              >
                Production Program
              </Link>
              <Link
                to="/production-management"
                className="text-white text-sm font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
              >
                Production Management
              </Link>
            </>
            )}

            {/* Only show Sales Orders if the user is in 'sales'  OR admin*/}
            {userData && (userData.department === "sales" || userData.department === "admin") && (
            <Link
              to="/sales-orders"
              className="text-white text-sm font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
            >
              Sales Orders
            </Link>
            )}

          {/* Display username only if userData is available */}
          {userData && (
            <span className="text-slate-500 text-sm font-light">
              Welcome: {userData.username}
            </span>
          )}

          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu items */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#2c3e50]">
          <Link
            to="/"
            className="text-white text-lg font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
          >
            Home
          </Link>

          {/* Only show Production Program & Production Management if the user is in 'production' or admin */}
          {userData && (userData.department === "production" || userData.department === "admin") && (
            <>
              <Link
                to="/production-program"
                className="text-white text-lg font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
              >
                Production Program
              </Link>
              <Link
                to="/production-management"
                className="text-white text-lg font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
              >
                Production Management
              </Link>
            </>
          )}

          {/* Only show Sales Orders if the user is in 'sales' OR admin */}
          {userData && (userData.department === "sales" || userData.department === "admin") && (
            <Link
              to="/sales-orders"
              className="text-white text-lg font-medium px-4 py-2 rounded-md bg-[#2c3e50] hover:bg-[#34495e] active:bg-[#16a085] transition-all duration-300"
            >
              Sales Orders
            </Link>
          )}
        </div>
      )}    
    </nav>
  );
};

export default NavBar;