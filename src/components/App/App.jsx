import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import FeelingsForm from '../FeelingsForm/FeelingsForm'
import CommentsForm from '../CommentsForm/CommentsForm';
import Submit from "../Submit/Submit"
import SubmitSuccess from '../SubmitSuccess/SubmitSuccess';
import Admin from '../Admin/Admin';

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
      <Route path ="/Submit">
        <Submit/>
      </Route>
      <Route path ="/SubmitSuccess">
        <SubmitSuccess/>
      </Route>
      <Route path ="/Admin">
        <Admin/>
      </Route>
      </div>
    </Router>
  );
}

export default App;
