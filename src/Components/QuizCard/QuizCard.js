import React from 'react'
import './QuizCard.css'



function QuizCard({quizData, onClick}) {
    const { title, score, url, description } = quizData

    // console.log(quizData)

  return (
    <div className='QuizCard__content' onClick={onClick}>
        <h1>
        {title}
        </h1>
        <h3>
            {description}
        </h3>
        <h4>
        Score:{score}
        </h4>
        <a href={url}>Link</a>
    </div>
  )
}

export default QuizCard