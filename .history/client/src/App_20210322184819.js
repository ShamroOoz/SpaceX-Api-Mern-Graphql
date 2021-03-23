import React from "react";
import Info from "./Components/Info";
import Lanuches from "./Components/Lanuches";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Info />
      <Lanuches />
    </Router>
  );
};

export default App;
