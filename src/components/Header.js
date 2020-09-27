import PropTypes from "prop-types";
import React from "react";

import { Link } from "react-router-dom";

const Header = ({ txt }) => (
  <Link to="/">
    <header>
      <h1>{txt}</h1>
    </header>
  </Link>
);

Header.propTypes = { txt: PropTypes.string };

Header.defaultProps = { txt: "Welcome to the Trivia Challenge!" };

export default Header;
