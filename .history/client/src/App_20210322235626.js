import React from "react";
import Info from "./Components/Info";
import Lanuches from "./Components/Lanuches";
import Navbar from "./Components/Navbar";
import LaunchDetails from "./Components/LaunchDetails";
import { GlobalProvide } from "./Components/Context/GlobalContext";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <GlobalProvide>
      <Router>
        <Navbar />
        <div className="m-auto container px-9">
          <Switch>
            <Route path="/launch/:launch_id">
              <LaunchDetails />
            </Route>
            <Redirect strict from="/home" to="/" />
            <Route exact path="/">
              <Info />
              <Lanuches />
            </Route>
          </Switch>
        </div>
      </Router>
    </GlobalProvide>
  );
};

export default App;
