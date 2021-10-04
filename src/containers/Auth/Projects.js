// Packages
import { useHistory } from "react-router-dom";

// Packages
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

// Components
import Footer from "../../components/Footer";
import LoaderFullScreen from "../../components/Utility/LoaderFullScreen";

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
        console.log(error.message);
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
        <div className="projects__preview__container">
          {!data ? (
            <div className="projects__preview__none">
              <h1 className="txt-description-large-white">
                You have no projects yet
              </h1>
              <button
                className="btn-classic-blue"
                onClick={() => history.push("/contact")}
              >
                Get your free quote
              </button>
            </div>
          ) : (
            data.map((project, index) => {
              return (
                <div className="projects__preview" key={project._id}>
                  <h1>
                    Project : <span>{project.title}</span>
                  </h1>
                  <h2>
                    Project type : <span> {project.type}</span>
                  </h2>
                  <h2>
                    Reference Number : <span> {project.refNumber}</span>
                  </h2>
                  <h2>
                    Owner :{" "}
                    <span>
                      {project.client.firstName} {project.client.lastName}
                    </span>
                  </h2>
                  {/* 
                  <button className="btn-classic-blue">More Info</button> */}
                </div>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
