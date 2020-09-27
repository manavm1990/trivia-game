import React, { useEffect, useReducer } from "react";

import { Header, Main } from "components";

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
      const { results } = await (await quizAPI.index()).json();
      dispatch({ quizState: results, type: "init" });
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
