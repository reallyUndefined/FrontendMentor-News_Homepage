import { useState } from "react";
import { createPortal } from "react-dom";
import logo from "../images/logo.svg";
import menuIcon from "../images/icon-menu.svg";
import closeIcon from "../images/icon-menu-close.svg";

const Header = () => {
  const [showNavDrawer, setShowNavDrawer] = useState(false);

  const navLinks = [
    <a href="/">Home</a>,
    <a href="/">New</a>,
    <a href="/">Popular</a>,
    <a href="/">Trending</a>,
    <a href="/">Categories</a>,
  ];

  return (
    <header className="flex items-center justify-between py-7">
      <img className="h-7 lg:h-10" src={logo} alt="logo" />
      <nav className="hidden md:flex items-center gap-9 [&>*:hover]:text-softRed">
        {navLinks}
      </nav>
      <button
        className="md:hidden"
        aria-label="menu"
        onClick={() => setShowNavDrawer(true)}
      >
        <img src={menuIcon} alt="" />
      </button>
      {showNavDrawer &&
        createPortal(
          <div className="absolute inset-0 w-full h-full flex md:hidden">
            <div
              className="w-[30vw] bg-gray-800/60"
              onClick={() => setShowNavDrawer(false)}
            ></div>
            <div className="w-[70vw] bg-white py-6 px-5">
              <button
                className="w-8 h-max block ml-auto"
                aria-label="close menu"
                onClick={() => setShowNavDrawer(false)}
              >
                <img src={closeIcon} alt="" />
              </button>
              <div className="mt-[5.625rem] grid gap-4 text-[1.125rem] text-darkGrayishBlue">
                {navLinks}
              </div>
            </div>
          </div>,
          document.getElementById("mobNavPortal")!
        )}
    </header>
  );
};

export default Header;
