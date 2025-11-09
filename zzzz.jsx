import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  PlusCircle,
  List,
  BarChart2,
  User,
  Settings,
  LogOut,
  Search,
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "#", icon: Home },
  { name: "Add Transaction", href: "#", icon: PlusCircle },
  { name: "My Transactions", href: "#", icon: List },
  { name: "Reports", href: "#", icon: BarChart2 },
  { name: "Profile", href: "#", icon: User },
  { name: "Settings", href: "#", icon: Settings },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FinEaseNavbar({ active = "Reports" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a2a46] via-[#0d355a] to-[#134b79] text-white">
      <header className="sticky top-0 z-50 backdrop-blur-md">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#2EA7FF]/40 to-transparent" />

        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#0f2f4d] ring-1 ring-white/10 shadow-inner">
                <span className="text-xl font-black text-[#2EA7FF]">F</span>
              </div>
              <span className="hidden text-lg font-semibold tracking-wide sm:block">
                FinEase
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2 rounded-full bg-white/5 p-1 ring-1 ring-white/10">
              {NAV_ITEMS.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  className={classNames(
                    "group flex items-center gap-2 rounded-full px-3 py-2 text-sm transition",
                    name === active
                      ? "bg-[#2EA7FF]/10 text-white ring-1 ring-[#2EA7FF]/40"
                      : "text-white/75 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Icon className="h-4 w-4 opacity-80 group-hover:opacity-100" />
                  <span>{name}</span>
                </a>
              ))}
            </div>

            {/* Right Utility */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10 focus-within:ring-[#2EA7FF]/40">
                <Search className="h-4 w-4 opacity-70" />
                <input
                  placeholder="Search…"
                  className="w-40 bg-transparent text-sm placeholder-white/50 focus:outline-none"
                />
              </div>

              {/* Avatar */}
              <button
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/10 hover:ring-[#2EA7FF]/40"
                title="Account"
              >
                <User className="h-5 w-5" />
              </button>

              {/* Mobile toggle */}
              <button
                className="ml-1 inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:bg-white/10 hover:text-white md:hidden"
                onClick={() => setOpen(!open)}
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Panel */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-[#0c2f50]/70 backdrop-blur-lg">
            <div className="mx-auto max-w-7xl p-3">
              <div className="grid gap-1">
                {NAV_ITEMS.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    className={classNames(
                      "flex items-center gap-3 rounded-xl px-3 py-2 text-sm ring-1 ring-white/10",
                      name === active
                        ? "bg-[#2EA7FF]/10 text-white"
                        : "bg-white/5 text-white/80 hover:text-white"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="h-4 w-4 opacity-80" />
                    <span className="flex-1">{name}</span>
                  </a>
                ))}
              </div>

              <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:text-white">
                <LogOut className="h-4 w-4" /> Log out
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Content Demo */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Page Content</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          Replace this with your page content.
        </p>
      </main>
    </div>
  );
}
