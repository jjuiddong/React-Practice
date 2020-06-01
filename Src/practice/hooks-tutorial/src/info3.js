// useReducer, useInputs
import React from "react";
import useInputs from "./useInputs";

const Info3 = () => {
  const [state, onChange] = useInputs({ name: "", nickname: "" });
  const { name, nickname } = state;

  return (
    <div>
      <input name="name" value={name} onChange={onChange}></input>
      <input name="nickname" value={nickname} onChange={onChange}></input>
      <div>
        <p>Name: {name}</p>
        <p>Nickname: {nickname}</p>
      </div>
    </div>
  );
};

export default Info3;
