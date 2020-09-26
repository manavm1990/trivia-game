import PropTypes from "prop-types";
import React from "react";

import styled, { css } from "styled-components";

import styles from "./shared-styles";

const ButtonContainer = styled.button`
   {
    ${styles}
    background: #B00020;  
    color: white;

    ${({ success }) =>
      success &&
      css`
        background: #03dac6;
        color: #333;
      `}
`;

const Button = ({ success, txt }) => (
  <ButtonContainer success={success} type="button">
    {txt}
  </ButtonContainer>
);

Button.defaultProps = {
  success: false,
};

Button.propTypes = {
  success: PropTypes.bool,
  txt: PropTypes.string.isRequired,
};

export default Button;
