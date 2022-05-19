import Image from "next/image";
import blogIcon from "../public/img/hero/blog.svg";

const HeroSection = ({ title, img, topTitle }) => {
  return (
    <div className="new-hero">
      <div className="cont">
        <div className="text-holder">
          <h1 data-aos="fade-right" data-aos-delay="200" data-aos-once="true">
            {topTitle}
          </h1>
          <div className="bread-crumbs">
            <span data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
              Home
            </span>
            <div
              className="dot"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <i className="fa fa-circle"></i>
            </div>
            <span data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
              {title}
            </span>
          </div>
        </div>
        <div
          className="new-hero-img"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <Image
            src={img === undefined ? blogIcon : img}
            alt={img}
            height={300}
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
