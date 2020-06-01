//import React, {useState, Suspense, Component} from "react";
import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
//const SplitMe = React.lazy(()=>import('./SplitMe'));
import loadable from '@loadable/component';
const SplitMe = loadable(()=>import('./SplitMe'), {
  fallback: <div>loading...</div>
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  }
  const onMouseOver = () => {
    SplitMe.preload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
         {visible && <SplitMe></SplitMe>}
      </header>
    </div>
  );
}


// function App() {
//   const [visible, setVisible] = useState(false);
//   const  onClick = () => {
//     setVisible(true);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p onClick={onClick}>Hello React!</p>
//         <Suspense fallback={<div>loading...</div>}>
//           {visible && <SplitMe></SplitMe>}
//         </Suspense>
//       </header>
//     </div>
//   );
// }

// function App() {
//   const  onClick = () => {
//     //import notify from './notify';
//     import('./notify').then(result => result.default());
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p onClick={onClick}>Hello React!</p>
//       </header>
//     </div>
//   );
// }

// class App extends Component {
//   state = {
//     SplitMe: null,
//   };

//   handleClick = async () => {
//     const loadedModule = await import('./SplitMe');
//     this.setState({
//       SplitMe: loadedModule.default
//     });
//   };

//   render() {
//     const {SplitMe} = this.state;
//     return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p onClick={this.handleClick}>Hello React!</p>
//         {SplitMe && <SplitMe></SplitMe>}
//       </header>
//     </div>
//     );
//   }
// }

export default App;
