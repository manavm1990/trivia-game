import React, { useEffect, useState } from "react";

import { ButtonBtn, Card, Header, Loader, Main } from "components";

import styled from "styled-components";

import nprogress from "nprogress";
import "nprogress/nprogress.css";

import api from "api";
import { decodeCharCodes } from "utils";

const quizAPI = api();

const ButtonsContainer = styled.div`
   {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
  }
`;

const FooterContainer = styled.footer`
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/filter */
  filter: hue-rotate(90deg);
  margin-top: 1rem;
`;

const Quiz = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [quiz, setQuiz] = useState([]);
  const [scoreResults, setScoreResults] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        nprogress.start();
        const { results } = await (await quizAPI.index()).json();
        setQuiz(results);
      } catch (err) {
        console.error(err);
      } finally {
        nprogress.done();
      }
    })();
  }, []);

  const activeQuestion = quiz[activeQuestionIndex];

  const handleClick = ({ target: { textContent } }) => {
    setScoreResults((prev) =>
      prev.concat({
        question: activeQuestion,
        result:
          // TODO: Add developer's note
          textContent.toLowerCase() ===
          activeQuestion.correct_answer.toLowerCase(),
      })
    );
    setActiveQuestionIndex((prev) => prev + 1);
  };

  return (
    <>
      <Header />
      <Main>
        {quiz.length ? (
          <Card heading={activeQuestion.category}>
            <p>{decodeCharCodes(activeQuestion.question)}</p>

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
              </small>
            </FooterContainer>
          </Card>
        ) : (
          <Card heading="⏳">
            <Loader />
          </Card>
        )}
      </Main>
    </>
  );
};

export default Quiz;
