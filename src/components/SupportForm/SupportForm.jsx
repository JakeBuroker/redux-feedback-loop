import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

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
      <h2>How well are you being supported?</h2>
      <h3>1-10</h3>
      <form onSubmit={handleSubmit}>
        <input data-testid="input" type="number" placeholder='Add Feeling' value={newSupport} onChange={(e) => setNewSupport(e.target.value)} />
        <button data-testid="next" >NEXT</button>
      </form>
    </div>
  );
}

export default SupportForm;