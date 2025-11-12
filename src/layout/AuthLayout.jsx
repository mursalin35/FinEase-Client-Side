import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";



const AuthLayout = () => {
  return (
  
    <div className="bg-gradient-to-br from-[#F9FAFF] to-[#F4F6FB]">
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
