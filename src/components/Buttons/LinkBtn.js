import PropTypes from "prop-types";
import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import styles from "./shared-styles";

const LinkContainer = styled(Link)`
   {
    ${styles}

    align-items: center;
    background: #ff8800;
    color: #333;
    display: flex;
    justify-content: center;
  }
`;

const LinkBtn = ({ route, txt }) => (
  <LinkContainer to={route}>{txt}</LinkContainer>
);

LinkBtn.propTypes = {
  route: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
};

export default LinkBtn;
