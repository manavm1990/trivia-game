import React from "react";

import { Header, Main } from "components";

const Home = () => (
  <>
    <Header />
    <Main>
      {" "}
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
    </Main>
  </>
);

export default Home;
