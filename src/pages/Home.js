import React from "react";

import { Card, Header, Main } from "components";

const Home = () => (
  <>
    <Header />
    <Main>
      <Card heading="About">
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
      </Card>
    </Main>
  </>
);

export default Home;
