// Packages
import { useHistory } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Hero = ({ onArrow, id }) => {
  const history = useHistory();

  return (
    <div className="hero bg-gradient-orange" id={id}>
      <div className="hero__container">
        {" "}
        <h1 data-aos="fade-up">
          Beautiful websites with <br />
          dedicated IT Support
        </h1>
        <h2 data-aos="fade-up" data-aos-delay={200}>
          A London-based company dedicated to assisting clients bring their
          ideas or business online, from conception / design to implementation.
        </h2>
        <div data-aos="fade-up" data-aos-delay={400}>
          {" "}
          <button
            className="btn-classic"
            onClick={() => history.push("/contact")}
          >
            Ask for a quote now
          </button>
        </div>
      </div>
      <IoIosArrowDown
        data-aos="fade"
        data-aos-delay={600}
        className="icn-arrow-down"
        onClick={onArrow}
      />
    </div>
  );
};

export default Hero;
