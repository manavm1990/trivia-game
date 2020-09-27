import PropTypes from "prop-types";
import React from "react";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Card = ({ children, heading }) => (
  <motion.div initial="hidden" animate="visible" variants={variants}>
    <section>
      <h2>{heading}</h2>
      {children}
    </section>
  </motion.div>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
  ]).isRequired,
  heading: PropTypes.string.isRequired,
};

export default Card;
