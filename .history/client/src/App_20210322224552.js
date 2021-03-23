import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./Components/Context/ApolloContex";
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
import FetchData from "./Components/Hooks/FetchData";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <FetchData />
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
    </ApolloProvider>
  );
};

export default App;
