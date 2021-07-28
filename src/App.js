import "./App.css";

// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import Header from "./containers/Header";
import Home from "./containers/Home";
import Footer from "./containers/Footer";
import Consultancy from "./containers/Consultancy";
import Services from "./containers/Services";
import About from "./containers/About";
import Account from "./containers/Account";

function App() {
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
