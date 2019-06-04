import React from "react";
import { Provider } from "react-redux";
import Messages from "./Messages";
import "antd/dist/antd.css";

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }
  }

  pushMessage(message) {
    let messages = this.state.messages;
    messages.push(message);
    this.setState({ messages: messages })

    console.log(messages);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Messages />
      </Provider>
    );
  }
}

export default Root;
