// Packages
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

// Logo
import logo from "../assets/img/logo.png";

const Header = () => {
  const location = useLocation();
  // States
  const [burgerModal, setBurgerModal] = useState(false);

  return (
    <div className="header">
      {burgerModal && (
        <div className="burger-modal" data-aos="slide-right">
          <i class="fas fa-times" onClick={() => setBurgerModal(false)}></i>
          <Link
            to="/"
            className="txt-header-medium-dynamic"
            onClick={() => setBurgerModal(false)}
          >
            Home
          </Link>
          <Link
            to="/website"
            className="txt-header-medium-dynamic"
            onClick={() => setBurgerModal(false)}
          >
            Website
          </Link>
          <Link
            to="/support"
            className="txt-header-medium-dynamic"
            onClick={() => setBurgerModal(false)}
          >
            IT Support
          </Link>
          {/* <Link
            to="/blog"
            className="txt-header-medium-dynamic"
            onClick={() => setBurgerModal(false)}
          >
            Blog
          </Link> */}
          <Link
            to="/about"
            className="txt-header-medium-dynamic"
            onClick={() => setBurgerModal(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="txt-header-medium-dynamic"
            onClick={() => setBurgerModal(false)}
          >
            Contact
          </Link>
        </div>
      )}
      <div className="header__container">
        <GiHamburgerMenu
          className="burger-menu"
          onClick={() => setBurgerModal(true)}
        />
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
            </Link>
            <Link
              to="/website"
              className={
                location.pathname === "/website"
                  ? "header__clicked"
                  : "underline-grow"
              }
            >
              Website
            </Link>
            <Link
              to="/support"
              className={
                location.pathname === "/support"
                  ? "header__clicked"
                  : "underline-grow"
              }
            >
              IT Support
            </Link>
            {/* <Link
              to="/blog"
              className={
                location.pathname === "/blog"
                  ? "header__clicked"
                  : "underline-grow"
              }
            >
              Blog
            </Link> */}
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "header__clicked"
                  : "underline-grow"
              }
            >
              About
            </Link>
          </div>
        </div>
        <Link to="/contact" className="btn-classic-blue ">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
