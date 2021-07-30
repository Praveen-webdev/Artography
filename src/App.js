import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route component={About} path="/About" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
