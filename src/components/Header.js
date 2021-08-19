// Packages
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

// Logo
import logo from "../assets/img/logo.png";
import { div } from "prelude-ls";

const Header = () => {
  const location = useLocation();

  // States
  const [contactModal, setContactModal] = useState(false);
  return (
    <div className="header">
      <div className="header__container">
        <div>
          <img src={logo} alt={logo} className="header__logo" />
          <div>
            <Link
              to="/"
              className={
                location.pathname === "/" ? "header__clicked" : "underline-grow"
              }
            >
              Home
            </Link>{" "}
            <Link
              to="/website"
              className={
                location.pathname === "/website"
                  ? "header__clicked"
                  : "underline-grow"
              }
            >
              {" "}
              Website
            </Link>{" "}
            <Link
              // to="/support"
              className={
                location.pathname === "/support"
                  ? "header__clicked"
                  : "underline-grow"
              }
            >
              IT Support
            </Link>{" "}
            <Link
              // to="/about"
              className={
                location.pathname === "/about"
                  ? "header__clicked"
                  : "underline-grow"
              }
            >
              About Us
            </Link>{" "}
          </div>
        </div>
        <Link
          // to="/contact"
          className="btn-classic "
        >
          Contact Us
        </Link>
      </div>
      {contactModal && (
        <div className="contact-modal">
          <h1 className="txt-header-medium-white">
            What is your reason for contacting us ?
          </h1>
          <div>
            <button className="btn-classic">Website</button>
            <button className="btn-classic">IT Support</button>
            <button className="btn-classic">Something Else</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
