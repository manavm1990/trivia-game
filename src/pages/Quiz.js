import React, { useEffect, useReducer, useState } from "react";

import { Card, Header, Loader, Main } from "components";

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

const Quiz = () => {
  const [quiz, dispatch] = useReducer(reducer, []);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const activeQuestion = quiz[activeQuestionIndex];

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

  return (
    <>
      <Header />
      <Main>
        {quiz.length ? (
          <Card heading={activeQuestion.category}>
            <p>{activeQuestion.question}</p>
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
