import React from "react";

import { useLocation } from "react-router-dom";

import styled, { css } from "styled-components";

import { Card, LinkBtn, Main } from "components";

const LI = styled.li`
  background: var(--error-color);
  display: flex;
  padding: 0.5rem 0.25rem;

  ${({ result }) =>
    /* 😠 This is kind of stupid that I have to convert it to a string to avoid getting warnings in 'styled components.' */
    result === "true"
      ? css`
          background: var(--success-color);
        `
      : undefined}

  span {
    margin-right: 4px;
    position: relative;
    top: 4px;
  }
`;

const Results = () => {
  const {
    state: { scoreResults },
  } = useLocation();

  const score = scoreResults.filter(({ result }) => result).length;

  return (
    <Main>
      <Card heading={`You Scored ${score}/${scoreResults.length}`}>
        <ul>
          {scoreResults.map(({ question, result }, i) => (
            <LI key={i} result={result.toString()}>
              <span>{result ? "➕" : "➖"}</span>
              {question}
            </LI>
          ))}
        </ul>

        <LinkBtn route="/" txt="Play Again?" />
      </Card>
    </Main>
  );
};

export default Results;
