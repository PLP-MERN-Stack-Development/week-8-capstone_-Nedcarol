import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center mt-auto">
      <p>&copy; {new Date().getFullYear()} DigiTech Solutions Africa. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/privacy" className="hover:underline">Privacy</Link>
      </div>
    </footer>
  );
};

export default Footer;
