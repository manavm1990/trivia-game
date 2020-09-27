import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { ButtonBtn, Card, Loader, Main } from "components";

import styled from "styled-components";

import nprogress from "nprogress";
import "nprogress/nprogress.css";

import api from "api";
import { decodeCharCodes } from "utils";

const quizAPI = api();

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 192px;
  width: 80%;
`;

const FooterContainer = styled.footer`
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/filter */
  filter: hue-rotate(90deg);
  margin-top: 1rem;

  p {
    margin: 0.5rem 0;
  }
`;

const Quiz = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [quiz, setQuiz] = useState([]);
  const [scoreResults, setScoreResults] = useState([]);

  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        nprogress.start();
        const { results } = await (await quizAPI.index()).json();
        setQuiz(
          results.map((result) => ({
            ...result,

            // 'Clean up' 🧹 the question text!
            question: decodeCharCodes(result.question),
          }))
        );
      } catch (err) {
        console.error(err);
      } finally {
        nprogress.done();
      }
    })();
  }, []);

  useEffect(() => {
    if (activeQuestionIndex && activeQuestionIndex === quiz.length) {
      history.push("/results", { scoreResults });
    }
  });

  const activeQuestion = quiz[activeQuestionIndex];

  const handleClick = ({ target: { textContent } }) => {
    setScoreResults((prev) =>
      prev.concat({
        // Just need the text - not all of the deets!
        question: activeQuestion.question,
        result:
          // TODO: Add developer's note
          textContent.toLowerCase() ===
          activeQuestion.correct_answer.toLowerCase(),
      })
    );
    setActiveQuestionIndex((prev) => prev + 1);
  };

  return (
    <Main>
      {quiz.length && activeQuestionIndex !== quiz.length ? (
        <Card heading={activeQuestion.category}>
          <p>{activeQuestion.question}</p>

          <ButtonsContainer>
            <ButtonBtn success txt="true" clickHandler={handleClick} />
            <ButtonBtn txt="false" clickHandler={handleClick} />
          </ButtonsContainer>

          <FooterContainer>
            <small>
              <span role="img" aria-label="information-source">
                ℹ️
              </span>{" "}
              Question {activeQuestionIndex + 1} of {quiz.length}
              <p>Score will be shown at the end.</p>
            </small>
          </FooterContainer>
        </Card>
      ) : (
        <Card heading="⏳">
          <Loader />
        </Card>
      )}
    </Main>
  );
};

export default Quiz;
