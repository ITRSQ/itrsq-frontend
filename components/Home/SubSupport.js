import supSub from "../../public/img/icons/homesubs/support.svg";
import Image from "next/image";
import Link from "next/link";
import arrow from "../../public/img/icons/homesubs/arrow.svg";
const SubSupport = () => {
  return (
    <div className="sub-support">
      <div className="sub-container">
        <div className="left-side">
          <div className="text-holder">
            <h1 data-aos="fade-up" data-aos-once="true">
              IT Support: <span>always human, never bot </span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
              Our engineers will help you resolve any IT issue you might
              struggle with. So don’t be shy, send us a message !
            </p>
            <Link href="/support" passHref>
              <span
                className="sub-btn"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-once="true"
              >
                Get Help{" "}
                <i>
                  <Image src={arrow} alt="" />
                </i>
              </span>
            </Link>
          </div>
        </div>
        <div className="right-side">
          <div
            className="image-hovered"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <Image src={supSub} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSupport;
