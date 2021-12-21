// Packages
import { useState } from "react";
import axios from "axios";

// Components

import LoaderFullScreen from "../components/Utility/LoaderFullScreen";
import { set } from "js-cookie";

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

  return isLoading ? (
    <LoaderFullScreen />
  ) : (
    <div className="tools bg-gradient-orange">
      <div className="tools__container">
        <div className="tool">
          <h1 className="txt-header-medium-white">Email Verification</h1>
          <h2 className="txt-description-medium-white">
            Enter the email you wish to verify
          </h2>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>{emailMessage}</h3>
          <button
            className="btn-classic"
            onClick={emailMessage ? () => anotherEmail() : () => emailHandle()}
          >
            {emailMessage ? "Do another" : "Submit"}
          </button>
        </div>
        <div className="tool">
          <h1 className="txt-header-medium-white">Phone Number Verification</h1>
          <h2 className="txt-description-medium-white">
            Enter the phone number you wish to verify <br />{" "}
            <i>(Don't forget to add the country prefix)</i>
          </h2>

          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <h3>{phoneMessage}</h3>
          <button
            className="btn-classic"
            onClick={phoneMessage ? () => anotherPhone() : () => phoneHandle()}
          >
            {phoneMessage ? "Do another" : "Submit"}
          </button>
        </div>
        <div className="tool">
          <h1 className="txt-header-medium-white">VAT Number Verification</h1>
          <h2 className="txt-description-medium-white">
            Enter the VAT number you wish to verify
          </h2>

          <input
            type="text"
            value={vat}
            onChange={(e) => setVat(e.target.value)}
          />
          <h3>{vatMessage}</h3>
          <button
            className="btn-classic"
            onClick={vatMessage ? () => anotherVat() : () => vatHandle()}
          >
            {vatMessage ? "Do another" : "Submit"}
          </button>
        </div>
        <div className="tool">
          <h1 className="txt-header-medium-white">URL Shortener</h1>
          <h2 className="txt-description-medium-white">
            Enter the URL you wish to shorten
          </h2>

          <input
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          {urlMessage && (
            <h2 className="txt-description-medium-white">
              Here's your shortened link !
            </h2>
          )}
          {urlMessage && (
            <a href={urlMessage} target="_blank">
              {urlMessage}
            </a>
          )}

          <button
            className="btn-classic"
            onClick={urlMessage ? () => anotherUrl() : () => urlHandle()}
          >
            {urlMessage ? "Do another" : "Submit"}
          </button>
        </div>
        <div className="tool__image">
          <h1 className="txt-header-medium-white">Image Resizing</h1>
          <div>
            <div className="tool__image__display">
              <img src={imageDisplay} />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setImageDisplay(URL.createObjectURL(e.target.files[0]));
                  setImage(e.target.files[0]);
                }}
              />
              <h2>(Format must be JPG)</h2>
            </div>
            <div>
              <label>
                Height :{" "}
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />{" "}
                px
              </label>
              <label>
                Width :{" "}
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />{" "}
                px
              </label>
              <label>
                Format :{" "}
                <select
                  value={strategy}
                  name="strategy"
                  onChange={(e) => setStrategy(e.target.value)}
                >
                  <option value="exact" selected>
                    Exact : Resize to exact width and height. Aspect ratio will
                    not be maintained
                  </option>
                  <option value="portrait">
                    Portrait : Exact height will be set, width will be adjusted
                    according to aspect ratio
                  </option>
                  <option value="landscape">
                    Landscape : Exact width will be set, height will be adjusted
                    according to aspect ratio
                  </option>
                  <option value="auto">
                    Auto : The best strategy (portrait or landscape) will be
                    selected according to its aspect ratio
                  </option>
                  <option value="fit">
                    Fit : This option will crop and resize the image to fit the
                    desired width and height.
                  </option>
                </select>
              </label>
              {imgUrlMessage && (
                <a href={imgUrl} target="_blank">
                  {imgUrlMessage}
                </a>
              )}
            </div>
          </div>

          <button className="btn-classic" onClick={() => imageHandle()}>
            Submit
          </button>
        </div>
        {/* <div className="tool">
          <h1 className="txt-header-medium-dynamic">More Tools Coming Soon</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Tools;
