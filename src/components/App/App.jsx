import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import FeelingsForm from '../FeelingsForm/FeelingsForm'
import CommentsForm from '../CommentsForm/CommentsForm';
import Review from '../Review/Review';

function App() {

  return (
    <Router>
    <div>
      <Route path = "/" exact>
        <FeelingsForm/>
      </Route>
      <Route path ="/UnderstandingForm">
        <UnderstandingForm/>
      </Route>
      <Route path ="/SupportForm">
        <SupportForm/>
      </Route>
      <Route path ="/CommentsForm">
        <CommentsForm/>
      </Route>
      <Route path ="/Review">
        <Review/>
      </Route>
      </div>
    </Router>
  );
}

export default App;
