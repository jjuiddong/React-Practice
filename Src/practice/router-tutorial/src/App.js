import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";


function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about?detail=true">About</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
      <hr></hr>
      <Route path="/" component={Home} exact></Route>
      <Route path={["/about", "/info"]} component={About}></Route>
      <Route path="/profiles" component={Profiles}></Route>
      <Route path="/history" component={HistorySample}></Route>
    </div>
  );
}

export default App;
