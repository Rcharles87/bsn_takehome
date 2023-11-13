import React from 'react'
import './Error.css'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


function Error({error}) {
  return (
    <div className='Error'>
      <div>
        <ErrorOutlineIcon fontSize='large'color='error'/>
      </div>
      There was an error: {error}
      <br />
      Please refresh and contact support
    </div>
  )
}

export default Error