import React, { Component } from "react";
import "./History.scss";
import Message from '../Message/Message';

class History extends Component {
    render() {
        const messages = this.props.History.map(msg => <Message message={msg.data} />);

        return (
            <div className='history'>
                <h2>Chat History</h2>
                {messages}
            </div>
        );
    }
}

export default History; 