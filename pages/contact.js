// Packages
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Head from "next/head";
import Image from "next/image";

// Components
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import LoaderFullScreen from "../components/Utility/LoaderFullScreen";

// JSON
import topics from "../public/json/topics.json";
import websiteSpecifics from "../public/json/websiteSpecifics.json";
import itSupportSpecifics from "../public/json/itSupportSpecifics.json";

// IMG
import contactIcon from "../public/img/hero/contact.svg";
import locationIcon from "../public/img/contact/location.png";
import phoneIcon from "../public/img/contact/phone.png";
import emailIcon from "../public/img/contact/email.png";
import devIcon from "../public/img/contact/dev.svg";

const Contact = () => {
  // States
  const [topic, setTopic] = useState("website");
  const [specific, setSpecific] = useState("it1");
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [text, setText] = useState();
  const [subject, setSubject] = useState();
  const [orderRef, setOrderRef] = useState(
    Cookies.get("promoClick") ? "PROMO111" : undefined
  );
  const [from, setFrom] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [success, setSuccess] = useState();

  // Send email

  const submitHandle = async () => {
    setIsLoading(true);
    setSubject(`${topic} | ${specific}`);
    try {
      const formData = new FormData();
      formData.append("from", from);
      formData.append("orderRef", orderRef);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("subject", subject);
      formData.append("text", text);

      console.log(text);

      const response = await axios.post(
        "https://itrsq.herokuapp.com/mail/contact",
        formData
      );
      if (response.data === "Email sent!") {
        setIsLoading(false);
        setSuccess(true);
      } else {
        setIsLoading(false);
        alert(response.data);
      }
    } catch (error) {
      if (
        error.response.data.error ===
        "'from' parameter is not a valid address. please check documentation"
      ) {
        setIsLoading(false);
        setErrorMessage("Email Adress Not Valid");
      } else {
        setIsLoading(false);
        setErrorMessage(error.response.data.error);
      }
    }
  };

  console.log(topic, specific);

  return isLoading ? (
    <LoaderFullScreen />
  ) : (
    <div className="core-page">
      <Head>
        <title>ITRSQ - Contact</title>
        <meta property="og:title" content="ITRSQ - Contact" key="title" />
      </Head>
      <div className="contact-new">
        <HeroSection
          title={"Contact Us"}
          img={contactIcon}
          topTitle={"Get in Touch"}
        />
        <div className="filler"></div>

        <div className="flexxed">
          <div className="right-side">
            <Image src={devIcon} alt="" />
          </div>
          <div className="left-side">
            {success ? (
              <>
                <h1 className="">Your email has been sent !</h1>
                <button
                  className="btn-main orange-color"
                  onClick={() => setSuccess()}
                >
                  Send another
                </button>
              </>
            ) : (
              <>
                {/* <Select 
              className="customSelects"
              options={options} 
              // options={optionsSize}
              theme={customStyles}
              placeholder="What is this about ?"
              /> */}
                <div className="double">
                  <div className="single">
                    <label for="firstName" className="label-style">
                      First Name <span>*</span>
                    </label>
                    <input
                      name="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="single right-mar">
                    <label for="lastname" className="label-style">
                      Last Name <span>*</span>
                    </label>
                    <input
                      name="lastname"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="double">
                  <div className="single">
                    <label for="email" className="label-style">
                      Email <span>*</span>
                    </label>
                    <input
                      placeholder="Email"
                      name="email"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                    />
                  </div>
                  <div className="single right-mar">
                    <label for="ref" className="label-style">
                      Reference Number
                    </label>
                    <input
                      placeholder="Reference Number"
                      name="ref"
                      value={orderRef}
                      onChange={(e) => setOrderRef(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className="single right-mar">
                    <label for="topic" className="label-style">
                      What is this about ? <span>*</span>
                    </label>
                    <select
                      name="topic"
                      id="topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    >
                      {topics.map((topic) => {
                        return (
                          <option key={topic.value} value={topic.value}>
                            {topic.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="single right-mar">
                    <label for="website" className="label-style">
                      Could you be more specific ? <span>*</span>
                    </label>
                    {topic === "website" && (
                      <select
                        name="website"
                        id="website"
                        value={specific}
                        onChange={(e) => setSpecific(e.target.value)}
                      >
                        {websiteSpecifics.map((specific) => {
                          return (
                            <option key={specific.value} value={specific.value}>
                              {specific.title}
                            </option>
                          );
                        })}
                      </select>
                    )}
                    {topic === "itSupport" && (
                      <select
                        name="itSupport"
                        id="itSupport"
                        value={specific}
                        onChange={(e) => setSpecific(e.target.value)}
                      >
                        {itSupportSpecifics.map((specific) => {
                          return (
                            <option key={specific.value} value={specific.value}>
                              {specific.title}
                            </option>
                          );
                        })}
                      </select>
                    )}
                    {topic === "otherTopic" && (
                      <input
                        name="otherTopic"
                        id="otherTopic"
                        value={specific}
                        onChange={(e) => setSpecific(e.target.value)}
                        placeholder="Summarize your request in 2-3 words"
                      />
                    )}
                  </div>
                </div>
                <div className="single right-mar">
                  <label for="msg" className="label-style">
                    Your Message <span>*</span>
                  </label>
                  <textarea
                    name="msg"
                    id=""
                    cols="30"
                    rows="10"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                </div>

                {errorMessage && (
                  <h5 className="error-message">{errorMessage}</h5>
                )}
                <button
                  className="btn-main orange-color plane-icon"
                  onClick={() => submitHandle()}
                >
                  Submit <i className="fa fa-paper-plane"></i>
                </button>
              </>
            )}
          </div>
        </div>
        <div className="get-in-touch">
          <div className="single">
            <div className="flex-box">
              <div className="icons">
                <Image src={locationIcon} alt="" height="70" width="60" />
              </div>
              <div className="gridded">
                <div className="title">Office Address</div>
                <div className="under-title">123 High Street</div>
              </div>
            </div>
          </div>
          <div className="single">
            <div className="flex-box">
              <div className="icons">
                <Image src={phoneIcon} alt="" height="70" width="60" />
              </div>
              <div className="gridded">
                <div className="title">Phone Number</div>
                <div className="under-title">123 High Street</div>
              </div>
            </div>
          </div>
          <div className="single">
            <div className="flex-box">
              <div className="icons">
                <Image src={emailIcon} alt="" height="70" width="70" />
              </div>
              <div className="gridded">
                <div className="title">Email Us</div>
                <div className="under-title">123 High Street</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
