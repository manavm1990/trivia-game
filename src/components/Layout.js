import React from "react";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #845EC2;
    --secondary-color: #4E8397;
    --tertiary-color: #D5CABD;
  }
`;

const Layout = () => <GlobalStyle />;

export default Layout;
