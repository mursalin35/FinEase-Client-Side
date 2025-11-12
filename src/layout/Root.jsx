import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../components/ScrollToTop";

const Root = () => {
  return (
    <div className="bg-gradient-to-br from-[#F9FAFF] to-[#F4F6FB] dark:from-[#0D0D16] dark:to-[#1A1A2E] min-h-screen transition-colors duration-300">
      <ScrollToTop />
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default Root;
