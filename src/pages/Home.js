import React from "react";

import { Card, LinkBtn, Main } from "components";

const Home = () => (
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
      <LinkBtn route="/quiz" txt="begin" />
    </Card>
  </Main>
);

export default Home;
