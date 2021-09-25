// Packages
import { useHistory } from "react-router-dom";

// Components
import Footer from "../components/Footer";
import WhatsApp from "../components/Communication/WhatsApp";
// import StickyMenu from "../components/Navigation/StickyMenu";

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
      {/* <StickyMenu
        anchor1="Website"
        anchor1Id="hero"
        anchor2="How it works"
        anchor2Id="how"
        anchor3="What we use"
        anchor3Id="what"
      /> */}
      <WhatsApp />
      <div className="hero" id="hero">
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
          onClick={() =>
            document
              .getElementById("how")
              .scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <div className="container-full-white" id="how">
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
      <div className="website__prices">
        <div className="website__prices__container">
          <h1 className="txt-header-large-dynamic">Website Packages</h1>

          <div className="website__prices__webdev">
            <div data-aos="fade-up">
              <div>
                {" "}
                <i class="fas fa-book-open"></i>
                <h3 className="txt-header-small-dynamic">Basic</h3>
                <h4 className="txt-description-medium-white">
                  A professional informational website for your business or
                  yourself.
                </h4>
              </div>

              <ul>
                <li>Fully bespoke website</li>
                <li>Mobile and tablet responsive</li>
                <li>Secure Web Hosting</li>
              </ul>
              <div>
                {" "}
                <h5>
                  Prices start from <span>£249</span>
                </h5>
                <button
                  className="btn-classic-blue"
                  onClick={() => history.push("/contact")}
                >
                  Get your free quote
                </button>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={100}>
              <div>
                <i class="fas fa-shopping-cart"></i>
                <h3 className="txt-header-small-dynamic">E-Commerce</h3>
                <h4 className="txt-description-medium-white">
                  Your very own E-shop.
                </h4>
              </div>

              <ul>
                <li>All features from Basic package</li>
                <li>Online payment</li>
                <li>Admin management</li>
              </ul>
              <div>
                {" "}
                <h5>
                  Prices start from <span>£449</span>
                </h5>
                <button
                  className="btn-classic-blue"
                  onClick={() => history.push("/contact")}
                >
                  Get your free quote
                </button>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={200}>
              <div>
                {" "}
                <i class="fas fa-drafting-compass"></i>
                <h3 className="txt-header-small-dynamic">Custom</h3>
                <h4 className="txt-description-medium-white">
                  Your project doesn't fit in any of the previous packages ?
                </h4>
              </div>

              <ul>
                <li>All features from Basic package</li>
                <li>Custom web plug-ins</li>
                <li>Custom research and application</li>
              </ul>
              <div>
                {" "}
                <h5>
                  Prices start from <span> £349</span>
                </h5>
                <button
                  className="btn-classic-blue"
                  onClick={() => history.push("/contact")}
                >
                  Get your free quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="website__maintenance__prices">
        <div className="website__prices__container">
          <h1 className="txt-header-large-dynamic">Maintenance Packages</h1>

          <div className="website__prices__maintenance">
            <div data-aos="fade-up">
              <div>
                {" "}
                <i class="fas fa-book-open"></i>
                <h3 className="txt-header-small-dynamic">One-time</h3>
                <h4 className="txt-description-medium-black">
                  If you just need to update something on your website or wish
                  to add something new
                </h4>
              </div>

              <ul>
                <li>Portfolio update</li>
                <li>Add functionality</li>
                <li>Add pages</li>
              </ul>
              <div>
                {" "}
                <h5>
                  Prices start from <span>£29/day</span>
                </h5>
                <button
                  className="btn-classic-blue"
                  onClick={() => history.push("/contact")}
                >
                  Get your free quote
                </button>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={100}>
              <div>
                <i class="fas fa-shopping-cart"></i>
                <h3 className="txt-header-small-dynamic">Monthly</h3>
                <h4 className="txt-description-medium-black">
                  Save money by paying a monthly fee and getting the most of our
                  service
                </h4>
              </div>

              <ul>
                <li>Less individual modification charges</li>
                <li>Customer Support</li>
                <li>Best Value</li>
              </ul>
              <div>
                {" "}
                <h5>
                  Prices start from <span>£39/month</span>
                </h5>
                <button
                  className="btn-classic-blue"
                  onClick={() => history.push("/contact")}
                >
                  Get your free quote
                </button>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={200}>
              <div>
                {" "}
                <i class="fas fa-drafting-compass"></i>
                <h3 className="txt-header-small-dynamic">Custom</h3>
                <h4 className="txt-description-medium-black">
                  Need to make big changes ?
                </h4>
              </div>

              <ul>
                <li>Large-scale changes</li>
                <li>Re-design</li>
                <li>Website upgrades</li>
              </ul>
              <div>
                {" "}
                <h5>
                  Prices start from <span> £99</span>
                </h5>
                <button
                  className="btn-classic-blue"
                  onClick={() => history.push("/contact")}
                >
                  Get your free quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="website__technologies" id="what">
        <h1 className="txt-header-large-white">Our Technology Stack</h1>
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
              website, we’ll write code that’ll make your website run smoothly,
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
