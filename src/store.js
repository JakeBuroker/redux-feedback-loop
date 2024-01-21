import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import App from './components/App/App';

const feeling = (state = 0, action) => {
    if(action.type === 'SET_FEELING'){
      return state = parseFloat(action.payload)
    }
    if(action.type === 'RESET'){
      return state = 0}
    console.log(state)
    return state;
  }

  const understanding = (state = 0, action) => {
    if(action.type === 'SET_UNDERSTANDING'){
      return state = parseFloat(action.payload)
    }
    if(action.type === 'RESET'){
      return state = 0}
    console.log(state)
    return state;
  }

  const support = (state = 0, action) => {
    if(action.type === 'SET_SUPPORT'){
      return state = parseFloat(action.payload)
    }
    if(action.type === 'RESET'){
      return state = 0}
    console.log(state)
    return state;
  }


  const comment = (state = "", action) => {
    if(action.type === 'SET_COMMENT'){
      return state = action.payload
    }
    if(action.type === 'RESET'){
    return state = ""}
    console.log(state)
    return state;
  }





const store = createStore(
    combineReducers({
feeling,
understanding,
support,
comment
    }),
    applyMiddleware(logger),
  );
  
  
  export default store;