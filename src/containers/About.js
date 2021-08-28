// Components
import Footer from "../components/Footer";
import WhatsApp from "../components/Communication/WhatsApp";

// Img
import logo from "../assets/img/logo.png";
import ruth from "../assets/img/ruth.jpg";
import aaron from "../assets/img/aaron.jpg";

// JSON
import team from "../assets/json/team.json";

const About = () => {
  return (
    <div className="about bg-gradient-orange">
      <WhatsApp />
      <div></div>
      <div className="about__container">
        <div>
          <img src={logo} alt={logo} />
          <p className="txt-description-small-white">
            We are an all rounder IT solutions company, based in London. Started
            in 2017 and continously growing. We deal with anything from
            supporting Phones to servers as well as Web Development. We have a
            proactive team that are willing to go that extra mile to cater to
            your needs. We believe in Value, Trust and Transparency.
          </p>
        </div>
        <div>
          <div>
            {team.map((member) => {
              return (
                <div>
                  {member.name === "Ruth Miller" && (
                    <img src={ruth} alt={ruth} />
                  )}
                  {member.name === "Aaron Raha" && (
                    <img src={aaron} alt={aaron} />
                  )}
                  {member.name === "Julian Tran" && (
                    <img src={member.picture} alt={member.picture} />
                  )}
                  <h2 className="txt-description-small-white">{member.name}</h2>
                  <h3 className="txt-description-small-black">
                    {member.position}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
