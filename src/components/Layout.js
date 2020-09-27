import React from "react";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #845EC2;
    --secondary-color: #3D7286;
    --tertiary-color: #D5CABD;
    --success-color: #03DAC6;
    --error-color: #B00020;
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

  header,
  footer {
    width: 100vw;
  }

  header {
    background-color: var(--primary-color);
    padding: 0.5rem;
  }

  h1,
  h2 {
    font-weight: bold;
  }
  
  a {
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:focus,
  a:hover {
    color: inherit;
  }

  main, section {
    margin: 0 auto;
  }
  
  main {
    background-color: var(--secondary-color);
    width: 100vw;
  }

  section {
    align-items: center;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 40vh;
    max-width: 768px;
    padding: 2rem 1rem;
  }

  ${"" /* 'min-heights' should prevent 'button jumping,' for the most part. */}
  section h2 {
    min-height: 20%;
  }

  section p {
    min-height: 25%;
  }

  p:last-child {
    margin-bottom: 0;
  }

  ul {
    margin: 0;
    text-align: left;
  }

  li {
    list-style-type: none;
  }

  li:not(:first-child) {
    margin: 1.25rem 0;
  }

  #root {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
  }
`;

const Layout = () => <GlobalStyle />;

export default Layout;
