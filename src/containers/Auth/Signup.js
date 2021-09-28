// Packages
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Components
import Footer from "../../components/Footer";

const Signup = ({ setTokenAndId }) => {
  const history = useHistory();
  // States
  const [errorMessage, setErrorMessage] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();

  // Signup Button Function
  const signupHandle = async () => {
    try {
      const response = await axios.post(
        "https://itrsq.herokuapp.com/users/signup",
        { email: email, password: password, confirmPassword: confirmPassword }
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
            {" "}
            <h1 className="txt-header-medium-white">Signup</h1>
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
            <label className="txt-description-small-white">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="btn-classic-blue" onClick={() => signupHandle()}>
              Signup
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
