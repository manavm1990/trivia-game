import React from "react";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #845EC2;
    --secondary-color: #4E8397;
    --tertiary-color: #D5CABD;
  }

  body {
    background-color: #333;
  }

  header,
  section {
    color: white;
    text-align: center;
  }

  header {
    background-color: var(--primary-color);
    padding: 0.5rem;
  }

  h1 {
    font-weight: bold;
  }

  main {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 10vmin;
  }
  
  section {
    background-color: var(--secondary-color);
    border-radius: 4px;
    min-height: 50vmin;
    max-width: 768px;
    padding: 1.5rem;
    width: 100vw;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const Layout = () => <GlobalStyle />;

export default Layout;
