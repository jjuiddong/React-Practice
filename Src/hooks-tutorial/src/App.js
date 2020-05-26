import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Counter from './Counter.js'
import Counter2 from './Counter2.js'

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={()=>{
        setVisible(!visible);
      }}>
        {visible? 'Hide':'Show'}
      </button>

      <hr></hr>
      <Counter2></Counter2>
    </div>
  );
}

export default App;
