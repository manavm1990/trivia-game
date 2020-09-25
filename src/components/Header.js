import PropTypes from "prop-types";
import React from "react";

const Header = ({ txt }) => (
  <header>
    <h1>{txt}</h1>
  </header>
);

Header.propTypes = { txt: PropTypes.string };

Header.defaultProps = { txt: "Welcome to the Trivia Challenge!" };

export default Header;
