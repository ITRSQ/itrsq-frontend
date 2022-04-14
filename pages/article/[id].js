// Packages
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

// Components
import LoaderFullScreen from "../../components/Utility/LoaderFullScreen";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";

const Article = ({ setModal, modalInfo }) => {
  const history = useRouter();
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const name = "ITRSQ - ";
  const read_more = "...\n\nRead More On Our Blog Page";
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

  const regex = /(<([^>]+)>)/gi;

  return isLoading ? (
    <LoaderFullScreen />
  ) : (
    <div className="blog-article">
      <Head>
        <title>ITRSQ - {data.title}</title>
        <meta
          property="og:title"
          content={`ITRSQ - ${data.title}`}
          key="title"
        />
      </Head>
      <HeroSection title={"Article"} img={data.picture} topTitle={data.title} />
      {/* <Metadecorator title={name + data.title} description={data.title + data.text.replace(regex, '').substring(0, 350) + read_more} tags={data.tags}/> */}
      <div className="inner-article">
        <div className="main-content">
          <div className="main-content-img">
            <Image src={data.picture} alt={data.picture} layout="fill" />
          </div>

          <i
            className="far fa-times-circle blog-x"
            onClick={() => history.push("/blog")}
          ></i>
          <div className="inner-content">
            <h1 className="title">{data.title}</h1>
            <h2 className="author">by {data.author}</h2>
            <div
              className="core-text"
              dangerouslySetInnerHTML={{ __html: data.text }}
            ></div>
          </div>
        </div>
        <div className="side-bar"></div>
      </div>
      <Footer />
    </div>
  );
};
export default Article;
