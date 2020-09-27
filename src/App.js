import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Footer, Header, Layout } from "./components";

import { Home, Quiz, Results } from "./pages";

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
    </Switch>

    <Footer />
  </Router>
);

export default App;
