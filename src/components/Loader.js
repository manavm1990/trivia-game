import React from "react";

import styled from "styled-components";

// https://www.w3schools.com/howto/howto_css_loader.asp
const LoaderContainer = styled.div`
  animation: spin 2s linear infinite;
  border: 1rem solid white;
  border-radius: 50%;
  border-top: 1rem solid var(--tertiary-color);
  margin: 0 auto;
  height: 7.5rem;
  width: 7.5rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => <LoaderContainer />;

export default Loader;
