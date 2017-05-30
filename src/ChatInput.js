import React from 'react';
import MessageBox from './MessageBox';
import ActiveUser from './ActiveUser';

//Renders input field for active user in the chat log.
class ChatInput extends React.Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }

     //Send text input as message to chat log when button is clicked.
    onClick() {
      var store_message = (document.getElementById("chat_input").value);
      var user = "Kalle_Med_Näven"
      if (store_message !== "") {
        this.props.add_message(store_message, user);
        document.getElementById("chat_input").value = "";
      }
      else alert("You must write something"); //Message can not be empty.
    }

    //Enables message to be sent when the enter key is pressed.
    handleKeyPress(event) {
      if (event.charCode===13) {
        this.onClick();
      }
    }

    render() {
        return (
            <div id="user_message">
              <input onKeyPress={this.handleKeyPress} type="text" id="chat_input" />
              <input type="button" className="button"  value="Send" onClick={this.onClick} />
            </div>
        )
    }
}



export default ChatInput;
