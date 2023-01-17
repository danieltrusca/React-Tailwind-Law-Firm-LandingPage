import React, { useState } from "react";

// import navbar data
import { navigation } from "../data";

// import link
import { Link } from "react-scroll";

// import icons
import BarsIcon from "../assets/img/bars.png";
import CloseIcon from "../assets/img/close.png";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex lg:hidden relative z-20 ">
      {/* menu icon */}
      <button onClick={() => setIsOpen(true)}>
        <img src={BarsIcon} alt="mobile icon" />
      </button>

      {/* navbar list */}
      <ul
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-primary text-white fixed top-0 w-full h-screen transition-all duration-300 flex flex-col items-center justify-center space-y-8 text-lg`}
      >
        {/* close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 left-6"
        >
          <img src={CloseIcon} alt="mobile icon" />
        </button>
        {navigation.map((item, index) => (
          <li key={index}>
            <Link
              to={item.href}
              onClick={() => setIsOpen(false)}
              activeClass="active"
              spy={true}
              offset={-200}
              className="cursor-pointer hover:text-accent-hover transition-all duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMobile;
