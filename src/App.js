import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { Footer, Header, Layout } from "./components";

import { Error, Home, Quiz, Results } from "./pages";

const App = () => (
  <Router>
    <Layout />

    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/quiz">
        <Quiz />
      </Route>

      <Route exact path="/results">
        <Results />
      </Route>

      <Route exact path="/error">
        <Error />
      </Route>

      <Route>
        <Redirect to="/error" />
      </Route>
    </Switch>

    <Footer />
  </Router>
);

export default App;
