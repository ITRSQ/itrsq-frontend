// Packages
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

// Logo
import logo from "../public/img/logo.svg";
import logo_orange from "../public/img/logo_orange.svg";
import original from "../public/img/original-logo.png";
import WhatsApp from "./Communication/WhatsApp.js";

export default function Header({ userToken, setTokenAndId }) {
  const router = useRouter();

  // States
  const [burgerModal, setBurgerModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [changePath, setPath] = useState();

  // Logout Handle
  const logoutHandle = (e) => {
    setTokenAndId();
    setProfileModal(!profileModal);
    setBurgerModal(false);
    router.push("/");
    setPath(e.target.pathname);
  };

  const menuOn = () => {
    setBurgerModal(!burgerModal);
    document.body.style.overflowY = burgerModal ? "scroll" : "hidden";
  };
  const menuOff = (e) => {
    setBurgerModal(!burgerModal);
    setPath(e.target.innerText);
    router.push("/");
    document.body.style.overflowY = burgerModal ? "scroll" : "hidden";
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="main-head">
          <div className="header__logo">
            <Image
              src={logo}
              alt={logo}
              onClick={() => router.push("/")}
              height="46"
              width="120"
            />
          </div>

          <div>
            <Link passHref href="/">
              <span
                className={
                  router.pathname === "/" ? "header__clicked" : "underline-grow"
                }
              >
                Home
              </span>
            </Link>

            <Link passHref href="/website">
              <span
                className={
                  router.pathname === "/website"
                    ? "header__clicked"
                    : "underline-grow"
                }
              >
                {" "}
                Website
              </span>
            </Link>
            <Link passHref href="/support">
              <span
                className={
                  router.pathname === "/support"
                    ? "header__clicked"
                    : "underline-grow"
                }
              >
                {" "}
                IT Support
              </span>
            </Link>
            <Link passHref href="/blog">
              <span
                className={
                  router.pathname === "/blog"
                    ? "header__clicked"
                    : "underline-grow"
                }
              >
                {" "}
                Blog
              </span>
            </Link>
            <Link passHref href="/tools">
              <span
                className={
                  router.pathname === "/tools"
                    ? "header__clicked"
                    : "underline-grow"
                }
              >
                {" "}
                Tools
              </span>
            </Link>

            <Link passHref href="/about">
              <span
                className={
                  router.pathname === "/about"
                    ? "header__clicked"
                    : "underline-grow"
                }
              >
                {" "}
                About
              </span>
            </Link>
          </div>
        </div>
        <div>
          {/* <div>
            <i
              className="fas fa-user login-icon"
              onClick={() => {
                setProfileModal(!profileModal);
              }}
            ></i>
            {profileModal && (
              <div className="header__profileModal">
                {userToken ? (
                  <>
                    {userToken === "Icj9uXDIVFuXffUpiGH1FhFLkwJxvePF" ? (
                      <Link
                        passHref href="/admin"
                        onClick={() => setBurgerModal(false)}
                        data-aos="fade-down"
                        data-aos-delay={100}
                      >
                        Admin
                      </Link>
                    ) : (
                      <>
                        <Link
                          passHref href="/projects"
                          onClick={() => setBurgerModal(false)}
                          data-aos="fade-down"
                          data-aos-delay={100}
                        >
                          Projects
                        </Link>
                        <Link
                          passHref href="/settings"
                          onClick={() => setBurgerModal(false)}
                          data-aos="fade-down"
                          data-aos-delay={200}
                        >
                          Settings
                        </Link>
                      </>
                    )}
                    <a data-aos="fade-down" onClick={() => logoutHandle()}>
                      Logout
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      passHref href="/login"
                      className="login-button"
                      data-aos="fade-down"
                      data-aos-delay={100}
                      onClick={() => {
                        setProfileModal(!profileModal);
                      }}
                    >
                      Login
                    </Link>
                    <Link
                      passHref href="/signup"
                      className="login-button"
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

          <button className="contact-btn btn-main orange-color">
            <Link passHref href="/contact">
              <span>Contact</span>
            </Link>
          </button>
          <span onClick={() => menuOn()} className="btn-collider">
            <span className="burger-bnt"></span>
          </span>
        </div>
      </div>
      {burgerModal && (
        <div
          className="burger-modal"
          data-aos="slide-right"
          data-aos-duration="100"
          data-aos-easing="ease-in-out"
        >
          <div className="logo-plus-close">
            <Image
              width="100"
              height="100"
              src={logo_orange}
              alt="ITRSQ LOGO"
              className="header__logo"
              onClick={(e) => menuOff(e)}
            />
            <i className="fas fa-times icn-x" onClick={() => menuOn()}></i>
          </div>
          <div className="menu-list">
            <div
              className={"btn-wrapper " + (changePath === "HOME" && "active")}
            >
              <Link passHref href="/">
                <span onClick={(e) => menuOff(e)} className="menu-mobile-text">
                  Home
                </span>
              </Link>
            </div>
            <div
              className={
                "btn-wrapper " + (changePath === "WEBSITE" && "active")
              }
            >
              <Link passHref href="/website">
                <span className="menu-mobile-text" onClick={(e) => menuOff(e)}>
                  {" "}
                  Website
                </span>
              </Link>
            </div>
            <div
              className={
                "btn-wrapper " + (changePath === "IT SUPPORT" && "active")
              }
            >
              <Link passHref href="/support">
                <span className="menu-mobile-text" onClick={(e) => menuOff(e)}>
                  {" "}
                  IT Support
                </span>
              </Link>
            </div>
            <div
              className={"btn-wrapper " + (changePath === "BLOG" && "active")}
            >
              <Link passHref href="/blog">
                <span className="menu-mobile-text" onClick={(e) => menuOff(e)}>
                  Blog
                </span>
              </Link>
            </div>
            <div
              className={"btn-wrapper " + (changePath === "TOOLS" && "active")}
            >
              <Link passHref href="/tools">
                <span className="menu-mobile-text" onClick={(e) => menuOff(e)}>
                  Tools
                </span>
              </Link>
            </div>
            <div
              className={"btn-wrapper " + (changePath === "ABOUT" && "active")}
            >
              <Link passHref href="/about">
                <span className="menu-mobile-text" onClick={(e) => menuOff(e)}>
                  About
                </span>
              </Link>
            </div>
            <div
              className={
                "btn-wrapper " + (changePath === "CONTACT" && "active")
              }
            >
              <Link passHref href="/contact">
                <span className="menu-mobile-text" onClick={(e) => menuOff(e)}>
                  Contact
                </span>
              </Link>
            </div>

            {/* {userToken ? (
              <>
                {userToken === "Icj9uXDIVFuXffUpiGH1FhFLkwJxvePF" ? (
                  <Link
                    passHref
                    href="/admin"
                    className="txt-header-medium-dynamic"
                    onClick={() => setBurgerModal(false)}
                  >
                    Admin
                  </Link>
                ) : (
                  <>
                    <Link
                      passHref
                      href="/projects"
                      className="txt-header-medium-dynamic"
                      onClick={() => setBurgerModal(false)}
                    >
                      Projects
                    </Link>
                    <Link
                      passHref
                      href="/settings"
                      className="txt-header-medium-dynamic"
                      onClick={() => setBurgerModal(false)}
                    >
                      Settings
                    </Link>
                  </>
                )}
                <a
                  className="txt-header-medium-dynamic"
                  onClick={() => logoutHandle()}
                  passHref
                  href="/#"
                >
                  Logout
                </a>
              </>
            ) : (
              <>
                <Link
                passHref href="/login"
                className="txt-header-medium-dynamic"
                onClick={() => setBurgerModal(false)}
              >
                Login
              </Link>
              <Link
                passHref href="/signup"
                className="txt-header-medium-dynamic"
                onClick={() => setBurgerModal(false)}
              >
                Signup
              </Link>
              </>
            )} */}
          </div>
          <div className="bottom-socials-holder">
            <div className="bottom-socials-app">
              <div className="socials">
                <a
                  passHref
                  href="https://www.facebook.com/ITRSQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  passHref
                  href="https://www.instagram.com/itrsq2000/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  passHref
                  href="https://twitter.com/ItrsqS"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  passHref
                  href="https://www.linkedin.com/company/itrsq/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  passHref
                  href="https://www.youtube.com/channel/UCUUs-ri1zJU_mYumBbzjO6g"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  passHref
                  href="https://www.tiktok.com/@itrsq?"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
