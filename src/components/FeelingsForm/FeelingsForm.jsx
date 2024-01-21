import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';

function FeelingsForm() {
  const [newFeeling, setNewFeeling] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('in handle submit', newFeeling);
    dispatch({ type: "SET_FEELING", payload: newFeeling });
    setNewFeeling(0);
    history.push('/UnderstandingForm')
  };

  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder='Add Feeling' value={newFeeling} onChange={(e) => setNewFeeling(e.target.value)} />
        <button>Add Feeling</button>
      </form>
    </div>
  );
}

export default FeelingsForm;