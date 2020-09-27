import PropTypes from "prop-types";
import React from "react";

import styled, { css } from "styled-components";

import styles from "./shared-styles";

const ButtonContainer = styled.button`
   {
    ${styles}
    background: #B00020;  
    color: white;
    outline: none;

    ${({ success }) =>
      success &&
      css`
        background: #03dac6;
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
