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
</ul>;




  // ✅ Step 5: Toggle switch
  const handleTheme = (checked) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };






// ✅ Step 7: Profile dropdown + toggle button
  const profileLinks = (
    <>
      <li>
        <NavLink
          to="/myProfile"
          className="flex items-center gap-1"
          onClick={() => document.activeElement.blur()}
        >
          <GoHomeFill /> My Profile
        </NavLink>
      </li>

      {/* Theme toggle */}
      <div className="flex items-center gap-2 mt-3 px-2">
        <span className="text-sm">{theme === "dark" ? "🌙" : "☀️"}</span>
        <input
          type="checkbox"
          className="toggle"
          checked={theme === "dark"}
          onChange={(e) => handleTheme(e.target.checked)}
        />
      </div>
    </>
  );
