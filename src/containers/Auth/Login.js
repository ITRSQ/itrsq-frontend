// Packages
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Components
import Footer from "../../components/Footer";

const Login = ({ setTokenAndId }) => {
  const history = useHistory();
  // States
  const [errorMessage, setErrorMessage] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  // Login Button Function
  const loginHandle = async () => {
    try {
      const response = await axios.post(
        "https://itrsq.herokuapp.com/users/login",
        { email: email, password: password }
      );

      if (response.data.token) {
        setTokenAndId(response.data.token, response.data.id);
        setErrorMessage();
        history.push("/");
      }
    } catch (e) {
      setErrorMessage(e.response.data.error);
      console.log("ya");
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
            <label className="txt-description-small-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="txt-description-small-white">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="btn-classic-blue" onClick={() => loginHandle()}>
              Login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
