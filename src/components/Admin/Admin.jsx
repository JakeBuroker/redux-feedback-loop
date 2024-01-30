import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Modal, Box, Typography } from '@mui/material';
import { Margin } from "@mui/icons-material";

function Admin() {
    const dispatch = useDispatch();
    const globalFeedback = useSelector(store => store.feedback);

    const [openModal, setOpenModal] = useState(false);
    const [selectedFeedback, setSelectedFeedback] = useState(null);

    useEffect(() => {
        fetchFeedback();
    }, []);
  
    const fetchFeedback = () => {
        axios.get('/api/feedback')
            .then(response => {
                console.log('Feedback: ', response.data);
                dispatch({ type: 'SET_FEEDBACK', payload: response.data });
            })
            .catch(error => {
                console.error(error);
                alert('Could not fetch feedback! It is broken');
            });
    };
  
    const onClickRemove = (feedbackId) => {
        axios.delete(`/api/feedback/${feedbackId}`)
            .then(response => {
                dispatch({ type: 'REMOVE', payload: feedbackId });
                fetchFeedback();
                handleCloseModal();  // Close the modal after deletion
            })
            .catch(error => {
                console.error(error);
                alert('Error removing feedback');
            });
    };

    const onClickRead = (feedbackId) => {
        axios.put(`/api/feedback/${feedbackId}`)
            .then(response => {
                dispatch({ type: 'READ', payload: feedbackId });
                fetchFeedback();
            })
            .catch(error => {
                console.error(error);
                alert('Error removing feedback');
            });
    };

    const handleOpenModal = (feedback) => {
        setSelectedFeedback(feedback);
        setOpenModal(true);
    };
  
    const handleCloseModal = () => {
        setOpenModal(false);
    };
  
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
                                    onClick={() => handleOpenModal(feedback)}
                                    sx={{ mr: 1 }}
                                >
                                    DELETE
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Are you sure you want to delete this feedback?
                    </Typography>
                    {selectedFeedback && (
                        <Typography id="modal-description" sx={{ mt: 2 }}>
                            Feeling: {selectedFeedback.feeling}<br />
                            Understanding: {selectedFeedback.understanding}<br />
                            Support: {selectedFeedback.support}<br />
                            Comments: {selectedFeedback.comments}
                        </Typography>
                    )}
                    <Button onClick={() => onClickRemove(selectedFeedback.id)} variant="contained" color="warning">
                        DELETE
                    </Button>
                    
                    <Button onClick={handleCloseModal} variant="contained" color="primary" margin="right" > 
                        NO
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

export default Admin;
