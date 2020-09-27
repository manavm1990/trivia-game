import React, { useEffect, useReducer, useState } from "react";

import { ButtonBtn, Card, Header, Loader, Main } from "components";

import styled from "styled-components";

import nprogress from "nprogress";
import "nprogress/nprogress.css";

import api from "api";

const quizAPI = api();

function reducer(state, action) {
  switch (action.type) {
    case "init":
      return state.concat(action.quizState);
    default:
      throw new Error("🙅🏽‍♂️ Illegal action!");
  }
}

const ButtonsContainer = styled.div`
   {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
  }
`;

const Quiz = () => {
  const [quiz, dispatch] = useReducer(reducer, []);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        nprogress.start();
        const { results } = await (await quizAPI.index()).json();
        dispatch({ quizState: results, type: "init" });
      } catch (err) {
        console.error(err);
      } finally {
        nprogress.done();
      }
    })();
  }, []);

  const activeQuestion = quiz[activeQuestionIndex];

  const handleClick = ({ target: { textContent } }) => {
    console.log(textContent);
  };

  return (
    <>
      <Header />
      <Main>
        {quiz.length ? (
          <Card heading={activeQuestion.category}>
            {/* TODO: 'Convert' character codes! */}
            <p>{activeQuestion.question}</p>

            <ButtonsContainer>
              <ButtonBtn success txt="true" clickHandler={handleClick} />
              <ButtonBtn txt="false" clickHandler={handleClick} />
            </ButtonsContainer>
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
