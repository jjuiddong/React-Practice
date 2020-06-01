import React, {useState} from "react";

const EventPractices3 = () => {
  const [form, setForm] = useState({
    username: "",
    message: ""
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + " : " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>Event Practice</h1>
      <input
        type="text"
        name="username"
        placeholder="user name"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="any input"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>Comment</button>
    </div>
  );
};

export default EventPractices3;
