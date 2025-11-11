import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="bg-gradient-to-br from-[#F9FAFF] to-[#F4F6FB]">
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
