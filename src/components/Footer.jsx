// Footer.jsx
import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold">FinEase</h1>
          <p className="text-sm text-gray-400">Manage your finances effortlessly</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 mb-4 md:mb-0">
          <li>
            <Link to="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/reports" className="hover:text-cyan-400 transition-colors">
              Reports
            </Link>
          </li>
          <li>
            <Link to="/my-transactions" className="hover:text-cyan-400 transition-colors">
              Transactions
            </Link>
          </li>
          <li>
            <Link to="/myProfile" className="hover:text-cyan-400 transition-colors">
              Profile
            </Link>
          </li>
        </ul>

        {/* Social / Copyright */}
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} FinEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
