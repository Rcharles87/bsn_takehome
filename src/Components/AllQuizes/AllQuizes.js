import React, { useState } from "react";
import "./AllQuizes.css";
import QuizDatabase from "../../Data/QuizDatabase";
import QuizCard from "../QuizCard/QuizCard";
import Game from "../Game/Game";

function AllQuizes({setEditQuizSelected }) {
  const [selectedQuizId, setSelectedQuizId] = useState(0);

  const handleQuizSelection = (id) => {
    setSelectedQuizId(id);
  };

  let dataToDisplay = QuizDatabase;

  if (selectedQuizId) {
    dataToDisplay = dataToDisplay.find((quiz) => quiz.id === selectedQuizId);
  }

  const renderedContent = () => {
    if (selectedQuizId) {
      return (
        <Game
          questionAnswers={dataToDisplay}
          setSelectedQuizId={setSelectedQuizId}
        />
      );
    } else {
      return (
        <div className="AllQuizes__content">
          {dataToDisplay.map((quizData) => (
            <QuizCard
              setEditQuizSelected={setEditQuizSelected}
              key={quizData.id}
              quizData={quizData}
              onClick={() => handleQuizSelection(quizData.id)}
            />
          ))}
        </div>
      );
    }
  };
  return <div className="AllQuizes">{renderedContent()}</div>;
}

export default AllQuizes;
