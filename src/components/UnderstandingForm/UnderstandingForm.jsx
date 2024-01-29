import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Container, TextField, Button, Box } from '@mui/material';


function UnderstandingForm() {
  const [newUnderstanding, setNewUnderstanding] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('in handle submit', newUnderstanding)
    dispatch({ type: "SET_UNDERSTANDING", payload: newUnderstanding });
    setNewUnderstanding(0);
    if (newUnderstanding > 0 && newUnderstanding < 11)
    history.push('/SupportForm')
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Container maxWidth="sm">
        <h2>How well are you understanding the content?</h2>
        <h3>1-10</h3>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, my: 2 }}>
            <TextField 
              data-testid="input"
              type="number"
              label="Understanding"
              variant="outlined"
              value={newUnderstanding}
              onChange={(e) => setNewUnderstanding(e.target.value)}
              inputProps={{ min: 1, max: 10 }}  
              sx={{ width: '100%', maxWidth: 300 }}
            />
            <Button data-testid="next" variant="contained" type="submit">
              NEXT
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  )
}

export default UnderstandingForm;