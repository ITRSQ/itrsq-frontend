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

        <Questionnaire />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
