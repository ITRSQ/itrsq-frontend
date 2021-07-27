// Packages
import { Link } from "react-router-dom";

// Logo
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div>
          <Link>Home</Link>
          <Link>IT Consultancy</Link>
          <Link>Services and Pricing</Link>
          <Link>About Us</Link>
          <Link>Account</Link>
        </div>
        <img src={logo} alt={logo} className="header__logo" />
      </div>
    </div>
  );
};

export default Header;
