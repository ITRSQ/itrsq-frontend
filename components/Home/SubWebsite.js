import webSub from "../../public/img/icons/homesubs/website.svg";
import Image from "next/image";
import Link from "next/link";

const SubWebsite = () => {
  return (
    <div className="sub-website">
      <div className="sub-container">
        <div className="left-side">
          <div className="text-holder">
            <h1 data-aos="fade-right" data-aos-once="true" data-aos-delay={50}>
              Looking for a beautiful, unique{" "}
              <span> and meticulously hand-crafted website ? </span>
            </h1>
            <p data-aos="fade-right" data-aos-once="true" data-aos-delay={150}>
              From Portfolio to E-Commerce, we’ve got you covered. We like to
              believe that great products come from communication and attention
              to detail, we’ll be with you every step of the way.
            </p>
            <Link href="/" passHref>
              <span
                className="sub-btn"
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-delay={300}
              >
                Get Started
              </span>
            </Link>
          </div>
        </div>
        <div
          className="right-side"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay={360}
        >
          <div className="image-hovered">
            <Image src={webSub} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubWebsite;
