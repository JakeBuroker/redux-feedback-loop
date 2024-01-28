import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

function Submit() {

  const globalFeeling = useSelector(store => store.feeling)
  const understanding = useSelector(store => store.understanding)
  const support = useSelector(store => store.support)
  const comments = useSelector(store => store.comment)
  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault();
history.push("/SubmitSuccess")
    const newFeedback = {
      feeling: globalFeeling,
      understanding: understanding,
      support: support,
      comments: comments
    }

    axios.post('/api/feedback', newFeedback)
      .then( response => {
        console.log()
      })
      .catch(error => {
        console.error(error)
        alert()
      })

  };

  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Review Your Feedback</h1>
      </header>
          <h2>Feeling: {globalFeeling} </h2>
          <h2>Understanding: {understanding} </h2>
          <h2>Support: {support}</h2>
          <h2>Comment: {comments}</h2>
        <form  onSubmit={handleSubmit} >
          <button data-testid="next" type="submit">
           SUBMIT
          </button>
        </form>
        </div>
  );
}

export default Submit
