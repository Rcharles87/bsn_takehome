import React from "react";
import "./QuizCard.css";
import EditBtn from "../NavButtons/EditBtn";

function QuizCard({ quizData, onClick, setEditQuizSelected }) {
  const { title, score, url, description, id } = quizData;
  

  const handleEditBtn = () => {
    setEditQuizSelected(true)
  }

  console.log(id)
  return (
    <div>
      <EditBtn handleEditBtn={handleEditBtn}/>

      <div className="QuizCard__content" onClick={onClick}>
        <h1>{title}</h1>
        <p>Description: {description}</p>
        <h4>Score:{score}</h4>
        <a href={url}>Link</a>
      </div>
    </div>
  );
}

export default QuizCard;
