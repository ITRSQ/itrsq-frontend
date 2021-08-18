// Packages
import { Link, useLocation } from "react-router-dom";

// Logo
import logo from "../assets/img/logo.png";

const Header = () => {
  const location = useLocation();
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
          className="btn-classic"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
