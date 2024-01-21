import React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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
      <h2>How are you feeling today?</h2>
      <form  onSubmit={handleSubmit}>
        <input data-testid="input" type="number" placeholder='Add Feeling' value={newFeeling} onChange={(e) => setNewFeeling(e.target.value)} />
        <button data-testid="next" >NEXT</button>
      </form>
    </div>
  );
}

export default FeelingsForm;