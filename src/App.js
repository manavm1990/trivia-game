import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Footer, Header, Layout } from "./components";

import { Home, Quiz } from "./pages";

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
    </Switch>

    <Footer />
  </Router>
);

export default App;
