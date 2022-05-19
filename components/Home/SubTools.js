import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import toolsSub from "../../public/img/icons/homesubs/tools.svg";
import emailIcon from "../../public/img/tools/email.png";
import phoneIcon from "../../public/img/tools/smartphone.png";
import vatIcon from "../../public/img/tools/vat.png";
import urlIcon from "../../public/img/tools/www.png";
import hashIcon from "../../public/img/tools/hash.png";

function SubTools() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="sub-tools">
      <div className="sub-container">
        <div className="left-side">
          <div className="image-hovered">
            <Image src={toolsSub} alt="" />
          </div>
        </div>
        <div className="right-side">
          <div className="text-holder">
            <h1 data-aos="fade-right" data-aos-once="true" data-aos-delay={100}>
              Looking for tools <span>improve aid you in securing clients</span>
            </h1>
            <p
              className="under-titler"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={200}
            >
              Give our various tools a try!
            </p>
            {/* <a className="sub-btn" href="/">Get Started</a> */}
            <div
              className="tools-list"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={450}
            >
              <div className="tool-single">
                <div
                  className={
                    toggleState === 0 ? "flexed-box active" : "flexed-box"
                  }
                  onClick={() => toggleTab(0)}
                >
                  <div className="image-container-icon-tools">
                    <Image src={emailIcon} alt="" />
                  </div>
                </div>
                <div
                  className={
                    toggleState === 1 ? "flexed-box active" : "flexed-box"
                  }
                  onClick={() => toggleTab(1)}
                >
                  <div className="image-container-icon-tools">
                    <Image src={phoneIcon} alt="" />
                  </div>
                </div>
                <div
                  className={
                    toggleState === 2 ? "flexed-box active" : "flexed-box"
                  }
                  onClick={() => toggleTab(2)}
                >
                  <div className="image-container-icon-tools">
                    <Image src={vatIcon} alt="" />
                  </div>
                </div>
                <div
                  className={
                    toggleState === 3 ? "flexed-box active" : "flexed-box"
                  }
                  onClick={() => toggleTab(3)}
                >
                  <div className="image-container-icon-tools">
                    <Image src={urlIcon} alt="" />
                  </div>
                </div>
                <div
                  className={
                    toggleState === 4
                      ? "flexed-box active last"
                      : "flexed-box last"
                  }
                  onClick={() => toggleTab(4)}
                >
                  <div className="image-container-icon-tools">
                    <Image src={hashIcon} alt="" />
                  </div>
                </div>
                <Link href="/tools">
                  <a href="">Find out More</a>
                </Link>
              </div>
              <div className="main-folder">
                <div
                  className={
                    toggleState === 0 ? "inner-content-main" : "hidden-tab"
                  }
                >
                  <div className="title">Email Verification</div>
                  <p>
                    Need to verify if an email exists and can receive your
                    content ? Use this tool to validate as many addresses as you
                    need .
                  </p>
                  <div
                    className={toggleState === 0 ? "image-up" : "image-down"}
                  >
                    <Image src={emailIcon} alt="" height="350" width="350" />
                  </div>
                </div>
                <div
                  className={
                    toggleState === 1 ? "inner-content-main" : "hidden-tab"
                  }
                >
                  <div className="title">Phone Number Verification</div>
                  <p>
                    Need to verify if a phone number is valid ? Enter the number
                    with the appropriate country code and find out now .
                  </p>
                  <div
                    className={toggleState === 1 ? "image-up" : "image-down"}
                  >
                    <Image src={phoneIcon} alt="" height="350" width="350" />
                  </div>
                </div>
                <div
                  className={
                    toggleState === 2 ? "inner-content-main" : "hidden-tab"
                  }
                >
                  <div className="title">VAT Verification</div>
                  <p>VAT number validation check at your fingertips !</p>
                  <div
                    className={toggleState === 2 ? "image-up" : "image-down"}
                  >
                    <Image src={vatIcon} alt="" height="350" width="350" />
                  </div>
                </div>
                <div
                  className={
                    toggleState === 3 ? "inner-content-main" : "hidden-tab"
                  }
                >
                  <div className="title">URL Shortner</div>
                  <p>
                    Need to clean things up and make a link shorter ? Just pop
                    in your link and ITRSQ will provide you with a short, sweet
                    and shareable new link.
                  </p>
                  <div
                    className={toggleState === 3 ? "image-up" : "image-down"}
                  >
                    <Image src={urlIcon} alt="" height="350" width="350" />
                  </div>
                </div>
                <div
                  className={
                    toggleState === 4 ? "inner-content-main" : "hidden-tab"
                  }
                >
                  <div className="title">Hashtag Generator</div>
                  <p>
                    What hashtags should you put in your social media captions ?
                    How popular are they ? Stop wondering and find out now by
                    entering some text into our Hashtag finder.
                  </p>
                  <div
                    className={toggleState === 4 ? "image-up" : "image-down"}
                  >
                    <Image src={hashIcon} alt="" height="350" width="350" />
                  </div>
                </div>

                <div className="close-dots">
                  <div className="dut dot-green"></div>
                  <div className="dut dot-yellow"></div>
                  <div className="dut dot-red"></div>
                </div>
                <div className="bottom-lines">
                  <div className="dut-line"></div>
                  <div className="dut dot-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubTools;
