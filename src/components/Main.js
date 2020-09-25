import PropTypes from "prop-types";
import React from "react";

const Main = ({ children }) => <main>{children}</main>;

Main.propTypes = { children: PropTypes.element.isRequired };

export default Main;
