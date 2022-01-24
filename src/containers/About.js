// Components
import Footer from "../components/Footer";
import WhatsApp from "../components/Communication/WhatsApp";

// Img
import logo from "../assets/img/logo.png";

// // JSON
// import team from "../assets/json/team.json";

const About = () => {
  return (
    <div className="about bg-gradient-orange">
      <WhatsApp />
      <div></div>
      <div className="about__container">
        <div>
          <img src={logo} alt={logo} />
          <p className="txt-description-small-white">
          An all-rounder IT solutions company, based in London. Started in 2017 and continually growing. We provide anything from Phone Support to Server Support to Web Development. We have a team of proactive individuals willing to go that extra mile to ensure your needs are met. We believe in value, trust, and transparency.
<br/>
We are a comprehensive IT solutions company based in London that handles everything from phones to servers, as well as web development. Our proactive team will go the extra mile to make sure you're satisfied. We believe in value, trust, and transparency.
<br/>

An all-encompassing IT solutions company based in London. We deal with everything from supporting phones to servers, as well as Web Development. We pride ourselves on being proactive and going the extra mile. We believe in value, trust, and transparency.
<br/>
With a team that is proactive and willing to cater to your needs
          </p>
        </div>
        {/* <div>
          <div>
            {team.map((member) => {
              return (
                <div>
                  <img src={member.picture} alt={member.picture} />

                  <h2 className="txt-description-small-white">{member.name}</h2>
                  <h3 className="txt-description-small-black">
                    {member.position}
                  </h3>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default About;
