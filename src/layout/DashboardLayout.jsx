import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { FaBars, FaHome, FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import useTheme from "../hooks/useTheme";
import ScrollToTop from "../components/ScrollToTop";
import { IoDocumentText } from "react-icons/io5";
import { BiSolidReport } from "react-icons/bi";
import { TbTransformFilled } from "react-icons/tb";

const DashboardLayout = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    navigate("/");
  };

  const mainMenu = [
    { name: "Overview", icon: <FaHome />, path: "/dashboard" },
    {
      name: "Add Transaction",
      icon: <TbTransformFilled />,
      path: "/dashboard/add-transaction",
    },
    {
      name: "My Transactions",
      icon: <IoDocumentText />,
      path: "/dashboard/my-transactions",
    },
    { name: "Reports", icon: <BiSolidReport />, path: "/dashboard/reports" },
    { name: "My Profile", icon: <FaUser />, path: "/dashboard/profile" },
  ];


  return (
    <div className="flex min-h-screen font-inter ">
      <ScrollToTop />

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`hidden md:block fixed top-0 left-0 h-screen w-64
        bg-gradient-to-b from-[#632EE3] to-[#4CB5AE]
        dark:from-[#1A1440] dark:to-[#0E3A3A]
        text-white shadow-[0_10px_40px_rgba(99,46,227,0.25)]
        flex flex-col justify-between transition-transform duration-300 z-50
       `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b-[1.5px] dark:border-b border-white/30 dark:border-white/20">
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold  text-3xl"
            >
              FinEase
            </Link>
          </div>

          {/* Menu */}
          <ul className="flex-1 p-4 space-y-2">
            {mainMenu.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 rounded-[0.75rem] text-sm transition-all
                    ${
                      isActive
                        ? "bg-white/90 text-[#632EE3] font-semibold shadow"
                        : "text-white/90 hover:bg-white/20 hover:text-white"
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Logout */}
          <div className="p-4 border-t border-white/20">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-2.5 rounded-[0.75rem]
              text-white hover:text-red-500 hover:bg-white transition cursor-pointer"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Navbar */}
        <header
          className="flex justify-between items-center h-16 px-6
        bg-white/90 dark:bg-[#14173A]/80 backdrop-blur
        border-b border-[#E2E0F5] dark:border-white/10
        sticky top-0 z-30"
        >
          <div className="flex items-center gap-4 ">
            {/* dashboard mobile dropdown menu  */}
            <div className=" dropdown md:hidden ">
              <button
                tabIndex={0}
                role="button"
                className="  -mx-2  p-2 rounded-lg text-[#632EE3] hover:bg-[#632EE3]/10 dark:text-[#4CB5AE] dark:hover:bg-white/10 cursor-pointer"
              >
                <FaBars size={18} />
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-2  z-50 p-2 bg  shadow bg-[#6ea4cd] rounded-box min-w-50"
              >
                {mainMenu.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      onClick={() => document.activeElement.blur()}
                      end
                      className={({ isActive }) =>
                        `mt-2
                    ${
                      isActive
                        ? "bg-white/90 text-[#632EE3] font-semibold shadow"
                        : "text-white/90 hover:bg-white/20 hover:text-white"
                    }`
                      }
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                ))}

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full px-2 py-1 rounded-lg my-2 border-t
              text-white hover:text-red-500 hover:bg-white transition cursor-pointer"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </ul>
            </div>

            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold text-[#1F1F2E] dark:text-white"
            >
              <FaHome className="text-[#632EE3]" /> Dashboard
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center md:gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-[#632EE3]/10 dark:hover:bg-white/10 cursor-pointer "
            >
              {theme === "dark" ? (
                <MdOutlineLightMode className="text-[#4CB5AE] text-xl" />
              ) : (
                <MdDarkMode className="text-[#632EE3] text-xl" />
              )}
            </button>

            <button className="flex items-center gap-3">
              <div className="text-right">
                <span className="hidden md:block text-xs font-semibold text-gray-500">
                  Profile
                </span>
                <p className="hidden md:block font-medium text-[#1F1F2E] dark:text-white text-sm ">
                  {user?.displayName || "User"}
                </p>
              </div>

              <img
                src={user?.photoURL || "https://i.ibb.co/2FsfXqM/user.png"}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-[#632EE3]"
              />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8 overflow-auto text-[#1F1F2E] dark:text-[#E5E7EB]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
