import React, { useEffect, useReducer } from "react";

import { Header, Main } from "components";

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
  const [_, dispatch] = useReducer(reducer, []);

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
        <p>Fat!</p>
      </Main>
    </>
  );
};

export default Quiz;
