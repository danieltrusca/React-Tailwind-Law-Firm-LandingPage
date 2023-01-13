import React, { useState, useEffect } from "react";

// import logo
import Logo from "../assets/img/logo.png";

// import components
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

// import link
import { Link } from "react-scroll";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  }, []);

  return (
    <header
      className={`${
        bg && "bg-white shadow-md py-4"
      } p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link to="home">
          <img src={Logo} alt="logo" />
        </Link>

        {/* navbar */}
        <Navbar />

        {/* navbar mobile */}
        <NavbarMobile />
      </div>
    </header>
  );
};

export default Header;
