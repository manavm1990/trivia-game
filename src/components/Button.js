import PropTypes from "prop-types";
import React from "react";

const Button = ({ txt }) => <button type="button">{txt}</button>;

Button.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default Button;
