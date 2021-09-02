import "./App.css";

// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Containers
import Home from "./containers/Home";
import Support from "./containers/Support";
import Website from "./containers/Website";
import About from "./containers/About";
import Contact from "./containers/Contact";

// Components
import Header from "./components/Header";
import PromotionalBanner from "./components/Promotions/PromotionalBanner";

function App() {
  // Scroll Animation function usin AOS package
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  // States
  const [promotion, setPromotion] = useState(true);

  return (
    <div className="master-wrapper">
      <Router>
        {promotion && <PromotionalBanner onX={() => setPromotion(false)} />}
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
