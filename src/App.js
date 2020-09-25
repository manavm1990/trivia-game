import React from "react";

import { Header, Layout } from "./components";

const App = () => (
  <>
    <Layout />
    <Header />
    <main>
      <p>
        You will be presented with 10 True or False{" "}
        <span role="img" aria-label="question">
          ❓
        </span>
        s.
      </p>
      <p>
        Can you score{" "}
        <span role="img" aria-label="100">
          💯
        </span>
        %?
      </p>
    </main>
  </>
);

export default App;
