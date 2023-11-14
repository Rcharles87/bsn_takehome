import React from 'react'
import './BackBtn.css'
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function BackBtn({handleBackBtn, handleBackBtnNewQuiz, handleEditBackBtn }) {
  return (
    <Button className='BackBtn' startIcon={<ArrowBackIcon/>} onClick={handleBackBtn || handleEditBackBtn ||handleBackBtnNewQuiz }>Back</Button>
  )
}

export default BackBtn