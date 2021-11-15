// Packages
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Components
import LoaderFullScreen from "../../components/Utility/LoaderFullScreen";
import Footer from "../../components/Footer";

const Project = () => {
  const history = useHistory();
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // Get Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://itrsq.herokuapp.com${window.location.pathname}`
        );

        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //   Carousel Responsive
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
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
    <div className="project bg-gradient-orange">
      <div className="project__container">
        <h1 className="txt-header-medium-white">Project Information</h1>
        <div className="project__info">
          <div>
            <h2 className="txt-description-medium-black">
              Title : <span>{data.title}</span>
            </h2>
            <h2 className="txt-description-medium-black">
              Owner :{" "}
              <span>
                {data.client.firstName} {data.client.lastName}
              </span>
            </h2>
            <h2 className="txt-description-medium-black">
              Type : <span>{data.type}</span>
            </h2>
            <h2 className="txt-description-medium-black">
              Reference Code : <span>{data.refNumber}</span>
            </h2>
          </div>
          <div>
            {" "}
            <h2 className="txt-description-medium-black">
              Preview :{" "}
              <span>
                {data.preview ? (
                  <a href={data.preview}>{data.preview}</a>
                ) : (
                  <span>Preview not available </span>
                )}
              </span>
            </h2>
          </div>
        </div>

        <div className="project__progress">
          <h3 className="txt-header-medium-white">Project Progress</h3>
          {/* {data.progress.map((step, index) => {
            return (
              <div className="project__progress__step txt-description-medium-black">
                {step}
              </div>
            );
          })} */}

          <Carousel responsive={responsive} arrows={true} centerMode={true}>
            {data.progress.map((step) => {
              return (
                <div className="project__progress__step txt-description-medium-black">
                  <h1>{step}</h1>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Project;
