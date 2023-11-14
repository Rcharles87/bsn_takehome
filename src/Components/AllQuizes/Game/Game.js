import React from 'react'

function Game({questionAnswers}) {
let qAndAKey = questionAnswers.questions_answers
// let questions = qAndAKey.map((questions)=>(questions.text))


console.log(qAndAKey)

  return (
    <div>
        {qAndAKey.map((question, index)=>(
            <div key={index}>
                <h2>{question.text}</h2>
                <div>
                {question.answers.map((answers)=>(<button key={answers.id}>{answers.text}</button>))}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Game