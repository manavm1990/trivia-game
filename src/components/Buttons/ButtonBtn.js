import PropTypes from "prop-types";
import React from "react";

import styled, { css } from "styled-components";

import { motion } from "framer-motion";

import styles from "./shared-styles";

const ButtonContainer = styled(motion.button)`
  ${styles}
  background: var(--error-color);
  color: white;
  cursor: pointer;
  outline: none;

  ${({ success }) =>
    success &&
    css`
      background: var(--success-color);
      color: #333;
    `}
`;

const variants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};

const Button = ({ clickHandler, success, txt }) => (
  <ButtonContainer
    success={success}
    onClick={clickHandler}
    type="button"
    variants={variants}
    initial="rest"
    whileHover="hover"
    whileTap="pressed"
  >
    {txt}
  </ButtonContainer>
);

Button.defaultProps = {
  success: false,
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  success: PropTypes.bool,
  txt: PropTypes.string.isRequired,
};

export default Button;
