// Packages
import { useHistory } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Website = () => {
  const history = useHistory();
  return (
    <div className="website bg-gradient-orange">
      <div className="hero">
        <div className="hero__container">
          {" "}
          <h1 data-aos="fade-up">
            Portfolio ? <br />
            E-Commerce ? <br />
            Blog? <br />
            We've got you covered 😉
          </h1>
          <h2 data-aos="fade-up" data-aos-delay={200}>
            Just tell us what you want and get yourself an online presence
            worthy of your ideas
          </h2>
          <div data-aos="fade-up" data-aos-delay={400}>
            {" "}
            <button
              className="btn-classic"
              // onClick={() => history.push("/contact")}
            >
              Ask for a quote now
            </button>
          </div>
        </div>
        <IoIosArrowDown
          data-aos="fade"
          data-aos-delay={600}
          className="icn-arrow-down"
          onClick={() =>
            document
              .getElementById("whatWeUse")
              .scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <div className="container-full-white" id="whatWeUse">
        {" "}
        <div className="website__how">
          <h1 className="txt-header-large-dynamic">How it works</h1>
        </div>
      </div>
    </div>
  );
};

export default Website;
