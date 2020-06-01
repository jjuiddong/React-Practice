import React, { useState } from "react";
import "./App.css";
//import MyComponent from "./MyComponent";
//import Counter from "./Counter";
//import Say from "./Say";
// import Say from "./EventPracices";
//import EventPractices from "./EventPractices";
//import EventPracices2 from "./EventPractices2";
//import EventPracices3 from "./EventPractices3";
//import ValidationSample from "./ValidationSample";
//import ScrollBox from "./ScrollBox";
//import IterationSample from "./IterationSample"
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function App() {
  //const name = "React";
  // const style = {
  //     backgroundColor: 'black',
  //     color: 'aqua',
  //     fontSize: '48px',
  //     fontWeight: 'bold',
  //     padding: 16
  // };

  const [color, setColor] = useState("");

  const handleClick = () => {
    setColor(getRandomColor());
  };

  return (
    //<MyComponent name="React"> </MyComponent>
    //<MyComponent> next text </MyComponent>
    //<MyComponent name="React" favoriteNumber={123}> next text </MyComponent>
    //<Counter></Counter>
    //<Say></Say>
    //<EventPractices> </EventPractices>
    //<EventPracices2> </EventPracices2>
    //<EventPracices3> </EventPracices3>
    //<ValidationSample></ValidationSample>
    // <div>
    //     <ScrollBox ref={(ref) => this.scrollBox = ref}></ScrollBox>
    //     <button onClick={() => this.scrollBox.scrollToBottom()}></button>
    // </div>
    //<IterationSample></IterationSample>
    <div>
      <button onClick={handleClick}>Random Color</button>
      <ErrorBoundary>
        <LifeCycleSample color={color}></LifeCycleSample>
      </ErrorBoundary>
    </div>

    // <div class="react">
    // {name}
    // <input></input>
    // </div>
  );
}

export default App;
