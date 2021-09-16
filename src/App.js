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

// Components
import Header from "./components/Header";
import PromotionalBanner from "./components/Promotions/PromotionalBanner";

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

  return (
    <div className="master-wrapper">
      <Router>
        {promotion && (
          <PromotionalBanner
            onX={() => promoXHandle()}
            onContact={() => promoHandle()}
          />
        )}
        <Header />
        <Switch>
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
