import React from 'react';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';

function SubmitSuccess() {
  const dispatch = useDispatch();
    const history = useHistory()
  
    const onclick = () => {
      history.push('/')
      dispatch({ type: "RESET"});
    };
  
    
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Thank You!</h1>
        </header>
        <h2>Leave more feedback!</h2>
          <button onClick={onclick} data-testid="next">Leave More</button>
      </div>
    );
  }
  
export default SubmitSuccess;