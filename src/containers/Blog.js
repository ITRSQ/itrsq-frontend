// Packages
import { useState, useEffect } from "react";

// Components
import LoaderFullScreen from "../components/Utility/LoaderFullScreen";
import Footer from "../components/Footer";
import image from "../assets/img/white-background.png";
import BlogModal from "../components/Blog/BlogModal";

const Blog = () => {
  // States
  const [isLoading, setIsLoading] = useState(false);
  const [picker, setPicker] = useState("articles");
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const [data, setData] = useState([
    "Main Article",
    "Article 2",
    "Article 3",
    "Article 4",
    "Article 5",
    "Article 6",
    "Article 7",
  ]);
  const [data2, setData2] = useState([
    "Main Tutorial",
    "Tutorial 2",
    "Tutorial 3",
    "Tutorial 4",
    "Tutorial 5",
    "Tutorial 6",
    "Tutorial 7",
  ]);

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
            {" "}
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
                {data.map((article, index) => {
                  return data.indexOf(article) === 0 ? (
                    <div
                      className="blog__mainContent"
                      key={article}
                      onClick={() => modalHandle({ info: article })}
                    >
                      <img src={image} alt={image} />
                      <div>
                        <h1 className="txt-header-small-white">{article}</h1>
                        <p className="txt-description-small-white blog__description">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Illo voluptatum ullam saepe nostrum quas
                          explicabo quo exercitationem, debitis, assumenda atque
                          ex libero vel? Repudiandae dolorum provident nostrum,
                          id asperiores labore molestiae expedita, consequatur
                          alias qui, dicta fuga odio adipisci? At dolorem vitae
                          quasi voluptas atque cum veritatis? Laborum, veniam
                          nemo sequi, culpa incidunt aliquid natus iure ex
                          dolores ea nihil placeat tempore corporis itaque dicta
                          at voluptatem fugiat tempora adipisci mollitia
                          repellat ipsum. Id voluptatum nisi fugit ratione quae
                          at architecto ad necessitatibus totam sapiente
                          temporibus deleniti officia quod dolorum, iure odio
                          commodi laudantium repellendus, nobis iusto voluptatem
                          ea reprehenderit.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="blog__smallContent"
                      key={article}
                      onClick={() => modalHandle({ info: article })}
                    >
                      <img src={image} alt={image} />
                      <h1 className="txt-header-small-white">{article}</h1>
                      <p className="txt-description-small-white blog__description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Recusandae optio, culpa neque voluptatum libero
                        rerum aut quae ea veniam suscipit repellat distinctio
                        iusto facere provident maiores et saepe? Laudantium,
                        maiores!
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
            {picker === "tutorials" && (
              <div className="blog__content">
                {data2.map((tutorial, index) => {
                  return data2.indexOf(tutorial) === 0 ? (
                    <div
                      className="blog__mainContent"
                      key={tutorial}
                      onClick={() => modalHandle({ info: tutorial })}
                    >
                      <img src={image} alt={image} />
                      <div>
                        <h1 className="txt-header-small-white">{tutorial}</h1>
                        <p className="txt-description-small-white blog__description">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Illo voluptatum ullam saepe nostrum quas
                          explicabo quo exercitationem, debitis, assumenda atque
                          ex libero vel? Repudiandae dolorum provident nostrum,
                          id asperiores labore molestiae expedita, consequatur
                          alias qui, dicta fuga odio adipisci? At dolorem vitae
                          quasi voluptas atque cum veritatis? Laborum, veniam
                          nemo sequi, culpa incidunt aliquid natus iure ex
                          dolores ea nihil placeat tempore corporis itaque dicta
                          at voluptatem fugiat tempora adipisci mollitia
                          repellat ipsum. Id voluptatum nisi fugit ratione quae
                          at architecto ad necessitatibus totam sapiente
                          temporibus deleniti officia quod dolorum, iure odio
                          commodi laudantium repellendus, nobis iusto voluptatem
                          ea reprehenderit.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="blog__smallContent"
                      key={tutorial}
                      onClick={() => modalHandle({ info: tutorial })}
                    >
                      <img src={image} alt={image} />
                      <h1 className="txt-header-small-white">{tutorial}</h1>
                      <p className="txt-description-small-white blog__description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Recusandae optio, culpa neque voluptatum libero
                        rerum aut quae ea veniam suscipit repellat distinctio
                        iusto facere provident maiores et saepe? Laudantium,
                        maiores!
                      </p>
                    </div>
                  );
                })}
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
