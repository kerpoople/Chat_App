import React from 'react';

//Container for user name and message in chat log.
class MessageBox extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
         return (
            <div id="message_list">
              <p className="user">{ this.props.message.user + ":" }</p>
              <p className="msg">{ this.props.message.text }</p>
            </div>
         )
  }
}

export default MessageBox;
