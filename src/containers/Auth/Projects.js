// Packages
import { useHistory } from "react-router-dom";

// Packages
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

// Components
import Footer from "../../components/Footer";
import LoaderFullScreen from "../../components/Utility/LoaderFullScreen";
import Questionnaire from "../../components/Utility/Questionnaire";

const Projects = ({ setUserId, setUserToken }) => {
  const history = useHistory();

  // States
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  //   Fetch Projects Data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const userToken = await Cookies.get("userToken");
      const userId = await Cookies.get("userId");
      setUserId(userId);
      setUserToken(userToken);

      try {
        const formData = new FormData();

        formData.append("_id", userId);
        const response = await axios.get(
          `https://itrsq.herokuapp.com/projects/${userId}`
        );
        setData(response.data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        setData();
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <LoaderFullScreen />
  ) : (
    <div className="projects bg-gradient-orange">
      <div className="projects__container">
        <h1 className="txt-header-medium-white">Projects</h1>
        {data === undefined ? (
          <div className="projects__preview__none">
            <h1 className="txt-description-large-grey ">
              You have no projects yet
            </h1>
            <button
              onClick={() => history.push("/contact")}
              className="btn-classic-blue"
            >
              Get your free quote
            </button>
          </div>
        ) : (
          <div className="projects__preview__container">
            {data.map((project, index) => {
              return (
                <div
                  className="projects__preview"
                  onClick={() => history.push(`/project/${project._id}`)}
                >
                  <h1>
                    <span>{project.title}</span>
                  </h1>
                  <h2>
                    User :{" "}
                    <span>{`${project.client.firstName} ${project.client.lastName}`}</span>
                  </h2>
                  <h2>
                    Type : <span>{project.type}</span>
                  </h2>
                  <h2>
                    Ref : <span>{project.refNumber}</span>
                  </h2>
                </div>
              );
            })}
          </div>
        )}

        {/* <Questionnaire /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
