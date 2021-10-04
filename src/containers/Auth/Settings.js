// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Cookies from "js-cookie";

// Components
import LoaderFullScreen from "../../components/Utility/LoaderFullScreen";
import Footer from "../../components/Footer";

const Settings = ({ userId, userToken, setUserId, setUserToken }) => {
  // States
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [privacy, setPrivacy] = useState(true);
  const [privacy1, setPrivacy1] = useState(true);

  //   Fetch User Data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const userToken = await Cookies.get("userToken");
      const userId = await Cookies.get("userId");
      setUserId(userId);
      setUserToken(userToken);
      try {
        const formData = new FormData();

        formData.append("_id", userId);
        const response = await axios.post(
          `https://itrsq.herokuapp.com/user/account`,
          formData,
          {
            headers: {
              authorization: `Bearer ${userToken}`,
            },
          }
        );
        setEmail(response.data.email);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // Modify Email
  const emailHandle = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("_id", userId);
      formData.append("email", email);
      const response = await axios.post(
        `https://itrsq.herokuapp.com/user/modify/email`,
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (response.data === "Email Changed") {
        setIsLoading(false);
        alert("Your email has been successfully changed");
      }
    } catch (error) {
      alert(error.response.data.error);
      setIsLoading(false);
    }
  };

  // Modify Password
  const passwordHandle = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("_id", userId);
      formData.append("password", password);
      formData.append("confirmPassword", confirmPassword);
      const response = await axios.post(
        `https://itrsq.herokuapp.com/user/modify/password`,
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (response.data === "Password Changed") {
        setIsLoading(false);
        alert("Your password has been successfully changed");
      }
    } catch (error) {
      alert(error.response.data.error);
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <LoaderFullScreen />
  ) : (
    <div className="settings bg-gradient-orange">
      <div className="settings__container">
        <h1 className="txt-header-medium-white">Settings</h1>
        <div>
          <div>
            <h2 className="txt-header-small-white">Change Email</h2>
            <label className="txt-description-small-white">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="btn-classic-blue"
                onClick={() => emailHandle()}
              >
                Apply change
              </button>
            </label>
          </div>
          <div>
            <h2 className="txt-header-small-white">Change Password</h2>
            <label className="txt-description-small-white">
              New Password{" "}
              <input
                type={privacy === true ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            <label className="txt-description-small-white">
              Confirm New Password{" "}
              <input
                type={privacy1 === true ? "password" : "text"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {privacy1 === true ? (
                <i
                  class="fas fa-eye icn-privacy"
                  onClick={() => setPrivacy1(false)}
                ></i>
              ) : (
                <i
                  class="fas fa-eye-slash icn-privacy"
                  onClick={() => setPrivacy1(true)}
                ></i>
              )}
              <button
                className="btn-classic-blue"
                onClick={() => passwordHandle()}
              >
                Apply change
              </button>
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
