import React from "react";
import Info from "./Components/Info";
import Lanuches from "./Components/Lanuches";
import Navbar from "./Components/Navbar";
import { globalProvide } from "./Components/Context/GlobalContext";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Launch from "./Components/Launch";
import FetchData from "./Components/Hooks/FetchData";

const App = () => {
  return (
    <globalProvide>
      {/* <FetchData /> */}
      <Router>
        <Navbar />
        <div className="m-auto container px-9">
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
    </globalProvide>
  );
};

export default App;
