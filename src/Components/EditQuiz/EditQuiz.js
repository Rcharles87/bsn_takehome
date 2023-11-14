import React, { useState } from 'react'
import './EditQuiz.css'
import BackBtn from '../NavButtons/BackBtn'

function EditQuiz({setEditQuizSelected}) {

    const [editQuiz, setEditQuiz] = useState({
        discription:'',
        questions_answer:[],
        title: '',
        url: ''
    });

    const handleEditBackBtn = () => {
        setEditQuizSelected(false)
    }

    const handleTextChange = (e) =>{
        setEditQuiz({...editQuiz, [e.target.value]: e.target.value})
    }

    const handleSubmit = () =>{

    }

  return (
    <div className='EditForm__container'>
        <div>
        <BackBtn handleEditBackBtn={handleEditBackBtn}/>
        </div>
        <form onSubmit={handleSubmit}>
            <h1>Edit Quiz: Quiz Title</h1>
            <label htmlFor="Description"> Description:</label>
            <input 
            value={editQuiz.discription}
            type="text" 
            id="description" 
            onChange={handleTextChange}
            placeholder='Please enter description'
            />
            <label htmlFor=""></label>
            <input type="text" name="" id="" />

          
            <label htmlFor="title">Title:</label>
            <input 
            value={editQuiz.title}
            type="text" 
            id="title"
            onChange={handleTextChange}
            placeholder='Please enter title' 
            />
            <label htmlFor="url">Url:</label>
            <input 
            value={editQuiz.url}
            type='text' 
            id="url" 
            onChange={handleTextChange}
            placeholder='Please Submit Url'
            />
        </form>
    </div>
  )
}

export default EditQuiz