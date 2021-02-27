import React, { Component } from "react";
import History from './components/History/History';
import Header from './components/Header/Header';
import ChatInput from './components/ChatInput/ChatInput';
import "./App.css";
import { connect, sendMsg } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      History: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        History: [...prevState.History, msg]
      }))
      console.log(this.state);
    });
  }

  send(event) {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <History History={this.state.History} />
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;