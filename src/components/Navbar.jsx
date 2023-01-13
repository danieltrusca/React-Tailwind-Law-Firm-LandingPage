import React from "react";

// import navbar data
import { navigation } from "../data";

// import link
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="lg:flex space-x-6 font-body font-semibold text-sm text-primary">
        {navigation.map((item, index) => (
          <li key={index}>
            <Link
              to={item.href}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-120}
              className="cursor-pointer hover:text-accent transition-all duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
