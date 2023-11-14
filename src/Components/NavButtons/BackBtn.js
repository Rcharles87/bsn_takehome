import React from 'react'
import './BackBtn.css'
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function BackBtn({handleBackBtn}) {
  return (
    <Button className='BackBtn' startIcon={<ArrowBackIcon/>} onClick={handleBackBtn}> Back</Button>
  )
}

export default BackBtn