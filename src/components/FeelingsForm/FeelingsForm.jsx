import React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Container, TextField, Button, Box } from '@mui/material';

function FeelingsForm() {
  const [newFeeling, setNewFeeling] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('in handle submit', newFeeling);
    dispatch({ type: "SET_FEELING", payload: newFeeling });
    setNewFeeling(0);
    if (newFeeling > 0 && newFeeling < 11)
    history.push('/UnderstandingForm')
  };

  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Container maxWidth="sm">
        <h2>How are you feeling today?</h2>
        <h3>1-10</h3>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, my: 2 }}>
            <TextField 
              data-testid="input"
              type="number"
              label="Feeling"
              variant="outlined"
              value={newFeeling}
              onChange={(e) => setNewFeeling(e.target.value)}
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
  );
}

export default FeelingsForm;