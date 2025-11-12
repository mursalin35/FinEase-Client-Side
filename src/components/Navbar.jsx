import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPaw,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFF8F1] dark:bg-[#1E1E2F] text-[#5A3A2E] dark:text-[#EDEBFF] mt-20 border-t border-[#EAD9C9] dark:border-[#3D3A64] transition-colors duration-300">
      <div className="w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaPaw className="text-[#B87333] dark:text-[#FFB86C] text-2xl" />
            <h2 className="text-2xl font-bold">WarmPaws</h2>
          </div>
          <p className="text-sm text-[#7A5D4A] dark:text-[#B0B3C6] leading-relaxed">
            A cozy winter companion platform designed to keep your pets warm,
            comfortable, and cared for during chilly days.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.facebook.com/mursalin07"
              target="_blank"
              className="bg-[#B87333]/20 dark:bg-[#FFB86C]/20 p-2 rounded-full hover:bg-[#B87333] dark:hover:bg-[#FFB86C] hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/msmursalin07/?hl=en"
              target="_blank"
              className="bg-[#B87333]/20 dark:bg-[#FFB86C]/20 p-2 rounded-full hover:bg-[#B87333] dark:hover:bg-[#FFB86C] hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-[#B87333]/20 dark:bg-[#FFB86C]/20 p-2 rounded-full hover:bg-[#B87333] dark:hover:bg-[#FFB86C] hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/mursalin07/"
              target="_blank"
              className="bg-[#B87333]/20 dark:bg-[#FFB86C]/20 p-2 rounded-full hover:bg-[#B87333] dark:hover:bg-[#FFB86C] hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#5A3A2E] dark:text-[#EDEBFF]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-[#B87333] dark:hover:text-[#FFB86C] transition hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#B87333] dark:hover:text-[#FFB86C] transition hover:underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#B87333] dark:hover:text-[#FFB86C] transition hover:underline"
              >
                My Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#B87333] dark:hover:text-[#FFB86C] transition hover:underline"
              >
                Pet Care Tips
              </a>
            </li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#5A3A2E] dark:text-[#EDEBFF]">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-[#B87333] dark:hover:text-[#FFB86C] transition hover:underline"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#B87333] dark:hover:text-[#FFB86C] transition hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#B87333] dark:hover:text-[#FFB86C] transition hover:underline"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#B87333] dark:hover:text-[#FFB86C] transition hover:underline"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#5A3A2E] dark:text-[#EDEBFF]">
            Stay Connected
          </h3>
          <p className="text-sm text-[#7A5D4A] dark:text-[#B0B3C6] mb-3">
            Get the latest winter care updates, tips, and pet health advice
            straight to your inbox.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg border border-[#EAD9C9] dark:border-[#3D3A64] focus:outline-none bg-white dark:bg-[#1F1F2E] text-gray-800 dark:text-[#EDEBFF]"
            />
            <button
              type="button"
              className="bg-[#B87333] dark:bg-[#FFB86C] text-white px-4 py-2 rounded-r-lg outline-1 outline-[#B87333] dark:outline-[#FFB86C] hover:bg-[#9a5b29] dark:hover:bg-[#cc9c5a] transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#FBEDE2] dark:bg-[#141422] text-center py-4 border-t border-[#EAD9C9] dark:border-[#3D3A64] text-sm text-[#7A5D4A] dark:text-[#B0B3C6] transition-colors duration-300">
        © {new Date().getFullYear()} WarmPaws — All Rights Reserved | Designed
        by <span className="font-semibold">M.S Mursalin</span>
      </div>
    </footer>
  );
};

export default Footer;
