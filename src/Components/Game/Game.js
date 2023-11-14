import React from 'react'
import './Game.css'

function Game({questionAnswers}) {
let qAndAKey = questionAnswers.questions_answers
// let questions = qAndAKey.map((questions)=>(questions.text))


console.log(qAndAKey)

  return (
    <div className='Quiz__container'>
        {qAndAKey.map((question, index)=>(
            <div className='Quiz__data' key={index}>
                <h2>{question.text}</h2>
                <div className='Quiz__answers'>
                {question.answers.map((answers)=>(<button key={answers.id}>{answers.text}</button>))}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Game