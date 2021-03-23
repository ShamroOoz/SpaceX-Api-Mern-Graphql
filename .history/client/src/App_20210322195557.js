import React from "react";
import Info from "./Components/Info";
import Lanuches from "./Components/Lanuches";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Launch from "./Components/Launch";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="m-auto container">
        <Switch>
          <Route path="/launch/:launch_id">
            <Launch />
          </Route>
          <Redirect strict from="/home" to="/" />
          <Route exact path="/">
            <Info />
            <Lanuches />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
