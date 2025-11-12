import { useState, useContext } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { AuthContext } from "../context/AuthContext";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  // Dropdown state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Nav links
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="flex items-center gap-1" onClick={() => setMobileOpen(false)}>
          <GoHomeFill /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-transaction" onClick={() => setMobileOpen(false)}>Add Transaction</NavLink>
      </li>
      <li>
        <NavLink to="/my-transactions" onClick={() => setMobileOpen(false)}>My Transactions</NavLink>
      </li>
      <li>
        <NavLink to="/reports" onClick={() => setMobileOpen(false)}>Reports</NavLink>
      </li>
    </>
  );

  // Profile dropdown links
  const profileLinks = (
    <>
      <li>
        <NavLink to="/myProfile" className="flex items-center gap-1" onClick={() => setProfileOpen(false)}>
          <GoHomeFill /> My Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="" className="flex items-center gap-1" onClick={() => setProfileOpen(false)}>
          <FaGear /> Settings
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar backdrop-blur-lg border border-white/20 shadow-md px-4 md:px-8 py-3 mx-auto glass-card bg-base-200 sticky top-0 z-10">
      
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[9999] p-2 shadow bg-base-100 rounded-box w-52 ${mobileOpen ? "block" : "hidden"}`}
          >
            {navLinks}
          </ul>
        </div>

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <img src="https://i.ibb.co.com/0yDRJgjJ/finans-logo.png" alt="FinEase Logo" className="h-10" />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-8">{navLinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <div className="w-9 border-2 border-gray-300 rounded-full overflow-hidden">
                <img
                  src={user.photoURL || "https://img.icons8.com/?size=100&id=0prbldgxVuTl&format=png&color=000000"}
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content min-w-48 w-auto mt-3 z-50 p-2 shadow bg-base-100 rounded-box ${profileOpen ? "block" : "hidden"}`}
            >
              <div className="pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              {profileLinks}
              <li>
                <button
                  onClick={() => { logOut(); setProfileOpen(false); }}
                  className="btn btn-sm mt-3 text-white border-none bg-gradient-to-r from-[#632ee3] to-[#00b8b0] hover:opacity-90"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-sm rounded-full text-white border-none bg-gradient-to-r from-[#632ee3] to-[#00b8b0] hover:opacity-90"
          >
            <IoLogIn /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
