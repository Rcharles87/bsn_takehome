import React from 'react'
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function EditBtn({handleEditBtn}) {

    
  return (
    <Button startIcon={<EditIcon/>} onClick={handleEditBtn}>Edit</Button>
  )
}

export default EditBtn