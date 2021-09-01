// Packages
import { useState } from "react";
import axios from "axios";

// Components
import Footer from "../components/Footer";
import WhatsApp from "../components/Communication/WhatsApp";
import LoaderFullScreen from "../components/Utility/LoaderFullScreen";

// JSON
import topics from "../assets/json/topics.json";
import websiteSpecifics from "../assets/json/websiteSpecifics.json";
import itSupportSpecifics from "../assets/json/itSupportSpecifics.json";

const Contact = () => {
  // States
  const [topic, setTopic] = useState("website");
  const [specific, setSpecific] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [text, setText] = useState();
  const [subject, setSubject] = useState();
  const [orderRef, setOrderRef] = useState();
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

  return isLoading ? (
    <LoaderFullScreen />
  ) : (
    <div className="contact bg-gradient-orange">
      <WhatsApp />
      <div className="filler"></div>
      <div className="contact__container ">
        <div className="contact__form">
          {success ? (
            <>
              {" "}
              <h1 className="txt-header-small-white">
                Your email has been sent !
              </h1>
              <button className="btn-classic" onClick={() => setSuccess()}>
                Send another
              </button>
            </>
          ) : (
            <>
              {" "}
              <h1 className="txt-header-small-white">Contact</h1>
              <div>
                <div>
                  <h2 className="txt-description-small-white">
                    What is this about ? *
                  </h2>
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
                <div>
                  <h2 className="txt-description-small-white">
                    Could you be more specific ? *
                  </h2>
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
              <div>
                <div>
                  <h2 className="txt-description-small-white">First Name *</h2>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />{" "}
                  <h2 className="txt-description-small-white">Last Name *</h2>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className="txt-description-small-white">Email *</h2>
                  <input
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  />
                  <h2 className="txt-description-small-white">
                    Reference Number (if applicable)
                  </h2>
                  <input
                    value={orderRef}
                    onChange={(e) => setOrderRef(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <h2 className="txt-description-small-white">Your Message *</h2>
                <textarea
                  name=""
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
                className="btn-classic-blue"
                onClick={() => submitHandle()}
              >
                Submit
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
