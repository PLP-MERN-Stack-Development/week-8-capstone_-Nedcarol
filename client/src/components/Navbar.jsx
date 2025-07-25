import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
        <span className="text-xl font-bold text-gray-800">DigiNest</span>
      </Link>

      <div className="space-x-4 flex items-center">
        <Link to="/courses" className="text-gray-600 hover:text-blue-600">
          Courses
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-blue-600">
          About
        </Link>
        <Link to="/contact" className="text-gray-600 hover:text-blue-600">
          Contact
        </Link>

        {user ? (
          <>
            <Link
              to="/dashboard"
              className="text-gray-600 hover:text-blue-600"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-teal-600 text-white px-4 py-1 rounded hover:bg-teal-700"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
