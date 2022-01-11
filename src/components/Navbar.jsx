import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-cream py-8">
      <div className="container flex flex-wrap mx-auto items-center gap-6 lg:gap-0">
        <div
          id="socialIcons"
          className="flex items-center justify-center gap-4 w-full lg:w-1/12"
        >
          <Link to="#">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="#">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="#">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="#">
            <FontAwesomeIcon icon={faPinterest} />
          </Link>
        </div>
        <nav className="hidden lg:flex justify-center gap-4 w-1/6">
          <NavLink to="#">HOME </NavLink>
          <NavLink to="#">ABOUT</NavLink>
        </nav>
        <span className="font-bold text-2xl w-full lg:w-1/2 tracking-widest text-center">
          OLIVIA GRACE
        </span>
        <nav className="hidden lg:flex gap-4 w-1/6">
          <NavLink to="#">SERVICES </NavLink>
          <NavLink to="#">CONTACT</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
