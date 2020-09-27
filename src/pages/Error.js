import React from "react";

import { Card, LinkBtn, Main } from "components";
import { useLocation } from "react-router-dom";

const Error = () => {
  const { state } = useLocation();

  return (
    <Main>
      <Card heading={state?.error.message || "404! Page 📃 not found!"}>
        <LinkBtn route="/" txt="Play Again?" />
      </Card>
    </Main>
  );
};

export default Error;
