import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

function Admin() {

    const dispatch = useDispatch();
    const globalFeedback = useSelector(store => store.feedback);
    const flagged = useSelector(store => store.feedback.flagged);

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
  
    const onClickRemove = (feedback) => {
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

      const onClickRead = (feedback) => {
        axios.put(`/api/feedback/${feedback}`)
          .then(response => {
            dispatch({ type: 'READ', payload: feedback });
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
            <h1 className='App-title'>Review Feedback</h1>
          </header>
    
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Feeling</TableCell>
                <TableCell>Understanding</TableCell>
                <TableCell>Support</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Flagged</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {globalFeedback.map((feedback) => (
                <TableRow key={feedback.id}>
                  <TableCell>{feedback.feeling}</TableCell>
                  <TableCell>{feedback.understanding}</TableCell>
                  <TableCell>{feedback.support}</TableCell>
                  <TableCell>{feedback.comments}</TableCell>
                  <TableCell>{String(feedback.flagged)}</TableCell>
                  <TableCell>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={() => onClickRead(feedback.id)}
                    >
                      Flag
                    </Button>
                    
                    <Button 
                      variant="contained" 
                      color="warning" 
                      onClick={() => onClickRemove(feedback.id)}
                      sx={{ mr: 1 }}
                    >
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      );
    }
    

  export default Admin