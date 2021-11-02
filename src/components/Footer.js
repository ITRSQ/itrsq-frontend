// Imports
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        {/* <h1>Follow us on</h1> */}
        <div>
          <a href="https://www.facebook.com/ITRSQ" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/itrsq2000/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/ItrsqS" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/company/itrsq/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCUUs-ri1zJU_mYumBbzjO6g"
            target="_blank"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.tiktok.com/@itrsq?" target="_blank">
            <i className="fab fa-tiktok"></i>
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
