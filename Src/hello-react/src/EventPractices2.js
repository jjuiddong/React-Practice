import React, { useState } from "react";

const EventPractices2 = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + " : " + message);
    setUsername("");
    setMessage("");
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
        onChange={onChangeUsername}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="any input"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>Comment</button>
    </div>
  );
};

export default EventPractices2;
