import React from "react";

import styled from "styled-components";

const date = new Date();

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  padding: 1rem 0.5rem;
`;

const Footer = () => (
  <FooterContainer>
    <p>
      &copy; {date.getFullYear()} Trivia Game! by{" "}
      <a
        href="https://twitter.com/GoCodeFinity"
        target="_blank"
        rel="noopener noreferrer"
      >
        CodeFinity
      </a>
    </p>
  </FooterContainer>
);

export default Footer;
