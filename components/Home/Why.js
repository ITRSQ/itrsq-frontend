import { useState } from "react";
import Image from "next/image";

import coding from "../../public/img/coding.svg";
import one from "../../public/img/icons/1.png";
import two from "../../public/img/icons/2.png";
import three from "../../public/img/icons/3.png";
import four from "../../public/img/icons/4.png";
import five from "../../public/img/icons/5.png";

function Why({ id }) {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="home__why" id={id}>
      <div className="why_container">
        <div
          className="left-side"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay={100}
        >
          <Image src={coding} alt="" />
        </div>
        <div
          className="right-side"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay={150}
        >
          <div className="tab">
            <h1 className={toggleState === 1 ? "toggled-tab" : "hidden-tab"}>
              Your website
            </h1>
            <h1 className={toggleState === 2 ? "toggled-tab" : "hidden-tab"}>
              Less monthly costs
            </h1>
            <h1 className={toggleState === 3 ? "toggled-tab" : "hidden-tab"}>
              Optimisation
            </h1>
            <h1 className={toggleState === 4 ? "toggled-tab" : "hidden-tab"}>
              Security
            </h1>
            <h1 className={toggleState === 5 ? "toggled-tab" : "hidden-tab"}>
              Originality
            </h1>
            <span className="seperator"></span>
            <p className={toggleState === 1 ? "toggled-tab" : "hidden-tab"}>
              Pages built on site builders stay on site builders (the same site
              builder). There is no easy way to transfer them out because the
              source code of your page is translated into metadata. This means
              if you decide you want to change to a different hosting platform,
              you will have to rebuild your website from scratch.
            </p>
            <p className={toggleState === 2 ? "toggled-tab" : "hidden-tab"}>
              If you don’t want to provide free advertising for the service you
              built your site on, or you don’t want to have any restrictions
              over what you can do on your own site, you’ll have to pay extra
              for it, and the price will be typically higher than it would be
              for normal hosting.
            </p>
            <p className={toggleState === 3 ? "toggled-tab" : "hidden-tab"}>
              Personalised code is nearly always more efficient. The source code
              of ready- made websites is not minimalistic by any means since it
              must be very adaptable and also hosts mandatory advertisement
              information. This increases the chance of your site failing on a
              technical level.
            </p>
            <p className={toggleState === 4 ? "toggled-tab" : "hidden-tab"}>
              {" "}
              Now ready-made websites aren’t by any means weak in terms of
              security. However, since they’re based on a same model everytime,
              they’re an attractive target for hackers. It’s much more worth
              hacking a model that has been using countless of times rather than
              a single website.
              <br />
              <br /> Furthermore, security can be adapted to your needs and our
              standards and the code behind your website will only be accessible
              to you and those you wish to authorise.
            </p>
            <p className={toggleState === 5 ? "toggled-tab" : "hidden-tab"}>
              Have you ever noticed that some websites have a lot in common?
              That’s the problem of template-based design. There’s nothing wrong
              with templates if you’re properly customizing them and turning
              them into something completely original, but huge numbers of
              people just seem to be too lazy for that. <br />
              <br />
              The result of that lack of effort is going to be less customers
              for you (or your client) because they don’t see your site as
              offering anything unique. This gives you the custom edge, no one
              else is going to have the same layout to you or the same content.
            </p>
          </div>
          <div
            className="tabs"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={300}
          >
            <div className="row">
              <div
                className={toggleState === 1 ? "tab-box active" : "tab-box"}
                onClick={() => toggleTab(1)}
              >
                <div className="tab-title">Your website</div>
                <div className="tab-icon">
                  <Image src={one} alt="" height="30" width="30" />
                </div>
              </div>
              <div
                className={toggleState === 2 ? "tab-box active" : "tab-box"}
                onClick={() => toggleTab(2)}
              >
                <div className="tab-title">Less monthly costs</div>
                <div className="tab-icon">
                  <Image src={two} alt="" height="30" width="30" />
                </div>
              </div>
              <div
                className={toggleState === 3 ? "tab-box active" : "tab-box"}
                onClick={() => toggleTab(3)}
              >
                <div className="tab-title">Optimisation</div>
                <div className="tab-icon">
                  <Image src={three} alt="" height="30" width="30" />
                </div>
              </div>
              <div
                className={toggleState === 4 ? "tab-box active" : "tab-box"}
                onClick={() => toggleTab(4)}
              >
                <div className="tab-title">Security</div>
                <div className="tab-icon">
                  <Image src={four} alt="" height="30" width="30" />
                </div>
              </div>
              <div
                className={toggleState === 5 ? "tab-box active" : "tab-box"}
                onClick={() => toggleTab(5)}
              >
                <div className="tab-title">Originality</div>
                <div className="tab-icon">
                  <Image src={five} alt="" height="30" width="30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Why;
