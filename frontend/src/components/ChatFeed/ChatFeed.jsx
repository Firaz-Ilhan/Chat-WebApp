import React, { Component } from "react";
import "./ChatFeed.scss";
import Message from '../Message/Message';

class ChatFeed extends Component {
    render() {
        const messages = this.props.ChatFeed.map(msg => <Message message={msg.data} />);

        return (
            <div className='chatfeed'>
                {messages}
            </div>
        );
    }
}

export default ChatFeed; 