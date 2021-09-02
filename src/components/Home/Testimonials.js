// Packages
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

// Components
import LoaderFullScreen from "../Utility/LoaderFullScreen";

const Testimonials = () => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Get Testimonials
  useEffect(() => {
    console.log("ya");
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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktop2: {
      breakpoint: { max: 1355, min: 1085 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1085, min: 815 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 815, min: 545 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile2: {
      breakpoint: { max: 545, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return isLoading ? (
    <LoaderFullScreen />
  ) : (
    <div className="testimonials">
      <div className="testimonials__container">
        <h1 className="txt-header-large-dynamic">Customer Reviews</h1>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3500}
          arrows={false}
        >
          {data.map((testimonial) => {
            return (
              <div className="testimonials__card">
                <img src={testimonial.picture} alt={testimonial.picture} />
                <h2>{testimonial.author}</h2>
                <h3>{testimonial.authorPosition}</h3>
                <p>"{testimonial.testimonial}""</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
