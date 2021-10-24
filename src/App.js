import "./App.css";

// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Cookies from "js-cookie";

// Containers
import Home from "./containers/Home";
import Support from "./containers/Support";
import Website from "./containers/Website";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Blog from "./containers/Blog";
import Login from "./containers/Auth/Login";
import Signup from "./containers/Auth/Signup";
import Settings from "./containers/Auth/Settings";
import Projects from "./containers/Auth/Projects";
import Admin from "./containers/Auth/Admin";

// Components
import Header from "./components/Header";
import PromotionalBanner from "./components/Promotions/PromotionalBanner";
import LoaderFullScreen from "./components/Utility/LoaderFullScreen";

function App() {
  useEffect(() => {
    // Scroll Animation function usin AOS package
    Aos.init({ duration: 800 });

    // Promotional Banner check to see if user has already viewed
    if (Cookies.get("promo") === "seen") {
      setPromotion(false);
    } else {
      setPromotion(true);
    }
  }, []);

  // States
  const [promotion, setPromotion] = useState();
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Promotion Handle
  const promoXHandle = () => {
    Cookies.set("promo", "seen", { expires: 1 });
    Cookies.get("promo");
    window.location.reload();
  };

  const promoHandle = () => {
    Cookies.set("promo", "seen", { expires: 1 });
    Cookies.set("promoClick", true, { expires: 1 });
    window.location.href = "/contact";
  };

  // Function for creating or deleting Cookies and State Token and Id:
  const setTokenAndId = async (token, id) => {
    if (id) {
      await Cookies.set("userId", id);
    } else {
      await Cookies.remove("userId");
    }
    if (token) {
      await Cookies.set("userToken", token);
    } else {
      await Cookies.remove("userToken");
    }

    setUserId(id);
    setUserToken(token);
  };

  // useEffect for, on app loading, look for cookie token, call the function and stop isLoading
  useEffect(() => {
    const bootstrapAsync = async () => {
      const userToken = await Cookies.get("userToken");
      const userId = await Cookies.get("userId");
      setUserId(userId);
      setUserToken(userToken);

      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  return isLoading ? (
    <LoaderFullScreen />
  ) : (
    <div className="master-wrapper">
      <Router>
        {promotion && (
          <PromotionalBanner
            onX={() => promoXHandle()}
            onContact={() => promoHandle()}
          />
        )}
        <Header userToken={userToken} setTokenAndId={setTokenAndId} />
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/projects">
            <Projects
              userId={userId}
              userToken={userToken}
              setUserId={setUserId}
              setUserToken={setUserToken}
            />
          </Route>
          <Route path="/settings">
            <Settings
              userId={userId}
              userToken={userToken}
              setUserId={setUserId}
              setUserToken={setUserToken}
            />
          </Route>
          <Route path="/signup">
            <Signup setTokenAndId={setTokenAndId} />
          </Route>
          <Route path="/login">
            <Login setTokenAndId={setTokenAndId} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/website">
            <Website />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
