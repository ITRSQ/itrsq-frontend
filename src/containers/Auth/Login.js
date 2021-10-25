// Packages
import { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

// Components
import Footer from "../../components/Footer";
import LoaderFullScreen from "../../components/Utility/LoaderFullScreen";

const Login = ({ setTokenAndId }) => {
  const history = useHistory();
  // States
  const [errorMessage, setErrorMessage] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [privacy, setPrivacy] = useState(true);

  // Login Button Function
  const loginHandle = async () => {
    try {
      const response = await axios.post(
        "https://itrsq.herokuapp.com/users/login",
        { email: email, password: password }
      );

      if (response.data.token) {
        setTokenAndId(response.data.token, response.data._id);
        setErrorMessage();
        if (response.data.token === "Icj9uXDIVFuXffUpiGH1FhFLkwJxvePF") {
          history.push("/admin");
        } else {
          history.push("/projects");
        }
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
            {" "}
            <h1 className="txt-header-medium-white">Login</h1>
            {errorMessage && <h2 className="error-message">{errorMessage}</h2>}
          </div>
          <div>
            <label className="txt-description-small-white">
              Email{" "}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autocomplete="on"
              />
            </label>

            <label className="txt-description-small-white">
              Password{" "}
              <input
                type={privacy === true ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autocomplete="current-password"
              />
              {privacy === true ? (
                <i
                  class="fas fa-eye icn-privacy"
                  onClick={() => setPrivacy(false)}
                ></i>
              ) : (
                <i
                  class="fas fa-eye-slash icn-privacy"
                  onClick={() => setPrivacy(true)}
                ></i>
              )}
            </label>
          </div>
          <div>
            <button className="btn-classic-blue" onClick={() => loginHandle()}>
              Login
            </button>
            <Link to="/signup">
              Don't have an account yet ? <br />
              Signup here
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
