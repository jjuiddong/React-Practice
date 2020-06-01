import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";
import { ColorProvider } from "./contexts/color";
import SelectColors from './components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors></SelectColors>
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>
  );
};

export default App;
