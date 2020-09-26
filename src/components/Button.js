import PropTypes from "prop-types";
import React from "react";

import styled, { css } from "styled-components";

const ButtonContainer = styled.button`
   {
    background: #B00020;
    border: none;
    border-radius: 4px;
    color: white;
    min-height: 48px;
    text-transform: uppercase;

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
