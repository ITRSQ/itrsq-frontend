// Packages
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

// Components
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

// JSON
import itServices from "../public/json/itServices.json";

import imgOne from "../public/img/coding.jpg";
import supportIcon from "../public/img/hero/support.svg";

const Support = () => {
  const [selectedService, setSelectedService] = useState("fa fa-home");

  return (
    <div className="core-page">
      <Head>
        <title>ITRSQ - IT Support</title>
        <meta property="og:title" content="ITRSQ - IT Support" key="title" />
      </Head>
      <div className="support-container">
        <HeroSection
          title={"IT Support"}
          topTitle={"Need IT help?"}
          img={supportIcon}
        />

        <div className="support-list-container">
          <div className="title">Services we Offer</div>
          <div className="support-combined">
            <div className="support-tabs">
              <div
                className={
                  selectedService === "fa fa-home"
                    ? "consistent-title active"
                    : "consistent-title"
                }
              >
                <i
                  className="fa fa-home"
                  onClick={(e) => setSelectedService(e.target.className)}
                ></i>
              </div>
              {itServices.map((service) => {
                return (
                  <div
                    className={
                      selectedService === service.icon
                        ? "consistent-title active"
                        : "consistent-title"
                    }
                    key={service.title}
                  >
                    <i
                      className={service.icon}
                      onClick={(e) => setSelectedService(e.target.className)}
                    ></i>
                  </div>
                );
              })}
            </div>

            <div className="main-content">
              <div className="left-side">
                <Image src={imgOne} alt="" height="860" widht="100" />
              </div>
              <div className="right-side">
                {selectedService === "fa fa-home" ? (
                  <div className="icon-holder">
                    <i className="fas fa-user-cog"></i>
                    <div className="text-holder">
                      <h2>
                        Need Help ?
                        <span>
                          Toggle one of the services for more information
                        </span>
                      </h2>
                    </div>
                  </div>
                ) : (
                  itServices.map((service) => {
                    return (
                      selectedService === service.icon && (
                        <div key={service.title}>
                          <i className={service.icon}></i>
                          <div className="text-holder">
                            <h2 className="">{service.title}</h2>
                            <ul>
                              {service.detail.map((detail, index) => {
                                return (
                                  <p className="" key={index}>
                                    {detail}
                                  </p>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      )
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="pricing">
          <div className="text-holder">
            <h1>IT Support Costs</h1>
            <p>
              If your question is quick to resolve, ITRSQ won’t charge your for
              the service. However, if the problem requires more time and
              expertise, you’ll be able to choose from any of our IT support
              plans.
            </p>
          </div>
          <div className="pricing-list">
            <div className="single">
              <div className="top-cont">
                <h1>Starter</h1>
                <p>Suitable for indivituals</p>
              </div>
              <div className="price">
                <div className="price-inner">
                  £20 <span>mo</span>
                </div>
              </div>
              <div className="list-of-things">
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </div>
              <div className="btn subnow">Purchase Now</div>
            </div>
            <div className="single middle">
              <div className="top-cont">
                <h1>Starter</h1>
                <p>Suitable for indivituals</p>
              </div>
              <div className="price">
                <div className="price-inner">
                  £20 <span>mo</span>
                </div>
              </div>
              <div className="list-of-things">
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </div>
              <div className="btn subnow">Purchase Now</div>
            </div>
            <div className="single">
              <div className="top-cont">
                <h1>Starter</h1>
                <p>Suitable for indivituals</p>
              </div>
              <div className="price">
                <div className="price-inner">
                  £20 <span>mo</span>
                </div>
              </div>
              <div className="list-of-things">
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </div>
              <div className="btn subnow">Purchase Now</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Support;
