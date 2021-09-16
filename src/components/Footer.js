// Imports
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        {/* <h1>Follow us on</h1> */}
        <div>
          <a href="https://www.facebook.com/ITRSQ" target="_blank">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/company/itrsq/" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
        <h2>
          @ 2021 - Website designed by{" "}
          {/* <span>
            <img src={logo} alt={logo} />
          </span> */}
          ITRSQ
        </h2>
      </div>
    </div>
  );
};

export default Footer;
