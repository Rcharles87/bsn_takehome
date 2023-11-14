import React from 'react'
import './Game.css'
import BackBtn from '../NavButtons/BackBtn'
import { Button } from '@mui/material'

function Game({questionAnswers, setSelectedQuizId}) {
let qAndAKey = questionAnswers.questions_answers

const handleBackBtn = () => {
  setSelectedQuizId(0)
}
 

console.log(qAndAKey)

  return (
    <div className='Quiz__container'>
     <BackBtn handleBackBtn={handleBackBtn}/>

        {qAndAKey.map((question, index)=>(
            <div className='Quiz__data' key={index}>
              <h3>Question: {index + 1}</h3>
                <p>{question.text}?</p>
                <div className='Quiz__answers'>
                {question.answers.map((answers)=>(<Button variant="contained" size="small" key={answers.id}>{answers.text}</Button>))}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Game