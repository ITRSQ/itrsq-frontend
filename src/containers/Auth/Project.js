// Packages
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
          `http://itrsq.herokuapp.com${window.location.pathname}`
        );

        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
          {data.progress.map((step, index) => {
            return (
              <div className="project__progress__step txt-description-medium-black">
                {step}
              </div>
            );
          })}
          <h3 className="txt-header-medium-white">Project Progress</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Project;
