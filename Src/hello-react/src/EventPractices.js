import React, { Component } from "react";

class EventPractices extends Component {
  state = {
    username: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      username : "",
      message : "",
    });
  };

  handleKeyPress = (e) => {
      if (e.key === 'Enter') {
          this.handleClick();
      }
  }

  render() {
    return (
      <div>
        <h1>Event Practices</h1>
        <input
          type="text"
          name="username"
          placeholder="user name"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>        
        <input
          type="text"
          name="message"
          placeholder="any input"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}          
        ></input>
        <button onClick={this.handleClick}>Comment</button>
      </div>
    );
  }
}

export default EventPractices;
