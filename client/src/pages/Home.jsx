import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-teal-700">DigiTech Africa</Link>
        <div className="space-x-4 hidden md:flex">
          <Link to="/" className="text-gray-700 hover:text-teal-700">Home</Link>
          <Link to="/courses" className="text-gray-700 hover:text-teal-700">Courses</Link>
          <Link to="/about" className="text-gray-700 hover:text-teal-700">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-teal-700">Contact</Link>
          <Link to="/dashboard" className="text-white bg-teal-600 px-4 py-2 rounded hover:bg-teal-700">Dashboard</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow py-20 text-center px-6 bg-gray-50">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
          Empowering Africa's Digital Creators
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Learn, build, and sell digital products with ease.
        </p>
        <div className="mt-8">
          <Link to="/courses" className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
            Explore Courses
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} DigiTech Solutions Africa. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/privacy" className="hover:underline">Privacy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
