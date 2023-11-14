import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

function NewBtn({handleNewQuizBtn}) {
  return (
    <Button startIcon={<AddIcon/>} onClick={handleNewQuizBtn}>New</Button>
  )
}

export default NewBtn