import React from "react";

const date = new Date();

const Footer = () => (
  <footer>
    <p>&copy; {date.getFullYear()} Trivia Game! by CodeFinity</p>
  </footer>
);

export default Footer;
