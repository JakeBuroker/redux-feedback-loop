import React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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
      <h2>Any comments you want to leave?</h2>
      <form onSubmit={handleSubmit}>
        <input data-testid="input" type="string" placeholder='Add Comment' value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <button data-testid="next">NEXT</button>
      </form>
    </div>
  );
}

export default CommentsForm