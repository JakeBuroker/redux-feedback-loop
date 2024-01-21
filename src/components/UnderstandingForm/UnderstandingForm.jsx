import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
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
    if (newUnderstanding > 0 && newUnderstanding < 11)
    history.push('/SupportForm')
  };

  
  return (
    <div className='App'>
      <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <h2>How well are you understanding the content?</h2>
      <h3>1-10</h3>
      <form onSubmit={handleSubmit}>
        <input data-testid="input" type="number" placeholder='Add Feeling' value={newUnderstanding} onChange={(e) => setNewUnderstanding(e.target.value)} />
        <button data-testid="next">NEXT</button>
      </form>
    </div>
  );
}

export default UnderstandingForm;