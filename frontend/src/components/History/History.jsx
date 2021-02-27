import React, { Component } from "react";
import "./History.scss";

class History extends Component {
    render() {
        const messages = this.props.History.map((msg, index) => (
            <p key={index}>{msg.data}</p>
        ));

        return (
            <div className="History">
                <h2>History</h2>
                {messages}
            </div>
        );
    }
}

export default History; 