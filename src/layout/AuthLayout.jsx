import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";



const AuthLayout = () => {
  return (
    <div className="bg-[#FFF8F1]">
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
