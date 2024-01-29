import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Container, TextField, Button, Box } from '@mui/material';

function SupportForm() {
  const [newSupport, setNewSupport] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('in handle submit', newSupport)
    dispatch({ type: "SET_SUPPORT", payload: newSupport});
    setNewSupport(0);
  if (newSupport > 0 && newSupport < 11)
    return history.push('/CommentsForm')
  };

  return (
  <div className='App'>
  <header className='App-header'>
    <h1 className='App-title'>Feedback!</h1>
    <h4>Don't forget it!</h4>
  </header>
  <Container maxWidth="sm">
    <h2>How well are you being supported?</h2>
    <h3>1-10</h3>
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, my: 2 }}>
        <TextField 
          data-testid="input"
          type="number"
          label="Support"
          variant="outlined"
          value={newSupport}
          onChange={(e) => setNewSupport(e.target.value)}
          inputProps={{ min: 1, max: 10 }}  
          sx={{ width: '100%', maxWidth: 300 }}
        />
        <Button data-testid="next" variant="contained" type="submit">
          NEXT
        </Button>
      </Box>
    </form>
  </Container>
</div>)
}

export default SupportForm;