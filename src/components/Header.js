// Packages
import { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

// Logo
import logo from "../assets/img/logo.png";

const Header = ({ userToken, setTokenAndId }) => {
  const history = useHistory();
  const location = useLocation();
  // States
  const [burgerModal, setBurgerModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

  // Logout Handle
  const logoutHandle = () => {
    setTokenAndId();
    setProfileModal(!profileModal);
    setBurgerModal(false);
    history.push("/");
  };

  return (
    <div className="header">
      {burgerModal && (
        <div className="burger-modal" data-aos="slide-right">
          <i
            class="fas fa-times icn-x"
            onClick={() => setBurgerModal(false)}
          ></i>
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
          <Link
            to="/blog"
            className="txt-header-medium-dynamic"
            onClick={() => setBurgerModal(false)}
          >
            Blog
          </Link>
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
          {/* {userToken ? (
            <>
              <Link
                to="/projects"
                className="txt-header-medium-dynamic"
                onClick={() => setBurgerModal(false)}
              >
                Projects
              </Link>
              <Link
                to="/settings"
                className="txt-header-medium-dynamic"
                onClick={() => setBurgerModal(false)}
              >
                Settings
              </Link>
              <a
                className="txt-header-medium-dynamic"
                onClick={() => logoutHandle()}
              >
                Logout
              </a>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="txt-header-medium-dynamic"
                onClick={() => setBurgerModal(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="txt-header-medium-dynamic"
                onClick={() => setBurgerModal(false)}
              >
                Signup
              </Link>
            </>
          )} */}
        </div>
      )}
      <div className="header__container">
        <GiHamburgerMenu
          className="burger-menu"
          onClick={() => setBurgerModal(true)}
        />
        <div>
          <img
            src={logo}
            alt={logo}
            className="header__logo"
            onClick={() => history.push("/")}
          />
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
            <Link
              to="/blog"
              className={
                location.pathname === "/blog"
                  ? "header__clicked"
                  : "underline-grow"
              }
            >
              Blog
            </Link>
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
        <div>
          {/* <div>
            <i
              class="fas fa-user"
              onClick={() => {
                setProfileModal(!profileModal);
              }}
            ></i>
            {profileModal && (
              <div className="header__profileModal">
                {userToken ? (
                  <>
                    <Link
                      to="/projects"
                      data-aos="fade-down"
                      data-aos-delay={200}
                      onClick={() => {
                        setProfileModal(!profileModal);
                      }}
                    >
                      Projects
                    </Link>
                    <Link
                      to="/settings"
                      data-aos="fade-down"
                      data-aos-delay={100}
                      onClick={() => {
                        setProfileModal(!profileModal);
                      }}
                    >
                      Settings
                    </Link>
                    <a data-aos="fade-down" onClick={() => logoutHandle()}>
                      Logout
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      data-aos="fade-down"
                      data-aos-delay={100}
                      onClick={() => {
                        setProfileModal(!profileModal);
                      }}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      data-aos="fade-down"
                      onClick={() => {
                        setProfileModal(!profileModal);
                      }}
                    >
                      Signup
                    </Link>
                  </>
                )}
              </div>
            )}
          </div> */}

          <Link to="/contact" className="btn-classic-blue ">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
