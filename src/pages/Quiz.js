import React, { useEffect } from "react";

import { Header, Main } from "components";

import api from "api";

const quizAPI = api();

const Quiz = () => {
  useEffect(() => {
    (async () => {
      const quiz = await (await quizAPI.index()).json();
      console.log(quiz);
    })();
  });

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
