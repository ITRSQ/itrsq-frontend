// Packages
import { useHistory } from "react-router-dom";

const Hero = () => {
  const history = useHistory();
  return (
    <div className="container_1 hero">
      <h1 className="header_purple_gradient" data-aos="fade-right">
        Beautiful websites <br />
        With dedicated IT support
      </h1>
      <h2 className="header_small_orange" data-aos="fade" data-aos-delay={400}>
        A London-based company focused on helping and assisting clients bring
        their vision or business online, from design to deployment
      </h2>
      <button
        className="button_classic_orange"
        onClick={() => history.push("/contact")}
        data-aos="fade-up"
        data-aos-delay={600}
      >
        Ask for a quote now
      </button>
    </div>
  );
};

export default Hero;
