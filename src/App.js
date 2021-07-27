import "./App.css";

// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import Header from "./containers/Header";
import Home from "./containers/Home";
import Footer from "./containers/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route to="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
