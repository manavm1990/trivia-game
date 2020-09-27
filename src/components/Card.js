import PropTypes from "prop-types";
import React from "react";

const Card = ({ children, heading }) => (
  <section>
    <h2>{heading}</h2>
    {children}
  </section>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
  ]).isRequired,
  heading: PropTypes.string.isRequired,
};

export default Card;
