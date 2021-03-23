import React from "react";
import Info from "./Components/Info";
import Lanuches from "./Components/Lanuches";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Redirect,
  Router,
  Switch,
  Route,
} from "react-router-dom";
import Launch from "./Components/Launch";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Redirect strict from="/home" to="/" />
        <Route path="/launch/:launch_id">
          <Launch />
        </Route>
        <Route exact path="/">
          <Info />
          <Lanuches />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
