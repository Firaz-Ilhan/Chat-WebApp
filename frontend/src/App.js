import React, { Component } from "react";
import ChatFeed from './components/ChatFeed/ChatFeed';
import Header from './components/Header/Header';
import ChatInput from './components/ChatInput/ChatInput';
import "./App.css";
import { connect, sendMsg } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatFeed: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatFeed: [...prevState.chatFeed, msg]
      }))
      console.log(this.state);
    });
  }

  sendMessage(event) {
    if (event.keyCode === 13 && event.target.value !== "") {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatFeed ChatFeed={this.state.chatFeed} />
        <ChatInput send={this.sendMessage} />
      </div>
    );
  }
}

export default App;