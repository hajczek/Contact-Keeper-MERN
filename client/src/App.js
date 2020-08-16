import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        My app
      </div>
    </Router>
  );
};

export default App;
