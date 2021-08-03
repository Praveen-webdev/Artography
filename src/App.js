import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/contact.jsx";
import Artgallery from "./components/Artgallery.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route component={Services} path="/services" />
          <Route component={Contact} path="/contact" />
          <Route component={Artgallery} path="/artgallery" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
