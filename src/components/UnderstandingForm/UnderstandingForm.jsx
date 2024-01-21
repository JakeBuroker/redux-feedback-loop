import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

function UnderstandingForm() {
  const [newUnderstanding, setNewUnderstanding] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('in handle submit', newUnderstanding)
    dispatch({ type: "SET_UNDERSTANDING", payload: newUnderstanding });
    setNewUnderstanding(0);
    history.push('/SupportForm')
  };

  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Understanding</h1>
        <h4>Understanding!</h4>
      </header>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder='Add Feeling' value={newUnderstanding} onChange={(e) => setNewUnderstanding(e.target.value)} />
        <button>Add Understanding</button>
      </form>
    </div>
  );
}

export default UnderstandingForm;