// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

// Components
import LoaderFullBlog from "../components/Utility/LoaderFullBlog";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

// Images
// import image from "../public/img/white-background.png";
import blogIcon from "../public/img/hero/blog.svg";

const Blog = () => {
  const history = useRouter();
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [picker, setPicker] = useState("articles");
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const [data, setData] = useState();
  const [data2, setData2] = useState();

  const comparisonData = [0, 1, 2, 3, 4, 5];

  const [menuOn, setMenu] = useState("false");
  const handleToggle = () => {
    setMenu(!menuOn);
    document.body.style.overflowY = !menuOn ? "scroll" : "hidden";
  };
  // Get Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogPage = await axios.get(
          `https://itrsq.herokuapp.com/articles`
        );
        const response2 = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLswfTxS_KhBlt6p-Ln3xZX1yCWKdt9-lQ&key=AIzaSyCKsqzC5bcbGo5LwAXJJbvEW5qRUSVc-P8`
        );

        setData(blogPage.data.reverse());
        setData2(response2.data.items.reverse());

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <LoaderFullBlog />
  ) : (
    <div className="core-page">
      <Head>
        <title>ITRSQ - Blog</title>
        <meta property="og:title" content="ITRSQ - Blog" key="title" />
      </Head>
      <div className="blog">
        <HeroSection
          title={"Blog"}
          img={blogIcon}
          topTitle={"Read up on the latest news"}
        />
        <div className="blog__container">
          <div className="mobile-navigator">
            <button className="open-more" onClick={handleToggle}>
              {" "}
              <i className="fa fa-filter"></i> Open
            </button>
          </div>
          {/* <div className="blog__picker">
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
     </div> */}
          {picker === "articles" && (
            <div className="blog-page">
              <div className="blog-page-core">
                <div className="main-content">
                  {data.slice(0, 5).map((data) => {
                    return (
                      <div className="single-main" key={data._id}>
                        <div
                          className="main-content-div"
                          onClick={() => history.push(`/article/${data._id}`)}
                        >
                          <div
                            className="img-cont"
                            style={{ backgroundImage: `url(${data.picture})` }}
                          ></div>
                          <h1>{data.title}</h1>
                          <p
                            className="main-content-p"
                            dangerouslySetInnerHTML={{ __html: data.text }}
                          ></p>
                        </div>
                        <div className="under-main-div">
                          <div className="mobile-grid">
                            <div className="date-under left">
                              <i className="fa fa-calendar"></i>
                              <span>20/09/2022</span>
                            </div>
                            <div className="seperator-dot">
                              <i className="fa fa-circle"></i>
                            </div>
                            <div className="date-under right">
                              <i className="fa fa-user"></i>
                              <span>{data.author}</span>
                            </div>
                          </div>
                          <div className="like-counter">
                            <i className="far fa-heart"></i>
                            <span>65</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={menuOn ? "sidebar" : "sidebar-on"}>
                  <div className="close-btn" onClick={handleToggle}>
                    <i className="fas fa-times icn-x"></i>
                  </div>
                  <div className="blog-content">
                    <h3>About Us</h3>
                    <p>
                      We are ITRSQ , An all-rounder IT solutions company, based
                      in Londo providing IT Support and Web Development
                      Services. We have a team of proactive individuals willing
                      to go that extra mile to ensure your needs are met. We
                      believe in value, trust, and transparency.
                    </p>
                    <div className="socials">
                      <a
                        href="https://www.facebook.com/ITRSQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/itrsq2000/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://twitter.com/ItrsqS"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/itrsq/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCUUs-ri1zJU_mYumBbzjO6g"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a
                        href="https://www.tiktok.com/@itrsq?"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-tiktok"></i>
                      </a>
                    </div>
                    <h3>Latest Posts</h3>
                    <div className="blog-latest">
                      {data.slice(5, 9).map((data) => {
                        return (
                          <div
                            className="single-item"
                            onClick={() => history.push(`/article/${data._id}`)}
                            key={data._id}
                          >
                            <div className="img-holder">
                              <Image
                                src={data.picture}
                                alt={data.picture}
                                height="100"
                                width="100"
                              />
                            </div>
                            <div className="inner-grid">
                              <div className="title-single-line">
                                <span>{data.title}</span>
                              </div>
                              <div className="under-title-single-line">
                                <div className="date">
                                  <i className="fa fa-calendar"></i>
                                  <span>20/09/2022</span>{" "}
                                </div>
                                <div className="seperator-dot">
                                  <i className="fa fa-circle"></i>
                                </div>
                                <div className="likes">
                                  <i className="fa fa-heart"></i>
                                  <span>64</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              {/* {data[4] && (
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
         )} */}
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
              {data2.map((video, index) => {
                return (
                  <div className="blog__smallContent" key={index}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      //  allowfullscreen="allowfullscreen"
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
    </div>
  );
};
export default Blog;
