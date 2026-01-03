import { GoHomeFill } from "react-icons/go";
import { IoDocumentText, IoLogIn, IoLogOut } from "react-icons/io5";
import { TbTransformFilled } from "react-icons/tb";
import { BiSolidReport } from "react-icons/bi";
import { Link, NavLink } from "react-router";
import { FaUser } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import useAuth from "../hooks/useAuth";
import logo from "../assets/logo.png";


const NavBar = () => {
  const { user, logOut } = useAuth();
  const { theme, toggleTheme } = useTheme();

  // Nav Links
  const navLinks = (
    <>
      {/* Home */}
      <li>
        <NavLink
          to="/"
          className="flex items-center gap-1"
          onClick={() => document.activeElement.blur()} // dropdown auto close
        >
          <GoHomeFill /> Home
        </NavLink>
      </li>
      {/* User Guide */}
      <li>
        <NavLink to="/user-guide" onClick={() => document.activeElement.blur()}>
          <TbTransformFilled /> User Guide
        </NavLink>
      </li>
      {/* About Us */}
      <li>
        <NavLink to="/about" onClick={() => document.activeElement.blur()}>
          <TbTransformFilled /> About Us
        </NavLink>
      </li>
      {/* Contact */}
      <li>
        <NavLink to="/contact" onClick={() => document.activeElement.blur()}>
          <TbTransformFilled /> Contact
        </NavLink>
      </li>
      {/* Add Transaction */}
      {user && (
        <li>
          <NavLink
            to="/add-transaction"
            onClick={() => document.activeElement.blur()}
          >
            <TbTransformFilled /> Add Transaction
          </NavLink>
        </li>
      )}
    </>
  );

  // Profile dropdown
  const profileLinks = (
    <>
      {/* My Profile */}
      <li>
        <NavLink to="/myProfile" onClick={() => document.activeElement.blur()}>
          <FaUser /> My Profile
        </NavLink>
      </li>
      {/* My Transactions */}
      <li>
        <NavLink
          to="/my-transactions"
          onClick={() => document.activeElement.blur()}
        >
          <IoDocumentText /> My Transactions
        </NavLink>
      </li>
      {/* Reports */}
      <li>
        <NavLink to="/reports" onClick={() => document.activeElement.blur()}>
          <BiSolidReport /> Reports
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar backdrop-blur-lg border border-white/20 shadow-md px-4 md:px-8 h-18 mx-auto glass-card bg-[#E8FAF7] dark:bg-[#1a1c25] sticky top-0 z-10">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold w-34">
          <img src={logo} alt="FinEase Logo" className="h-10 " />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden md:flex">
        <ul className={`menu menu-horizontal ${user ? "gap-4" : "gap-8"}`}>
          {navLinks}
        </ul>
      </div>
      {/* Navbar End */}
      <div className="navbar-end gap-3 ">
        {/* Theme toggle  */}
        <div className="flex items-center gap-2 px-2">
          {theme === "dark" ? "🌙" : "☀️"}
          <input
            type="checkbox"
            className="toggle"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        </div>

        {/* Profile Avetor */}
        <div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 border-2 border-gray-300 rounded-full overflow-hidden">
                  <img
                    src={
                      user.photoURL ||
                      "https://img.icons8.com/?size=100&id=0prbldgxVuTl&format=png&color=000000"
                    }
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content min-w-48 w-auto mt-3 z-50 p-2 shadow bg-base-100 rounded-box"
              >
                <div className="pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
                {profileLinks}
                <li>
                  <button
                    onClick={logOut}
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
              className="btn  btn-sm rounded-full text-white border-none bg-gradient-to-r from-[#632ee3] to-[#00b8b0] hover:opacity-90"
            >
              <IoLogIn /> Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
