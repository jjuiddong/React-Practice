import React from 'react';
import './App.css';
//import Counter from './components/Counter';
import CounterContainer from './containers/CounterContainer';
//import Todos from './components/Todos';
import TodosContainer from './containers/TodosContainer';


function App() {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr></hr>
      <TodosContainer></TodosContainer>
    </div>
  );
}

export default App;
