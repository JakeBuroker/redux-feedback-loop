import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Admin() {
    const dispatch = useDispatch();
    const globalFeedback = useSelector(store => store.feedback);
  
    useEffect(() => {
      fetchFeedback();
    }, []);
  
    const fetchFeedback = () => {
      axios.get('/api/feedback')
        .then(response => {
          console.log('Feedback: ', response.data)
          dispatch({ type: 'SET_FEEDBACK', payload: response.data })
        })
        .catch(error => {
          console.error(error)
          alert('Could not fetch feedback! It is broken')
        })
    }
  
    const onClick = (feedback) => {
        axios.delete(`/api/feedback/${feedback}`)
          .then(response => {
            dispatch({ type: 'REMOVE', payload: feedback });
            fetchFeedback();
          })
          .catch(error => {
            console.error(error);
            alert('Error removing feedback');
          });
      }
      
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Review Your Feedback</h1>
        </header>
        <table>
          <tbody>
            <tr>
              <th>Feeling</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Read</th>
              <th>Remove</th>
            </tr>
            {globalFeedback.map((feedback) => (
              <tr key={feedback.id}>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td>{String(feedback.flagged)}</td>
                <td>
                  <button onClick={() => onClick(feedback.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default Admin