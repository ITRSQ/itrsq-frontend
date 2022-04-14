import supSub from "../../public/img/icons/homesubs/support.svg";
import Image from "next/image";
import Link from "next/link";

const SubSupport = () => {
  return (
    <div className="sub-support">
      <div className="sub-container">
        <div className="left-side">
          <div className="text-holder">
            <h1>
              IT Support: <span>always human, never bot </span>
            </h1>
            <p>
              Our engineers will help you resolve any IT issue you might
              struggle with. So don’t be shy, send us a message !
            </p>
            <Link href="/" passHref>
              <span className="sub-btn">Get Help</span>
            </Link>
          </div>
        </div>
        <div className="right-side">
          <div className="image-hovered">
            <Image src={supSub} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSupport;
