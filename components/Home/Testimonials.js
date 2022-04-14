// Packages
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// Components
import LoaderFullScreen from "../Utility/LoaderFullScreen";

const Testimonials = () => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Get Testimonials
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://itrsq.herokuapp.com/testimonials`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  //   Carousel Responsive

  return isLoading ? (
    <LoaderFullScreen />
  ) : (
    <div className="testimonials">
      <div className="testimonials__container">
        <h1 className="services-header">Customer Reviews</h1>
        <span className="seperator"></span>
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
          {" "}
          {data.map((testimonial) => {
            return (
              <SwiperSlide key={testimonial._id}>
                <div className="center-everythin">
                  <div className="testimonials__card">
                    <Image
                      className="img-testemonials"
                      src={testimonial.picture}
                      alt={testimonial.picture}
                    />
                    <div className="line-between"></div>
                    <div className="inner-testemonials">
                      <h2>{testimonial.author}</h2>
                      <h3>{testimonial.authorPosition}</h3>
                      <p>{`${testimonial.testimonial}`}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
