import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";

// Logos
import htmlcssjs from "../../assets/img/html.png";
import nodejs from "../../assets/img/node.png";
import react from "../../assets/img/react.png";

const StackInfo = () => {
  return (
    <Swiper
      // idk what this is so dont ask me. it works somehow....
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
      }}
      // autoplay={{
      //   delay: 3500,
      //   disableOnInteraction: false,
      // }}
      scrollbar={{ draggable: true }}
      loop={{ loop: true }}
    >
      <SwiperSlide>
        <div className="singl-stack">
          <div className="text-holder">
            <h1 style={{ color: "#60dbfa" }}>React</h1>
            <Image src={react} alt={react} />
            <p>
              We use the powerful React Javascript Library developed by Facebook
              in 2013. It is currently the most popular Framework in use and
              developers around the world. Facebook provides continuing support
              for React so you can be sure that it will remain valuable and
              widely available for the foreseeable future.
              <span>
                <b>Here are some companies that use React:</b> Netflix, Yahoo,
                Airbnb, Sony, Facebook, Instagram, WhatsApp & many more.
              </span>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="singl-stack">
          <div className="text-holder">
            <h1 style={{ color: "#83cd29" }}>Node.js</h1>
            <Image src={nodejs} alt={nodejs} />
            <p>
              Your server will run on Node.js, an open-source, cross-platform,
              back-end JavaScript runtime environment that runs on the V8 engine
              and executes JavaScript code outside a web browser. It’s aim is to
              optimize throughput and scalability in web applications with many
              input/output operations, as well as for real-time Web
              applications.
              <span>
                <b>Here are some companies that use Node.js:</b> GooDaddy, IBM,
                LinkedIn, Microsoft, Netlfix, Paypal, Rakuten, Yahoo, Amazon Web
                Services & many more.
              </span>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="singl-stack">
          <div className="text-holder">
            <h1>
              {" "}
              <span style={{ color: "#f16326" }}>HTML5</span>,{" "}
              <span style={{ color: "#006fb9" }}>CSS3</span> and{" "}
              <span style={{ color: "#5ea614" }}>Javascript</span>{" "}
            </h1>
            <Image src={htmlcssjs} alt={htmlcssjs} />
            <p style={{ "margin-bottom": "100px" }}>
              Of course you’ll find the 3 famous names in Web Development :
              HTML5, CSS3 and Javascript. Handwritten and optimised for your
              website, we’ll write code that’ll make your website run smoothly,
              quickly and look great.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default StackInfo;
