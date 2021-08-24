// Packages
import { useState } from "react";

// Components
import Footer from "../components/Footer";
import WhatsApp from "../components/Communication/WhatsApp";

// JSON
import topics from "../assets/json/topics.json";
import websiteSpecifics from "../assets/json/websiteSpecifics.json";
import itSupportSpecifics from "../assets/json/itSupportSpecifics.json";

const Contact = () => {
  // States
  const [topic, setTopic] = useState("website");
  const [specific, setSpecific] = useState();

  return (
    <div className="contact bg-gradient-orange">
      <WhatsApp />
      <div className="filler"></div>
      <div className="contact__container ">
        <div className="contact__form">
          <h1 className="txt-header-small-white">Contact</h1>
          <div>
            <div>
              <h2 className="txt-description-small-white">
                What is this about ?
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
                Could you be more specific ?
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
              <h2 className="txt-description-small-white">First Name</h2>
              <input />{" "}
              <h2 className="txt-description-small-white">Last Name</h2>
              <input />
            </div>
            <div>
              <h2 className="txt-description-small-white">Email</h2>
              <input />
              <h2 className="txt-description-small-white">
                Reference Number (if applicable)
              </h2>
              <input />
            </div>
          </div>
          <div>
            <h2 className="txt-description-small-white">Your Message</h2>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button className="btn-classic">Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
