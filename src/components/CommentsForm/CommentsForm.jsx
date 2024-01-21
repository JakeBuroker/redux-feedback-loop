import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';

function CommentsForm() {
  const [newComment, setNewComment] = useState('');
  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('in handle submit', newComment);
    dispatch({ type: "SET_COMMENT", payload: newComment});
    setNewComment('');
    history.push('/review')
  };

  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>COMMENT!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <form onSubmit={handleSubmit}>
        <input type="string" placeholder='Add Feeling' value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <button>Add Feeling</button>
      </form>
    </div>
  );
}

export default CommentsForm;