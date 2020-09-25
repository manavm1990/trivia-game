import PropTypes from "prop-types";
import React from "react";

const Card = ({ children, heading }) => (
  <section>
    <h2>{heading}</h2>
    {children}
  </section>
);

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  heading: PropTypes.string.isRequired,
};

export default Card;
