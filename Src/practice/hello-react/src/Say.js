import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("hello");
  const onClickLeave = () => setMessage("goodbye");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <h1 style={{color}}>{message}</h1>
      <button style={{color:'red'}} onClick={()=>setColor('red')}>Red</button>
      <button style={{color:'green'}} onClick={()=>setColor('green')}>Red</button>
      <button style={{color:'blue'}} onClick={()=>setColor('blue')}>Red</button>
    </div>
  );
};

export default Say;
