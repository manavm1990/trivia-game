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
    color: white;
  }

  header,
  section,
  footer {
    text-align: center;
  }

  header {
    background-color: var(--primary-color);
  }

  header {
    padding: 0.5rem;
  }

  h1,
  h2 {
    font-weight: bold;
  }
  
  a {
    text-decoration: none;
  }

  section {
    background-color: var(--secondary-color);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    min-height: 50vmin;
    max-width: 768px;
    padding: 2rem 1rem;
    width: 100vw;
  }

  p:last-child {
    margin-bottom: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
  }
`;

const Layout = () => <GlobalStyle />;

export default Layout;
