// Packages
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// Components
import LoaderFullScreen from "../Utility/LoaderFullScreen";
import Footer from "../Footer";

const Article = ({ setModal, modalInfo }) => {
  console.log(window.location);
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
        console.log(response.data);
        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <LoaderFullScreen />
  ) : (
    <div className="blog bg-gradient-orange">
      <div className="blog__container">
        <div className="article">
          <i
            class="far fa-times-circle blog-x"
            onClick={() => history.push("/blog")}
          ></i>
          <h1 className="txt-header-large-white">{data.title}</h1>
          <h2 className="article__author txt-description-large-white">
            by {data.author}
          </h2>
          <img src={data.picture} alt={data.picture} />
          <div
            className="article__txtContainer"
            dangerouslySetInnerHTML={{ __html: data.text }}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Article;
