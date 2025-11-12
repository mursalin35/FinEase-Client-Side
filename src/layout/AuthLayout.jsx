import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";



const AuthLayout = () => {
  return (
  
    <div className="bg-gradient-to-br from-[#F9FAFF] to-[#F4F6FB] dark:from-[#0D0D16] dark:to-[#1A1A2E] min-h-screen transition-colors duration-300">
      <ScrollToTop/>
      <header>
      <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
      <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
