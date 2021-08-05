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
          <Link
            to="/"
            className={
              location.pathname === "/" ? "header__clicked" : "underline-grow"
            }
          >
            Home
          </Link>{" "}
          <Link
            to="/support"
            className={
              location.pathname === "/support"
                ? "header__clicked"
                : "underline-grow"
            }
          >
            IT Support
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
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "header__clicked"
                : "underline-grow"
            }
          >
           Contact
          </Link>
          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "header__clicked"
                : "underline-grow"
            }
          >
            About Us
          </Link>{" "}
        </div>
        <img src={logo} alt={logo} className="header__logo" />
      </div>
    </div>
  );
};

export default Header;
