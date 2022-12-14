import { Component } from "react";
import React from "react";

class Input extends Component {
  state = {
    text: "",
  };

  onChange(q) {
    this.setState({ text: q.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ text: "" });
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={(q) => this.onSubmit(q)}>
          <input
            onChange={(q) => this.onChange(q)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message and press ENTER"
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Input;
