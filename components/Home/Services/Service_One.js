// Images
import htmlcssjs from "../../../assets/img/html.png";
import nodejs from "../../../assets/img/node.png";
import react from "../../../assets/img/react.png";

import Image from "next/image";

function Service_One() {
  return (
    <div className="more-info-tab">
      <h1>Our Technology Stack</h1>
      <p className="under-title">
        To keep up with the ever-changing web development world, we only use the
        latest programs and language versions in our programming.
      </p>
      <div className="another-grid">
        <div className="single-in-a-grid">
          <Image src={react} alt={react} />
          <p className="txt-description-small-white">
            We use the powerful React Javascript Library developed by Facebook
            in 2013. It is currently the most popular Framework in use and
            developers around the world . Facebook provides continuing support
            for React so you can be sure that it will remain valuable and widely
            available for the foreseeable future. Here are some companies that
            use React : Netflix, Yahoo, Airbnb, Sony, Facebook, Instagram,
            WHatsApp & many more.
          </p>
        </div>
        <div className="single-in-a-grid">
          <Image src={nodejs} alt={nodejs} />
          <p className="txt-description-small-white">
            Your server will run on Node.js, an open-source, cross-platform,
            back-end JavaScript runtime environment that runs on the V8 engine
            and executes JavaScript code outside a web browser. It’s aim is to
            optimize throughput and scalability in web applications with many
            input/output operations, as well as for real-time Web applications.
            Here are some companies that use Node.js : GooDaddy, IBM, LinkedIn,
            Microsoft, Netlfix, Paypal, Rakuten, Yahoo, Amazon Web Services &
            many more.
          </p>
        </div>
        <div className="single-in-a-grid">
          <Image src={htmlcssjs} alt={htmlcssjs} />
          <p className="txt-description-small-white">
            Of course you’ll find the 3 famous names in Web Development : HTML5,
            CSS3 and Javascript. Handwritten and optimised for your website,
            we’ll write code that’ll make your website run smoothly, quickly and
            look great.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service_One;
