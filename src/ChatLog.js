import React from 'react';
import ChatInput from './ChatInput';
import MessageBox from './MessageBox';

//Chat log where bot and actve user messages are rendered.
class ChatLog extends React.Component {
    constructor(props) {
      super(props);
      this.drawMessage = this.drawMessage.bind(this);
    }

    //returns message from bot or active user.
    drawMessage(message, i) {
      return(<MessageBox message={message} key={i}/>);
    }

    //Auto scroll chat to latest message.
    componentDidUpdate () {
      var el = this.refs.scroll_message;
      el.scrollTop = el.scrollHeight;
    }


    render() {
      return (
      <div id="chat_window">
        <ul ref='scroll_message'>
          {this.props.chat_log.map(this.drawMessage)}
        </ul>
        <ChatInput add_message = {this.props.add_message} />
      </div>
      )
    }
}

export default ChatLog;
