import Image from "next/image";
import blogIcon from "../public/img/hero/blog.svg";

const HeroSection = ({ title, img, topTitle }) => {
  return (
    <div className="new-hero">
      <div className="cont">
        <div className="text-holder">
          <h1>{topTitle}</h1>
          <div className="bread-crumbs">
            <span>Home</span>
            <div className="dot">
              <i className="fa fa-circle"></i>
            </div>
            <span>{title}</span>
          </div>
        </div>
        <div className="new-hero-img">
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
