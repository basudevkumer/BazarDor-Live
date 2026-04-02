import React, { useState } from "react";
import Container from "../common/Container";
import { navItems } from "../../helper/projectArryObj";
import allIcons from "../../helper/iconProvider";
import CommonLogo from "./CommonLogo";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { search, authIcon, bar, cross } = allIcons;
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      {/* TOP ROW */}
      <div className="py-3 md:py-4 border-b border-gray-100 shadow-sm">
        <Container>
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <CommonLogo />
            </div>

            <div className="hidden sm:flex border-[1.5px] border-gray-200 hover:border-[#3bb77e] focus-within:border-[#3bb77e] flex-1 max-w-[500px] relative px-5 py-2.5 rounded-[40px] transition-all duration-200 bg-gray-50 focus-within:bg-white">
              <input
                type="text"
                placeholder="এখানে সার্চ করুন"
                className="w-full para-normal text-black placeholder:text-gray-400 bg-transparent"
              />
              <span className="absolute top-1/2 -translate-y-1/2 right-4 text-xl text-[#3bb77e]">
                {search}
              </span>
            </div>

            {/* Right side — buttons + hamburger */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Buttons —*/}
              <div className="hidden md:flex gap-2">
                <button className="flex items-center gap-1.5 border-[1.5px] border-[#3bb77e] text-[#3bb77e] hover:bg-[#f0fdf7] active:scale-95 font-semibold rounded-xl px-4 py-2 text-sm transition-all duration-200 whitespace-nowrap">
                  <span>{authIcon[0].icon}</span>
                  নিবন্ধন
                </button>
                <button className="flex items-center gap-1.5 bg-[#3bb77e] hover:bg-[#2ea06a] active:scale-95 text-white font-semibold rounded-xl px-4 py-2 text-sm transition-all duration-200 whitespace-nowrap">
                  <span>{authIcon[1].icon}</span>
                  লগইন
                </button>
              </div>

              {/* Hamburger — */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex items-center justify-center text-[28px]   rounded-lg text-[#253d4e]  hover:text-[#3bb77e] transition-all duration-200 "
              >
                {menuOpen ? <span>{cross}</span> : <span>{bar}</span>}
              </button>
            </div>
          </div>

          {/* Mobile search bar  */}
          <div className="sm:hidden mt-3 flex border-[1.5px] border-gray-200 focus-within:border-[#3bb77e] relative px-4 py-2.5 rounded-[40px] transition-all duration-200 bg-gray-50 focus-within:bg-white">
            <input
              type="text"
              placeholder="এখানে সার্চ করুন"
              className="w-full text-sm text-black placeholder:text-gray-400 bg-transparent"
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-4 text-lg text-[#3bb77e]">
              {search}
            </span>
          </div>
        </Container>
      </div>

      {/* BOTTOM NAV — desktop */}
      <div className="hidden lg:block bg-[#f8fffe] border-b border-[#eef7f3] py-1">
        <Container>
          <ul className="flex justify-center gap-x-1">
            {navItems.map((items) => (
              <li key={items.id}>
                <Link
                  to={items.path}
                  className={`navitems block px-5 py-3 relative transition-colors `}
                >
                  {items.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-md">
          <Container>
            <ul className="flex flex-col py-2">
              {navItems.map((items) => (
                <li key={items.id}>
                  <Link
                    to={items.path}
                    onClick={() => setMenuOpen(false)}
                    className={`navitems block px-4 py-3 rounded-xl my-0.5 transition-colors duration-200
                      ${
                        pathname === items.path
                          ? "bg-[#e8f5ef] text-[#3bb77e]"
                          : "text-[#253d4e] hover:bg-[#f0fdf7] hover:text-[#3bb77e]"
                      }`}
                  >
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile auth buttons */}
            <div className="flex gap-3 px-4 py-4 border-t border-gray-100 md:hidden">
              <button className="flex-1 flex items-center justify-center gap-2 border-[1.5px] border-[#3bb77e] text-[#3bb77e] hover:bg-[#f0fdf7] font-semibold rounded-xl px-4 py-2.5 text-sm transition-all duration-200">
                <span>{authIcon[0].icon}</span>
                নিবন্ধন
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#3bb77e] hover:bg-[#2ea06a] text-white font-semibold rounded-xl px-4 py-2.5 text-sm transition-all duration-200">
                <span>{authIcon[1].icon}</span>
                লগইন
              </button>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
