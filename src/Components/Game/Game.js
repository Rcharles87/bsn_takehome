import React from "react";
import { useState } from "react";
import "./Game.css";
import BackBtn from "../NavButtons/BackBtn";
import { Button } from "@mui/material";

function Game({ questionAnswers, setSelectedQuizId }) {
  const [selectedAnswer, setSelectedAnswer] = useState();
  let qAndAKey = questionAnswers.questions_answers;

  const handleBackBtn = () => {
    setSelectedQuizId(0);
  };

  const handleSelectedAnswers = (e) => {
    setSelectedAnswer(e.target.value);
  };

  console.log(qAndAKey, selectedAnswer);

  return (
    <div className="Quiz__container">
      <BackBtn handleBackBtn={handleBackBtn} />

      {qAndAKey.map((question, index) => (
        <div className="Quiz__data" key={index}>
          <h3>Question: {index + 1}</h3>
          <p>{question.text}?</p>
          <div className="Quiz__answers">
            {question.answers.map((answers) => (
              <Button
                variant="contained"
                size="small"
                key={answers.id}
                value={answers.is_true}
                onClick={handleSelectedAnswers}
              >
                {answers.text}
              </Button>
              
              // {selectedAnswer ? {answers.feedback_true} : {answers.feedback_false}}
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Game;
