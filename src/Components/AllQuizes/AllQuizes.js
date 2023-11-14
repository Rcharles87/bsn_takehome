import React, { useState } from "react";
import "./AllQuizes.css";
import QuizDatabase from "../../Data/QuizDatabase";
import QuizCard from "../QuizCard/QuizCard";
import Game from "../Game/Game";

function AllQuizes({ setLoading }) {
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
      return <Game questionAnswers={dataToDisplay} />;
    } else {
      return (
        <div className="AllQuizes__content">
          {QuizDatabase.map((quizData) => (
            <QuizCard
              key={quizData.id}
              quizData={quizData}
              onClick={() => handleQuizSelection(quizData.id)}
            />
          ))}
        </div>
      );
    }
  };
  console.log(selectedQuizId, dataToDisplay);
  return <div className="AllQuizes">{renderedContent()}</div>;
}

export default AllQuizes;
