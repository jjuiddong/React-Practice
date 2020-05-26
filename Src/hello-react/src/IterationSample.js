import React, { useState } from "react";

const IterationSample = () => {
  // const names = ['snow', 'ice', 'wind'];
  // const namesList = names.map((name, index) => <li key={index}>{name}</li>);

  const [names, setNames] = useState([
    { id: 1, text: "snow" },
    { id: 2, text: "ice" },
    { id: 3, text: "wind" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const nameList = names.map((name) => <li key={name.id} 
    onDoubleClick={()=> onRemove(name.id)}>{name.text}</li>);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };
  const onRemove = id => {
      const nextNames = names.filter(name => name.id !== id);
      setNames(nextNames);
  }

  return (
    <>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>Add</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
