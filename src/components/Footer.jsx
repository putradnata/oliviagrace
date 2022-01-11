import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col items-center justify-center gap-10 lg:flex lg:flex-row">
      <nav className="flex flex-col text-center lg:flex lg:flex-row justify-center gap-4">
        <NavLink to="#">HOME </NavLink>
        <NavLink to="#">ABOUT</NavLink>
        <NavLink to="#">SERVICES </NavLink>
        <NavLink to="#">CONTACT</NavLink>
      </nav>
      <div id="socialIcons" className="flex items-center justify-center gap-4">
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
      <div className="flex">
        <span>Copyright {new Date().getFullYear()}</span>
        <span className="uppercase"> | Olivia Grace</span>
      </div>
    </footer>
  );
};

export default Footer;
