// Packages
import { useState } from "react";

// Components
import WhatsApp from "../components/Communication/WhatsApp";
import Footer from "../components/Footer";

// JSON
import itServices from "../assets/json/itServices.json";

const Support = () => {
  const [selectedService, setSelectedService] = useState("Overview");

  return (
    <div className="support bg-gradient-orange">
      <WhatsApp />
      <div className="filler"></div>
      <div className="support__container">
        <div data-aos="fade">
          <h3
            onClick={(e) => setSelectedService(e.target.innerText)}
            className={
              selectedService === "Overview"
                ? "txt-description-large-white"
                : "txt-description-large-grey"
            }
          >
            Overview
          </h3>
          {itServices.map((service) => {
            return (
              <h3
                onClick={(e) => setSelectedService(e.target.innerText)}
                key={service.title}
                className={
                  selectedService === service.title
                    ? "txt-description-large-white"
                    : "txt-description-large-grey"
                }
              >
                {service.title}
              </h3>
            );
          })}
        </div>
        <div>
          {selectedService === "Overview" ? (
            <h1 className="txt-header-large-white" data-aos="fade-up">
              <i className="fas fa-user-cog"></i>
              IT Support
              <span className="txt-description-large-grey">
                Toggle one of the services for more information
              </span>
            </h1>
          ) : (
            itServices.map((service) => {
              return (
                selectedService === service.title && (
                  <div
                    className="support__services__detail__container"
                    data-aos="fade-up"
                  >
                    <i class={service.icon}></i>
                    <h2 className="txt-header-large-white">{service.title}</h2>
                    <ul>
                      {service.detail.map((detail) => {
                        return (
                          <li className="txt-description-small-white">
                            {detail}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
