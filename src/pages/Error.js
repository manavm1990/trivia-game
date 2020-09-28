import React from "react";

import { Card, LinkBtn } from "components";
import { useLocation } from "react-router-dom";

const Error = () => {
  const { state } = useLocation();

  return (
    <Card heading={state?.error.message || "404! Page 📃 not found!"}>
      <LinkBtn route="/" txt="Play Again?" />
    </Card>
  );
};

export default Error;
