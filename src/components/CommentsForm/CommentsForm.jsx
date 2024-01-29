import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Container, TextField, Button, Box } from '@mui/material';

function CommentsForm() {
  const [newComment, setNewComment] = useState('');
  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('in handle submit', newComment);
    dispatch({ type: "SET_COMMENT", payload: newComment});
    setNewComment('');
    
    history.push('/submit')
  };

  
  return (
    <div className='App'>
    <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
      <h4>Don't forget it!</h4>
    </header>
    <Container maxWidth="sm">
      <h2>Any comments you would like to leave?</h2>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, my: 2 }}>
          <TextField 
            data-testid="input"
            type="string"
            label="Comments"
            variant="outlined"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
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

export default CommentsForm