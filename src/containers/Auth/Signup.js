// Packages
import { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

// Components
import Footer from "../../components/Footer";

const Signup = ({ setTokenAndId }) => {
  const history = useHistory();
  // States
  const [errorMessage, setErrorMessage] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [privacy, setPrivacy] = useState(true);
  const [privacy1, setPrivacy1] = useState(true);
  const [newsletter, setNewsletter] = useState(false);

  // Signup Button Function
  const signupHandle = async () => {
    try {
      const response = await axios.post(
        "https://itrsq.herokuapp.com/users/signup",
        {
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          newsletter: newsletter,
        }
      );

      if (response.data.token) {
        setTokenAndId(response.data.token, response.data.id);
        setErrorMessage();
        history.push("/");
      }
    } catch (e) {
      setErrorMessage(e.response.data.error);
    }
  };

  return (
    <div className="auth bg-gradient-orange">
      <div className="filler"></div>
      <div className="auth__container">
        <div className="auth__form">
          <div>
            <h1 className="txt-header-medium-white">Signup</h1>
            {errorMessage && <h2 className="error-message">{errorMessage}</h2>}
          </div>
          <div>
            <label className="txt-description-small-white">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="on"
              />
            </label>
            <label className="txt-description-small-white">
              Password
              <input
                type={privacy === true ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              {privacy === true ? (
                <i
                  className="fas fa-eye icn-privacy"
                  onClick={() => setPrivacy(false)}
                ></i>
              ) : (
                <i
                  className="fas fa-eye-slash icn-privacy"
                  onClick={() => setPrivacy(true)}
                ></i>
              )}
            </label>
            <label className="txt-description-small-white">
              Confirm Password
              <input
                type={privacy1 === true ? "password" : "text"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="current-password"
              />
              {privacy1 === true ? (
                <i
                  className="fas fa-eye icn-privacy"
                  onClick={() => setPrivacy1(false)}
                ></i>
              ) : (
                <i
                  className="fas fa-eye-slash icn-privacy"
                  onClick={() => setPrivacy1(true)}
                ></i>
              )}
            </label>
            <p className="txt-description-small-white">
              <input
                type="checkbox"
                value={newsletter}
                onChange={(e) => setNewsletter(!newsletter)}
              />
              Do you wish to receive our monthly newsletter containing articles,
              tutorials and news ?
            </p>
          </div>
          <div>
            <button className="btn-classic-blue" onClick={() => signupHandle()}>
              Signup
            </button>
            <Link to="/login">
              Already have an account ? <br />
              Signup here
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
