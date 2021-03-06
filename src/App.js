import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/contact.jsx";
import Artgallery from "./components/Artgallery.jsx";
import Home from "./components/Home.jsx";
import Whatsapp from "./components/Whatsapp.jsx";
import ScrollRestoration from "react-scroll-restoration";

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <div className="App" id="page-wrap">
        <div id="content-wrap">
          <Navbar />
          <Switch>
            <Route exact component={Home} path="/" />
            <Route component={Services} path="/services" />
            <Route component={Contact} path="/contact" />
            <Route component={Artgallery} path="/artgallery" />
          </Switch>
          <Whatsapp />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
