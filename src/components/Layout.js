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
  header {
    background-color: var(--primary-color);
    color: white;
    padding: 0.5rem;
    text-align: center;
  }
`;

const Layout = () => <GlobalStyle />;

export default Layout;
