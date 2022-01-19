// Packages
import { useState } from "react";
import axios from "axios";

// Components
import { set } from "js-cookie";
import Footer from "../components/Footer";
import LoaderFullScreen from "../components/Utility/LoaderFullScreen";

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
  const [imageHolder, setImageHolder] = useState();
  const [image, setImage] = useState();
  const [imageDisplay, setImageDisplay] = useState();
  const [quality, setQuality] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [imgUrlMessage, setImgUrlMessage] = useState();
  const [originalSize, setOriginalSize] = useState();
  const [newSize, setNewSize] = useState();

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
  const anotherImage = async () => {
    setImageHolder("");
    setImage("");
    setImageDisplay("");
    setImgUrl();
    setImgUrlMessage();
    setOriginalSize();
    setNewSize();
    setQuality(0);
  };

  // Byte Conversion Function
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  // Image resizing Handle
  const imageHandle = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("qlty", quality);
      formData.append("files", image);

      const response = await axios.post(
        "https://api.resmush.it/ws.php",
        formData
      );
      setImgUrl(response.data.dest);
      setImgUrlMessage("Click here to download your Image !");
      setOriginalSize(formatBytes(response.data.src_size));
      setNewSize(formatBytes(response.data.dest_size));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setImgUrlMessage("There has been a problem with your request");
      setIsLoading(false);
    }
  };

  return (
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

        {isLoading ? (
          <LoaderFullScreen />
        ) : (
          <div className="tool__hashtag">
            <h1 className="txt-header-medium-white">Hashtag Generator</h1>
            <div>
              <div>
                <h2 className="txt-description-medium-white">
                  Enter your text here (up to 1000 characters) and our Hashtag
                  Generator will generate a list of the best hashtags associated
                </h2>
                <textarea
                  maxLength={1000}
                  cols="30"
                  rows="10"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
                {hashtagMessage && <h3>{hashtagMessage}</h3>}
                <button
                  className="btn-classic"
                  onClick={
                    hashtags ? () => anotherHashtag() : () => hashtagHandle()
                  }
                >
                  {hashtags ? "Do another" : "Submit"}
                </button>
              </div>
              <div>
                {" "}
                <h2 className="txt-description-medium-white">Your Hashtags</h2>
                <div>
                  <div>
                    <h3 className="txt-description-small-white">Hashtags</h3>
                    <h3 className="txt-description-small-white">
                      Rating (Based on Exposure Potential)
                    </h3>
                  </div>
                  <div>
                    {hashtags &&
                      hashtags.map((hashtag) => {
                        return (
                          <div>
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
        )}
        <div className="tool__image">
          <h1 className="txt-header-medium-white">Image Compression</h1>
          <div>
            <div className="tool__image__display">
              <img src={imageDisplay} />
              <input
                type="file"
                accept="image/*"
                value={imageHolder}
                onChange={(e) => {
                  setImageDisplay(URL.createObjectURL(e.target.files[0]));
                  setImage(e.target.files[0]);
                }}
              />
              <h2>( Format must be JPG )</h2>
              <label>
                Quality :{" "}
                <input
                  type="number"
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                  max={100}
                  min={0}
                />{" "}
                %
              </label>
              <h2>
                ( Enter what percentage of compression you wish to apply to your
                image between 0-100%.)
              </h2>
            </div>
            <div>
              <label>Original Size : {originalSize}</label>
              <label>New Size : {newSize}</label>
              <label>
                Your new image :{" "}
                {imgUrlMessage && (
                  <a href={imgUrl} download={`${imgUrl}.jpeg`} target="_blank">
                    {" "}
                    {imgUrlMessage}
                  </a>
                )}
              </label>
            </div>
          </div>

          <button
            className="btn-classic"
            onClick={imgUrl ? () => anotherImage() : () => imageHandle()}
          >
            {imgUrl ? "Do another" : "Submit"}
          </button>
        </div>
        {/* <div className="tool">
          <h1 className="txt-header-medium-dynamic">More Tools Coming Soon</h1>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Tools;
