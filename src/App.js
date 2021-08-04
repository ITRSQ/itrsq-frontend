import "./App.css";

// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Containers
import Header from "./containers/Header";
import Home from "./containers/Home";
import Footer from "./containers/Footer";
import Consultancy from "./containers/Consultancy";
import Services from "./containers/Services";
import About from "./containers/About";
import Account from "./containers/Account";

function App() {
  // Scroll Animation function usin AOS package
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/consultancy">
          <Consultancy />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
