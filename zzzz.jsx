 {/* dashboard mobile dropdown menu  */}
            <div className=" dropdown md:hidden dashnav">
              <button
                tabIndex={0}
                role="button"
                className="  -mx-2  p-2 rounded-lg text-[#632EE3] hover:bg-[#632EE3]/10 dark:text-[#4CB5AE] dark:hover:bg-white/10 cursor-pointer"
              >
                <FaBars size={18} />
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-2  z-50 p-2 shadow bg-base-100 rounded-box min-w-40"
              >
                {navLinks}
              </ul>
            </div>