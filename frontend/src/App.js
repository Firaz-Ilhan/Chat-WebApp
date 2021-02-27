import React, { Component } from "react";
import History from './components/History/History';
import Header from './components/Header/Header';
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

  send() {
    sendMsg("hello");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <History History={this.state.History} />
        <button onClick={this.send}>Send Message</button>
      </div>
    );
  }
}

export default App;