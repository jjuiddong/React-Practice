import React, { useRef, useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import produce from "immer";

function App() {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        produce(draft => {
          draft[name] = value;
        })
      );
    },
    []
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      setData(
        produce(draft => {
          draft.array.push(info);
        })
      );

      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  const onRemove = useCallback(
    (id) => {
      setData(
        produce(draft => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1
          );
        })
      );
    },
    []
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="id"
          value={form.username}
          onChange={onChange}
        ></input>
        <input
          name="name"
          placeholder="name"
          value={form.name}
          onChange={onChange}
        ></input>
        <button type="submit">Register</button>
      </form>

      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClik={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
