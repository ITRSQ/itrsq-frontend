// Packages
import { useState } from "react";
import axios from "axios";

// Components

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
    formData.append("url", longUrl);
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
          <button className="btn-classic" onClick={() => emailHandle()}>
            Submit
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
          <button className="btn-classic" onClick={() => phoneHandle()}>
            Submit
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
          <button className="btn-classic" onClick={() => vatHandle()}>
            Submit
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
          <a href={urlMessage} target="_blank">
            {urlMessage}
          </a>
          <button className="btn-classic" onClick={() => urlHandle()}>
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
