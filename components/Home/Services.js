import Image from "next/image";

// Images
import work from "../../public/img/icons/work.png";
import support from "../../public/img/icons/support.png";
import design from "../../public/img/icons/design.png";

function Services({ id }) {
  return (
    <div className="services" id={id}>
      <div className="background">
        <div className="container">
          <h1 className="services-header">What we offer</h1>
          <span className="seperator"></span>
          <p className="services-under">
            Our team will help you design and develop websites that tell your
            story and provide you with professional IT support and marketing
            services to help your project reach its full potential.
          </p>
          <div className="container-3">
            <div
              className="split-3 split-3-left rellax"
              data-rellax-xs-speed="0"
              data-rellax-mobile-speed="0"
              data-rellax-tablet-speed="1.5"
              data-rellax-desktop-speed="1.5"
            >
              <div className="img-border">
                <div className="image-container-services">
                  <Image src={design} alt="" />
                </div>
              </div>
              <span className="solo-3-span">
                <i className="fas fa-chevron-right"></i>Web Design
              </span>
              <p className="solo-3-p">
                {
                  " We'll ensure what we do corresponds to what you want by communicating with you throughout the entire process."
                }
                <br />
                <br /> Your final product will be beautiful, modern, and
                functional.
              </p>
            </div>

            <div
              className="split-3 split-3-center rellax"
              data-rellax-xs-speed="0"
              data-rellax-mobile-speed="0"
              data-rellax-tablet-speed="1"
              data-rellax-desktop-speed="1"
            >
              <div className="img-border">
                <div className="image-container-services">
                  <Image src={work} alt="" />
                </div>
              </div>
              <span className="solo-3-span">
                <i className="fas fa-chevron-right"></i>Web Development
              </span>
              <p className="solo-3-p">
                Once the design and concepts are validated, we begin to build/
                building your website. <br />
                <br />
                To cater to your every need, we code a complete solution from
                scratch (frontend, backend, and database).
              </p>
            </div>
            <div
              className="split-3 split-3-right rellax"
              data-rellax-xs-speed="0"
              data-rellax-mobile-speed="0"
              data-rellax-tablet-speed="1.3"
              data-rellax-desktop-speed="1.3"
            >
              <div className="img-border">
                <div className="image-container-services">
                  <Image src={support} alt="" />
                </div>
              </div>
              <span>
                <i className="fas fa-chevron-right"></i>IT Support
              </span>
              <p>
                We will stay by your side throughout the process and beyond.{" "}
                <br />
                <br />
                If you change your mind about something – whether it be new
                designs or updates, you can count on us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
