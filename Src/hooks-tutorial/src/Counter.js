import React, { useState, useEffect } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log('rendering complete');
    console.log({name, nickname});
    return () => {
        console.log('cleanup');
        console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <p>
        Counter :<b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
      <input value={name} onChange={onChangeName}></input>
      <input value={nickname} onChange={onChangeNickname}></input>
      <div>
        <p>Name: {name}</p>
        <p>Nickname: {nickname}</p>
      </div>
    </div>
  );
};

export default Counter;
