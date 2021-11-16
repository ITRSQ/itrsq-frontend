// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Components
import LoaderFullScreen from "../components/Utility/LoaderFullScreen";
import Footer from "../components/Footer";
import image from "../assets/img/white-background.png";

const Blog = () => {
  const history = useHistory();
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [picker, setPicker] = useState("articles");
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const [data, setData] = useState();
  const [data2, setData2] = useState();

  const comparisonData = [0, 1, 2, 3, 4, 5];

  // Get Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://itrsq.herokuapp.com/articles`
        );
        const response2 = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLswfTxS_KhBlt6p-Ln3xZX1yCWKdt9-lQ&key=AIzaSyCKsqzC5bcbGo5LwAXJJbvEW5qRUSVc-P8`
        );

        setData(response.data.reverse());
        setData2(response2.data.items.reverse());

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // Modal Function
  const modalHandle = (props) => {
    setModalInfo(props.info);
    setModal(true);
  };

  return isLoading ? (
    <LoaderFullScreen />
  ) : (
    <div className="blog bg-gradient-orange">
      <div className="blog__container">
        <div className="blog__picker">
          <button
            className={
              picker === "articles"
                ? "txt-header-medium-white blog__buttons"
                : "txt-header-medium-white blog__buttons__clicked"
            }
            onClick={() => setPicker("articles")}
          >
            Articles
          </button>
          <button
            className={
              picker === "tutorials"
                ? "txt-header-medium-white blog__buttons"
                : "txt-header-medium-white blog__buttons__clicked"
            }
            onClick={() => setPicker("tutorials")}
          >
            Tutorials
          </button>
        </div>
        {picker === "articles" && (
          <div className="blog__content">
            <div onClick={() => history.push(`/article/${data[0]._id}`)}>
              <img src={data[0].picture} alt={data[0].picture} />
              <div>
                <h1 className="txt-header-small-white">{data[0].title}</h1>
                <p
                  className="txt-description-small-white blog__description"
                  dangerouslySetInnerHTML={{ __html: data[0].text }}
                ></p>
              </div>
            </div>
            <div>
              <div onClick={() => history.push(`/article/${data[1]._id}`)}>
                <h1 className="txt-header-small-white">{data[1].title}</h1>
                <p
                  className="txt-description-small-white blog__description"
                  dangerouslySetInnerHTML={{ __html: data[1].text }}
                ></p>
              </div>
              <div onClick={() => history.push(`/article/${data[2]._id}`)}>
                <h1 className="txt-header-small-white">{data[2].title}</h1>
                <p
                  className="txt-description-small-white blog__description"
                  dangerouslySetInnerHTML={{ __html: data[2].text }}
                ></p>
              </div>
              <div onClick={() => history.push(`/article/${data[3]._id}`)}>
                <h1 className="txt-header-small-white">{data[3].title}</h1>
                <p
                  className="txt-description-small-white blog__description"
                  dangerouslySetInnerHTML={{ __html: data[3].text }}
                ></p>
              </div>
            </div>
            {data[4] && (
              <div onClick={() => history.push(`/article/${data[4]._id}`)}>
                <img src={data[4].picture} alt={data[4].picture} />
                <div>
                  <h1 className="txt-header-small-white">{data[4].title}</h1>
                  <p
                    className="txt-description-small-white blog__description"
                    dangerouslySetInnerHTML={{ __html: data[4].text }}
                  ></p>
                </div>
              </div>
            )}
            {data[5] && (
              <div onClick={() => history.push(`/article/${data[5]._id}`)}>
                <img src={data[5].picture} alt={data[5].picture} />
                <div>
                  <h1 className="txt-header-small-white"> {data[5].title}</h1>
                  <p
                    className="txt-description-small-white blog__description"
                    dangerouslySetInnerHTML={{ __html: data[5].text }}
                  ></p>
                </div>
              </div>
            )}
            {data[6] && (
              <div className="blog__content__rest">
                {data.map((article, index) => {
                  return (
                    comparisonData.indexOf(data.indexOf(article)) === -1 && (
                      <div
                        className="blog__smallContent"
                        key={article}
                        onClick={() => history.push(`/article/${article._id}`)}
                      >
                        <img src={article.picture} alt={article.picture} />
                        <h1 className="txt-header-small-white">
                          {article.title}
                        </h1>
                        <div
                          className="txt-description-small-white blog__description"
                          dangerouslySetInnerHTML={{ __html: article.text }}
                        ></div>
                      </div>
                    )
                  );
                })}
              </div>
            )}
          </div>
        )}
        {picker === "tutorials" && (
          <div className="blog__content__tutorials">
            {/* <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/_pKD2aRN5Uk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowfullscreen
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe> */}
            {data2.map((video) => {
              return (
                <div className="blog__smallContent">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    allowfullscreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen"
                    msallowfullscreen="msallowfullscreen"
                    oallowfullscreen="oallowfullscreen"
                    webkitallowfullscreen="webkitallowfullscreen"
                  ></iframe>{" "}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Blog;
