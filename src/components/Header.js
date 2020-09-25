import PropTypes from "prop-types";
import React from "react";

const Header = ({ txt }) => <h1>{txt}</h1>;

Header.propTypes = { txt: PropTypes.string };

Header.defaultProps = { txt: "Welcome to the Trivia Challenge!" };

export default Header;
