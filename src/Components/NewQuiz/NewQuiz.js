import React, { useState } from 'react'
import './NewQuiz.css'
import BackBtn from '../NavButtons/BackBtn';

function NewQuiz({setNewQuizSelected}) {

    const [newQuiz, setNewQuiz] = useState({
        discription:'',
        questions_answer:[],
        title: '',
        url: ''
    });

    const handleBackBtnNewQuiz = () =>{
        setNewQuizSelected(false)
    }

    const handleTextChange = (e) =>{
        setNewQuiz({...newQuiz, [e.target.value]: e.target.value})
    }

    const handleSubmit = () =>{

    }


  return (
    <div className='NewQuizForm__container'>
        <BackBtn handleBackBtnNewQuiz={handleBackBtnNewQuiz}/>
        <form onSubmit={handleSubmit}>
                <h1>Create New Quiz</h1>
            <label htmlFor="Description"> Description:</label>
            <input 
            value={newQuiz.discription}
            type="text" 
            id="description" 
            onChange={handleTextChange}
            placeholder='Please enter description'
            />
            <label htmlFor=""></label>
            <input type="text" name="" id="" />

          
            <label htmlFor="title">Title:</label>
            <input 
            value={newQuiz.title}
            type="text" 
            id="title"
            onChange={handleTextChange}
            placeholder='Please enter title' 
            />
            <label htmlFor="url">Url:</label>
            <input 
            value={newQuiz.url}
            type='text' 
            id="url" 
            onChange={handleTextChange}
            placeholder='Please Submit Url'
            />
        </form>
    </div>
  )
}

export default NewQuiz