// Packages
import { useHistory } from "react-router-dom";

// Components
import Footer from "../components/Footer";

// Icons
import { IoIosArrowDown } from "react-icons/io";
import { IoReceiptSharp } from "react-icons/io5";
import { SiGooglemessages } from "react-icons/si";
import { FaCodepen, FaGift } from "react-icons/fa";
import { AiTwotoneTool } from "react-icons/ai";
import { GiTalk } from "react-icons/gi";

// Logos
import htmlcssjs from "../assets/img/htmlcssjs-logo.png";
import nodejs from "../assets/img/nodejs-logo.png";
import react from "../assets/img/React-logo.png";

const Website = () => {
  const history = useHistory();
  return (
    <div className="website bg-gradient-orange">
      <div className="hero">
        <div className="hero__container">
          {" "}
          <h1 data-aos="fade-up">
            Portfolio ? Blog?
            <br />
            E-Commerce ? <br />
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
          <div className="website__how__path">
            <div data-aos="fade-up">
              <SiGooglemessages className="website__how__path__icons" />
              <h1 className="txt-header-small-black">Send us a message</h1>
              <p className="txt-description-small-black">
                Start by using our contact form to send us a description of your
                project, budget and deadline
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay={100}>
              <IoReceiptSharp className="website__how__path__icons" />
              <h1 className="txt-header-small-black">Receive our quote</h1>
              <p className="txt-description-small-black">
                Once we've examined your proposition, we'll send you a detailed
                quote based on how ambitious your project is and how busy we
                currently are
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay={200}>
              <FaCodepen className="website__how__path__icons" />
              <h1 className="txt-header-small-black">We start coding</h1>
              <p className="txt-description-small-black">
                If you've accepted our quote, our team of developers and
                designers begin building your website
              </p>
            </div>
          </div>
          <div className="website__how__path">
            <div data-aos="fade-up" data-aos-delay={300}>
              <GiTalk className="website__how__path__icons" />
              <h1 className="txt-header-small-black">We communicate</h1>
              <p className="txt-description-small-black">
                We will keep close contact with you or whoever you put in charge
                of managing this project
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay={400}>
              <FaGift className="website__how__path__icons" />
              <h1 className="txt-header-small-black">It's a website !</h1>
              <p className="txt-description-small-black">
                Once your website is built and tested, you will receive all
                credentials to claim ownership over your new baby
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay={500}>
              <AiTwotoneTool className="website__how__path__icons" />
              <h1 className="txt-header-small-black">Maintenance</h1>
              <p className="txt-description-small-black">
                If you change your mind about anything or something is wrong,
                let us know and we'll come to your assistance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="website__technologies">
        <h1 className="txt-header-large-white">What we use</h1>
        <h2 className="txt-description-small-white">
          To keep up with the ever-changing web development world, <br /> we
          only use the latest programs and language versions in our programming.
        </h2>
        <div>
          <div>
            <img src={react} alt={react} />
            <p className="txt-description-small-white">
              We use the powerful React Javascript Library developed by Facebook
              in 2013. It is currently the most popular Framework in use and
              developers around the world . Facebook provides continuing support
              for React so you can be sure that it will remain valuable and
              widely available for the foreseeable future. Here are some
              companies that use React : Netflix, Yahoo, Airbnb, Sony, Facebook,
              Instagram, WHatsApp & many more.
            </p>
          </div>
          <div>
            <img src={nodejs} alt={nodejs} />
            <p className="txt-description-small-white">
              Your server will run on Node.js, an open-source, cross-platform,
              back-end JavaScript runtime environment that runs on the V8 engine
              and executes JavaScript code outside a web browser. It’s aim is to
              optimize throughput and scalability in web applications with many
              input/output operations, as well as for real-time Web
              applications. Here are some companies that use Node.js : GooDaddy,
              IBM, LinkedIn, Microsoft, Netlfix, Paypal, Rakuten, Yahoo, Amazon
              Web Services & many more.
            </p>
          </div>
          <div>
            <div>
              <img src={htmlcssjs} alt={htmlcssjs} />
            </div>
            <p className="txt-description-small-white">
              Of course you’ll find the 3 famous names in Web Development :
              HTML5, CSS3 and Javascript. Handwritten and optimised for your
              website, we’ll write that’ll make your website run smoothly,
              quickly and look great.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Website;
