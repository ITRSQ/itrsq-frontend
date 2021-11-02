// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import LoaderFullScreen from "../components/Utility/LoaderFullScreen";
import Footer from "../components/Footer";
import image from "../assets/img/white-background.png";
import BlogModal from "../components/Blog/BlogModal";

const Blog = () => {
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [picker, setPicker] = useState("articles");
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const [data, setData] = useState();
  const [data2, setData2] = useState([
    "Main Tutorial",
    "Tutorial 2",
    "Tutorial 3",
    "Tutorial 4",
    "Tutorial 5",
    "Tutorial 6",
    "Tutorial 7",
    "Tutorial 8",
    "Tutorial 9",
    "Tutorial 10",
    "Tutorial 11",
    "Tutorial 12",
  ]);

  const comparisonData = [0, 1, 2, 3, 4, 5];

  // Get Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://itrsq.herokuapp.com/articles`
        );

        setData(response.data.reverse());

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
        {modal ? (
          <BlogModal setModal={setModal} modalInfo={modalInfo} />
        ) : (
          <>
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
                <div onClick={() => modalHandle({ info: data[0] })}>
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
                  <div onClick={() => modalHandle({ info: data[1] })}>
                    <h1 className="txt-header-small-white">{data[1].title}</h1>
                    <p
                      className="txt-description-small-white blog__description"
                      dangerouslySetInnerHTML={{ __html: data[1].text }}
                    ></p>
                  </div>
                  <div onClick={() => modalHandle({ info: data[2] })}>
                    <h1 className="txt-header-small-white">{data[2].title}</h1>
                    <p
                      className="txt-description-small-white blog__description"
                      dangerouslySetInnerHTML={{ __html: data[2].text }}
                    ></p>
                  </div>
                  <div onClick={() => modalHandle({ info: data[3] })}>
                    <h1 className="txt-header-small-white">{data[3].title}</h1>
                    <p
                      className="txt-description-small-white blog__description"
                      dangerouslySetInnerHTML={{ __html: data[3].text }}
                    ></p>
                  </div>
                </div>
                {data[4] && (
                  <div>
                    <img src={data[4].picture} alt={data[4].picture} />
                    <div>
                      <h1 className="txt-header-small-white">
                        {data[4].title}
                      </h1>
                      <p
                        className="txt-description-small-white blog__description"
                        dangerouslySetInnerHTML={{ __html: data[4].text }}
                      ></p>
                    </div>
                  </div>
                )}
                {data[5] && (
                  <div>
                    <img src={data[5].picture} alt={data[5].picture} />
                    <div>
                      <h1 className="txt-header-small-white">
                        {" "}
                        {data[5].title}
                      </h1>
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
                        comparisonData.indexOf(data.indexOf(article)) ===
                          -1 && (
                          <div
                            className="blog__smallContent"
                            key={article}
                            onClick={() => modalHandle({ info: article })}
                          >
                            <img src={image} alt={image} />
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
                <div className="blog__smallContent">
                  <iframe
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
                  ></iframe>
                </div>
                <div className="blog__smallContent">
                  <h1 className="txt-header-medium-dynamic">Coming Soon</h1>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Blog;
