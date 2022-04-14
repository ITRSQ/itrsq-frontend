// Packages
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

// Components
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
// import StackInfo from "../components/About/StackInfo.js";

// Icons
import websiteIcon from "../public/img/website/pricing/1.png";
import ecIcon from "../public/img/website/pricing/2.png";
import customIcon from "../public/img/website/pricing/3.png";
import websiteheroIcon from "../public/img/hero/website.svg";

// Slides
import zero from "../public/img/website/0.svg";
import one from "../public/img/website/1.svg";
import two from "../public/img/website/2.svg";
import three from "../public/img/website/3.svg";
import four from "../public/img/website/4.svg";
import five from "../public/img/website/5.svg";

const Website = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="core-page">
      <Head>
        <title>ITRSQ - Website</title>
        <meta property="og:title" content="ITRSQ - Website" key="title" />
      </Head>
      <div className="website-container">
        <HeroSection
          title={"Website"}
          img={websiteheroIcon}
          topTitle={"Looking for a unique website?"}
        />
        <div className="website">
          <div className="website-how">
            <h1 className="main-title">How it works</h1>
            <div className="how-it-works">
              <div className={toggleState === 0 ? "text-holder" : "hidden-tab"}>
                <h1>Send us a message</h1>
                <p>
                  Start by using our contact form to send us a description of
                  your project, budget and deadline
                </p>
              </div>
              <div className={toggleState === 1 ? "text-holder" : "hidden-tab"}>
                <h1>Receive our quote</h1>
                <p>
                  {
                    " Once we've examined your proposition, we'll send you a detailed quote based on how ambitious your project is and how busy we currently are"
                  }
                </p>
              </div>
              <div className={toggleState === 2 ? "text-holder" : "hidden-tab"}>
                <h1>We start coding</h1>
                <p>
                  {
                    "             If you've accepted our quote, our team of developers and designers begin building your website"
                  }
                </p>
              </div>
              <div className={toggleState === 3 ? "text-holder" : "hidden-tab"}>
                <h1>We communicate</h1>
                <p>
                  We will keep close contact with you or whoever you put in
                  charge of managing this project
                </p>
              </div>
              <div className={toggleState === 4 ? "text-holder" : "hidden-tab"}>
                <h1>{"It's a website !"}</h1>
                <p>
                  Once your website is built and tested, you will receive all
                  credentials to claim ownership over your new baby
                </p>
              </div>
              <div className={toggleState === 5 ? "text-holder" : "hidden-tab"}>
                <h1>Maintenance</h1>
                <p>
                  {
                    "   If you change your mind about anything or something is wrong, let us know and we'll come to your assistance"
                  }
                </p>
              </div>
              <div
                className={toggleState === 0 ? "image-shown" : "image-hidden"}
              >
                <Image src={zero} alt="thumbnail" width="530" height="430" />
              </div>
              <div
                className={toggleState === 1 ? "image-shown" : "image-hidden"}
              >
                <Image src={one} alt="thumbnail" width="530" height="430" />
              </div>
              <div
                className={toggleState === 2 ? "image-shown" : "image-hidden"}
              >
                <Image src={two} alt="thumbnail" width="530" height="430" />
              </div>
              <div
                className={toggleState === 3 ? "image-shown" : "image-hidden"}
              >
                <Image src={three} alt="thumbnail" width="530" height="430" />
              </div>
              <div
                className={toggleState === 4 ? "image-shown" : "image-hidden"}
              >
                <Image src={four} alt="thumbnail" width="530" height="430" />
              </div>
              <div
                className={toggleState === 5 ? "image-shown" : "image-hidden"}
              >
                <Image src={five} alt="thumbnail" width="530" height="430" />
              </div>
            </div>
            <div className="website-inner-container">
              <div className="website-progress">
                <div className="bar">
                  <div
                    className={
                      toggleState >= 0
                        ? "single-progress active"
                        : "single-progress"
                    }
                    onClick={() => toggleTab(0)}
                  >
                    <i className="fa fa-chevron-down"></i>
                  </div>
                  <div
                    className={
                      toggleState >= 1
                        ? "single-progress active"
                        : "single-progress"
                    }
                    onClick={() => toggleTab(1)}
                  >
                    <i className="fa fa-chevron-down"></i>
                  </div>
                  <div
                    className={
                      toggleState >= 2
                        ? "single-progress active"
                        : "single-progress"
                    }
                    onClick={() => toggleTab(2)}
                  >
                    <i className="fa fa-chevron-down"></i>
                  </div>
                  <div
                    className={
                      toggleState >= 3
                        ? "single-progress active"
                        : "single-progress"
                    }
                    onClick={() => toggleTab(3)}
                  >
                    <i className="fa fa-chevron-down"></i>
                  </div>
                  <div
                    className={
                      toggleState >= 4
                        ? "single-progress active"
                        : "single-progress"
                    }
                    onClick={() => toggleTab(4)}
                  >
                    <i className="fa fa-chevron-down"></i>
                  </div>
                  <div
                    className={
                      toggleState >= 5
                        ? "single-progress active last-one"
                        : "single-progress last-one"
                    }
                    onClick={() => toggleTab(5)}
                  >
                    <i className="fa fa-check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="website-prices">
            <div className="website-prices-container">
              <h1 className="main-title">Website Packages</h1>

              <div className="website-prices-webdev">
                <div className="split-3-prices">
                  <h3>Basic</h3>
                  <div className="split-3-prices-img">
                    <Image src={websiteIcon} alt="" height="100" width="100" />
                  </div>

                  {/* <i className="fas fa-book-open"></i> */}

                  <h4>A professional website for your business or yourself.</h4>

                  <ul>
                    <li>
                      Fully bespoke website <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Mobile and tablet responsive{" "}
                      <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Secure Web Hosting <i className="fas fa-check"></i>
                    </li>
                    <li>
                      All features from Basic package{" "}
                      <i className="fas fa-times"></i>
                    </li>
                    <li>
                      Online payment <i className="fas fa-times"></i>
                    </li>
                    <li>
                      Admin management <i className="fas fa-times"></i>
                    </li>
                    <li>
                      Custom web plug-ins <i className="fas fa-times"></i>
                    </li>
                    <li>
                      Custom research and application{" "}
                      <i className="fas fa-times"></i>
                    </li>
                  </ul>

                  <span className="price">£499</span>
                </div>
                <div className="split-3-prices center">
                  <h3>E-Commerce</h3>
                  <div className="split-3-prices-img">
                    <Image src={ecIcon} alt="" height="100" width="100" />
                  </div>
                  <h4>Your very own online store.</h4>

                  <ul>
                    <li>
                      Fully bespoke website <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Mobile and tablet responsive{" "}
                      <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Secure Web Hosting <i className="fas fa-check"></i>
                    </li>
                    <li>
                      All features from Basic package{" "}
                      <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Online payment <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Admin management <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Custom web plug-ins <i className="fas fa-times"></i>
                    </li>
                    <li>
                      Custom research and application{" "}
                      <i className="fas fa-times"></i>
                    </li>
                  </ul>

                  <span className="price">£1299</span>
                </div>
                <div className="split-3-prices">
                  <h3>Custom</h3>
                  <div className="split-3-prices-img">
                    <Image src={customIcon} alt="" height="100" width="100" />
                  </div>
                  {/* <i className="fas fa-book-open"></i> */}

                  <h4>
                    {
                      "Your project doesn't fit in any of the previous packages ?"
                    }
                  </h4>

                  <ul>
                    <li>
                      Fully bespoke website <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Mobile and tablet responsive{" "}
                      <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Secure Web Hosting <i className="fas fa-check"></i>
                    </li>
                    <li>
                      All features from Basic package{" "}
                      <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Online payment <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Admin management <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Custom web plug-ins <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Custom research and application{" "}
                      <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Custom web plug-ins <i className="fas fa-check"></i>
                    </li>
                    <li>
                      Custom research and application{" "}
                      <i className="fas fa-check"></i>
                    </li>
                  </ul>

                  <span className="price">N/A</span>
                </div>
              </div>
            </div>
          </div>

          <div className="website__maintenance__prices">
            <div className="website__prices__container">
              <h1 className="main-title">Maintenance Packages</h1>

              <div className="website__prices__maintenance">
                <div
                  className="gridded-margins left"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <div className="left-side">
                    <i className="fas fa-stopwatch"></i>
                    <h3>One-time</h3>
                    <h4 className="txt-description-medium-black">
                      If you need to update your website or add something new
                    </h4>
                  </div>

                  <ul>
                    <li>Portfolio update</li>
                    <li>Add functionality</li>
                    <li>Add pages</li>
                  </ul>
                  <div className="left-side">
                    <h5>
                      Prices start from <span>£29/day</span>
                    </h5>
                  </div>
                </div>
                <div
                  className="gridded-margins"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-once="true"
                >
                  <div className="left-side">
                    <i className="fas fa-calendar"></i>
                    <h3>Monthly</h3>
                    <h4 className="txt-description-medium-black">
                      Save money by paying a monthly fee and getting the most of
                      our service
                    </h4>
                  </div>

                  <ul>
                    <li>Less individual modification charges</li>
                    <li>Customer Support</li>
                    <li>Best Value</li>
                  </ul>
                  <div className="left-side">
                    {" "}
                    <h5>
                      Prices start from <span>£39/month</span>
                    </h5>
                  </div>
                </div>
                <div
                  className="gridded-margins right"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-once="true"
                >
                  <div className="left-side">
                    {" "}
                    <i className="fas fa-drafting-compass"></i>
                    <h3>Custom</h3>
                    <h4 className="txt-description-medium-black">
                      Need to make big changes ?
                    </h4>
                  </div>

                  <ul>
                    <li>Large-scale changes</li>
                    <li>Re-design</li>
                    <li>Website upgrades</li>
                  </ul>
                  <div className="left-side">
                    {" "}
                    <h5>
                      Prices start from <span> £49</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="stack" id="what">
            <div className="stack-cont">
              <h1 className="main-title">Our Technology Stack</h1>
              <h2>
                To keep up with the ever-changing web development world, <br />{" "}
                we only use the latest programs and language versions in our
                programming.
              </h2>
              <div>
                <StackInfo />
              </div>
            </div>
          </div> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Website;
