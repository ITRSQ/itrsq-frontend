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
            className={location.pathname === "/" && "header__clicked"}
          >
            Home
          </Link>
          <Link
            to="/consultancy"
            className={
              location.pathname === "/consultancy" && "header__clicked"
            }
          >
            IT Consultancy
          </Link>
          <Link
            to="/services"
            className={location.pathname === "/services" && "header__clicked"}
          >
            {" "}
            Services and Pricing
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" && "header__clicked"}
          >
            About Us
          </Link>
          <Link
            to="/account"
            className={location.pathname === "/account" && "header__clicked"}
          >
            Account
          </Link>
        </div>
        <img src={logo} alt={logo} className="header__logo" />
      </div>
    </div>
  );
};

export default Header;
