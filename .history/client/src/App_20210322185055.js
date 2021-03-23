import React from "react";
import Info from "./Components/Info";
import Lanuches from "./Components/Lanuches";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Launch from "./Components/Launch";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Info />
      <Lanuches />
      <Switch>
        <Route path="/:launch_id">
          <Launch />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
