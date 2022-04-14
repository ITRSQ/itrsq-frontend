// Packages
import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";

// Components

import Footer from "../components/Footer";
import LoaderFullScreen from "../components/Utility/LoaderFullScreen";
import HeroSection from "../components/HeroSection";

// Images
import emailIcon from "../public/img/tools/email.png";
import mobileIcon from "../public/img/tools/smartphone.png";
import vatIcon from "../public/img/tools/vat.png";
import wwwIcon from "../public/img/tools/www.png";
import toolsIcon from "../public/img/hero/tools.svg";

const Tools = () => {
  // States
  const [isLoading, setIsLoading] = useState(false);
  const [emailMessage, setEmailMessage] = useState();
  const [phoneMessage, setPhoneMessage] = useState();
  const [vatMessage, setVatMessage] = useState();
  const [urlMessage, setUrlMessage] = useState();
  const [longUrl, setLongUrl] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [vat, setVat] = useState();
  const [image, setImage] = useState();
  const [imageDisplay, setImageDisplay] = useState();
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [strategy, setStrategy] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [imgUrlMessage, setImgUrlMessage] = useState();

  // Hashtag Tool States
  const [text, setText] = useState();
  const [hashtags, setHashtags] = useState();
  const [hashtagMessage, setHashtagMessage] = useState();

  // Hashtag Handle
  const hashtagHandle = async (e) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://itrsq.herokuapp.com/tools/hashtag/text",
        {
          text: text,
        }
      );
      console.log(response.data);
      setHashtags(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setHashtagMessage(error.response.data.error);
      setIsLoading(false);
    }
  };

  //   Email Handle
  const emailHandle = async () => {
    const formData = new FormData();
    formData.append("email", email);
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://itrsq.herokuapp.com/tools/email",
        formData
      );
      setEmailMessage(response.data);
      setIsLoading(false);
    } catch (error) {
      setEmailMessage(error.response.data.error);
      setIsLoading(false);
    }
  };

  //   Phone Handle
  const phoneHandle = async () => {
    const formData = new FormData();
    formData.append("phone", phone);
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://itrsq.herokuapp.com/tools/phone",
        formData
      );
      setPhoneMessage(response.data);
      setIsLoading(false);
    } catch (error) {
      setPhoneMessage(error.response.data.error);
      setIsLoading(false);
    }
  };

  //   VAT Handle
  const vatHandle = async () => {
    const formData = new FormData();
    formData.append("vat", vat);
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://itrsq.herokuapp.com/tools/vat",
        formData
      );
      setVatMessage(response.data);
      setIsLoading(false);
    } catch (error) {
      setVatMessage(error.response.data.error);
      setIsLoading(false);
    }
  };

  //   Url Handle
  const urlHandle = async () => {
    const formData = new FormData();
    formData.append("longUrl", longUrl);
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://itrsq.herokuapp.com/tools/url",
        formData
      );
      console.log(response.data);
      setUrlMessage(response.data.shortUrl);
      setIsLoading(false);
    } catch (error) {
      setVatMessage(error.response.data.error);
      setIsLoading(false);
    }
  };

  // Do another handles

  const anotherEmail = () => {
    setEmailMessage();
    setEmail("");
  };
  const anotherPhone = () => {
    setPhoneMessage();
    setPhone("");
  };
  const anotherVat = () => {
    setVatMessage();
    setVat("");
  };
  const anotherUrl = () => {
    setUrlMessage();
    setLongUrl("");
  };
  const anotherHashtag = () => {
    setHashtagMessage();
    setHashtags();
    setText();
  };

  // Image resizing Handle

  const imageHandle = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("image", image);
      formData.append("height", height);
      formData.append("width", width);
      formData.append("strategy", strategy);

      const response = await axios.post(
        "http://localhost:3000/tools/image",
        formData
      );
      setImgUrl(response.data);
      setImgUrlMessage("Click here to download your Image !");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setImgUrlMessage("There has been a problem with your request");
      setIsLoading(false);
    }

    // const data = {
    //   api_key: "682f39dfc32b4cae884dfd77f53b2439",
    //   resize: {
    //     width: parseInt(width, 10),
    //     height: parseInt(height, 10),
    //     strategy,
    //   },
    // };
    // const formData = new FormData();
    // formData.append("image", image);
    // setIsLoading(true);
    // try {
    //   const response = await axios.post(
    //     "https://itrsq.herokuapp.com/tools/image",
    //     formData
    //   );
    //   if (response.data) {
    //     console.log(response.data);
    //     const formData1 = new FormData();
    //     formData.append("image", response.data);
    //     formData.append("data", data);
    //     try {
    //       const response1 = await axios.post(
    //         "https://images.abstractapi.com/v1/upload/",
    //         formData1
    //       );
    //       setImgUrl(response1.data.url);
    //       setImgUrlMessage("Click here to download your Image !");
    //       setIsLoading(false);
    //     } catch (error) {
    //       console.log(error);
    //       setImgUrlMessage("There has been a problem with your request1");
    //       setIsLoading(false);
    //     }
    //   } else {
    //     setImgUrlMessage("There has been a problem with your request2");
    //     setIsLoading(false);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setImgUrlMessage("There has been a problem with your request3");
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="tools-container">
      <Head>
        <title>ITRSQ - Tools</title>
        <meta property="og:title" content="ITRSQ - Tools" key="title" />
      </Head>
      {isLoading ? (
        <LoaderFullScreen />
      ) : (
        <div className="core-page">
          <div className="tools-inner">
            <HeroSection
              title={"Tools"}
              img={toolsIcon}
              topTitle={"Give our custom tools a try"}
            />
            <div className="tool-light">
              <div className="tool-single">
                <div className="left-side">
                  <Image src={emailIcon} alt="" />
                </div>
                <div className="right-side">
                  <div className="text-holder">
                    <h1>Email Verification</h1>
                    <h2>Enter the email you wish to verify</h2>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <h3>{emailMessage}</h3>
                    <button
                      className="btn-main orange-color btn-tools"
                      onClick={
                        emailMessage
                          ? () => anotherEmail()
                          : () => emailHandle()
                      }
                    >
                      {emailMessage ? "Do another" : "Verify"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tool-dark">
              <div className="tool-single">
                <div className="left-side">
                  <div className="text-holder">
                    <h1>Phone Number Verification</h1>
                    <h2>
                      Enter the phone number you wish to verify <br />
                      <span>{"(Don't forget to add the country prefix)"}</span>
                    </h2>

                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <h3>{phoneMessage}</h3>
                    <button
                      className="btn-main orange-color btn-tools-light"
                      onClick={
                        phoneMessage
                          ? () => anotherPhone()
                          : () => phoneHandle()
                      }
                    >
                      {phoneMessage ? "Do another" : "Verify"}
                    </button>
                  </div>
                </div>
                <div className="right-side">
                  <Image src={mobileIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="tool-light">
              <div className="tool-single">
                <div className="left-side">
                  <Image src={vatIcon} alt="" />
                </div>
                <div className="right-side">
                  <div className="text-holder">
                    <h1>VAT Number Verification</h1>
                    <h2>Enter the VAT number you wish to verify</h2>

                    <input
                      type="text"
                      value={vat}
                      onChange={(e) => setVat(e.target.value)}
                    />
                    <h3>{vatMessage}</h3>
                    <button
                      className="btn-main orange-color btn-tools"
                      onClick={
                        vatMessage ? () => anotherVat() : () => vatHandle()
                      }
                    >
                      {vatMessage ? "Do another" : "Verify"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tool-dark">
              <div className="tool-single">
                <div className="left-side">
                  <div className="text-holder">
                    <h1>URL Shortener</h1>
                    <h2 className="itallic">
                      Enter the URL you wish to shorten
                    </h2>

                    <input
                      type="text"
                      value={longUrl}
                      onChange={(e) => setLongUrl(e.target.value)}
                    />
                    {urlMessage && (
                      <h2 className="txt-description-medium-white">
                        {"Here's your shortened link !"}
                      </h2>
                    )}
                    {urlMessage && (
                      <a href={urlMessage} target="_blank" rel="noreferrer">
                        {urlMessage}
                      </a>
                    )}

                    <button
                      className="btn-main orange-color btn-tools-light"
                      onClick={
                        urlMessage ? () => anotherUrl() : () => urlHandle()
                      }
                    >
                      {urlMessage ? "Do another" : "Submit"}
                    </button>
                  </div>
                </div>
                <div className="right-side">
                  <Image src={wwwIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="tool-hash">
              <div className="tool__hashtag">
                <h1 className="txt-header-medium-white">Hashtag Generator</h1>
                <div>
                  <div>
                    <h2>
                      Enter your text here (up to 1000 characters) and our
                      Hashtag Generator will generate a list of the best
                      hashtags associated
                    </h2>
                    <textarea
                      maxLength={1000}
                      cols="30"
                      rows="10"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Your Text Goes Here"
                    ></textarea>
                    {hashtagMessage && <h3>{hashtagMessage}</h3>}
                    <button
                      className="btn-main orange-color btn-tools"
                      onClick={
                        hashtags
                          ? () => anotherHashtag()
                          : () => hashtagHandle()
                      }
                    >
                      {hashtags ? "Do another" : "Submit"}
                    </button>
                  </div>
                  <div>
                    {" "}
                    <div>
                      <div>
                        <h3 className="txt-description-small-white">
                          Hashtags
                        </h3>
                        <h3 className="txt-description-small-white">
                          Rating (Based on Exposure Potential)
                        </h3>
                      </div>
                      <div className="scroll">
                        {hashtags &&
                          hashtags.map((hashtag) => {
                            return (
                              <div key={hashtag.hashtag}>
                                <h3 className="txt-description-small-white">
                                  {hashtag.hashtag}
                                </h3>
                                <h3 className="txt-description-small-white">
                                  {hashtag.exposure}
                                </h3>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tools;
