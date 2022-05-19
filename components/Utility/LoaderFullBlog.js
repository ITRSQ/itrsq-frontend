// Img
import HeroSection from "../HeroSection";
import Image from "next/image";
import Head from "next/head";
import blogIcon from "../../public/img/hero/blog.svg";

const LoaderFullBlog = () => {
  return (
    <div className="blog-container">
      <Head>
        <title>ITRSQ - Blog</title>
        <meta property="og:title" content="ITRSQ - Blog" key="title" />
      </Head>
      <HeroSection
        title={"Blog"}
        src={blogIcon}
        topTitle={"Read up on the latest news"}
      />
      <div className="mobile-navigator">
        <button className="open-more">
          {" "}
          <i className="fa fa-filter"></i>
        </button>
      </div>
      <div className="blog-page-loader">
        <div className="blog-page-core">
          <div className="main-content">
            <div className="single-main">
              <div className="main-content-div">
                <div className="img-cont"></div>
                <h1>⠀</h1>
                <p className="main-content-p"></p>
              </div>
              <div className="under-main-div">
                <div className="date-under">
                  <i className="fa fa-calendar"></i>
                  <span></span>
                </div>
                <div className="seperator-dot">
                  <i className="fa fa-circle"></i>
                </div>
                <div className="date-under">
                  <i className="fa fa-user"></i>
                  <span></span>
                </div>
                <div className="like-counter">
                  <i className="fa fa-heart"></i>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="single-main">
              <div className="main-content-div">
                <div className="img-cont"></div>
                <h1>⠀</h1>
                <p className="main-content-p"></p>
              </div>
              <div className="under-main-div">
                <div className="date-under">
                  <i className="fa fa-calendar"></i>
                  <span></span>
                </div>
                <div className="seperator-dot">
                  <i className="fa fa-circle"></i>
                </div>
                <div className="date-under">
                  <i className="fa fa-user"></i>
                  <span></span>
                </div>
                <div className="like-counter">
                  <i className="far fa-heart"></i>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="single-main">
              <div className="main-content-div">
                <div className="img-cont"></div>
                <h1>⠀</h1>
                <p className="main-content-p"></p>
              </div>
              <div className="under-main-div">
                <div className="date-under">
                  <i className="fa fa-calendar"></i>
                  <span></span>
                </div>
                <div className="seperator-dot">
                  <i className="fa fa-circle"></i>
                </div>
                <div className="date-under">
                  <i className="fa fa-user"></i>
                  <span></span>
                </div>
                <div className="like-counter">
                  <i className="far fa-heart"></i>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <div className="blog-content">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore assumenda quo adipisci ex exercitationem. Sapiente
                quas natus sit nobis facilis!
              </p>
              <div className="socials">
                <a
                  href="https://www.facebook.com/ITRSQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/itrsq2000/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/ItrsqS"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/itrsq/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCUUs-ri1zJU_mYumBbzjO6g"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@itrsq?"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
              <h3>Latest Posts</h3>
              <div className="blog-latest">
                <div className="single-item">
                  <div className="img-holder">
                    {/* <Image src="" alt="" /> */}
                  </div>
                  <div className="inner-grid">
                    <div className="title-single-line">
                      <span></span>
                    </div>
                    <div className="under-title-single-line">
                      <div className="date">
                        <i className="fa fa-calendar"></i>
                        <span></span>{" "}
                      </div>
                      <div className="seperator-dot">
                        <i className="fa fa-circle"></i>
                      </div>
                      <div className="likes">
                        <i className="fa fa-heart"></i>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="img-holder">
                    {/* <Image src="" alt="" /> */}
                  </div>
                  <div className="inner-grid">
                    <div className="title-single-line">
                      <span></span>
                    </div>
                    <div className="under-title-single-line">
                      <div className="date">
                        <i className="fa fa-calendar"></i>
                        <span></span>{" "}
                      </div>
                      <div className="seperator-dot">
                        <i className="fa fa-circle"></i>
                      </div>
                      <div className="likes">
                        <i className="far fa-heart"></i>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="img-holder">
                    {/* <Image src="" alt="" /> */}
                  </div>
                  <div className="inner-grid">
                    <div className="title-single-line">
                      <span></span>
                    </div>
                    <div className="under-title-single-line">
                      <div className="date">
                        <i className="fa fa-calendar"></i>
                        <span></span>{" "}
                      </div>
                      <div className="seperator-dot">
                        <i className="fa fa-circle"></i>
                      </div>
                      <div className="likes">
                        <i className="far fa-heart"></i>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LoaderFullBlog;
