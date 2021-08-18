// Imports
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <h1>
          Website designed by{" "}
          <span>
            <img src={logo} alt={logo} />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
