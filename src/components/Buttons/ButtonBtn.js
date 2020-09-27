import PropTypes from "prop-types";
import React from "react";

import styled, { css } from "styled-components";

import styles from "./shared-styles";

const ButtonContainer = styled.button`
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

const Button = ({ clickHandler, success, txt }) => (
  <ButtonContainer success={success} onClick={clickHandler} type="button">
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
