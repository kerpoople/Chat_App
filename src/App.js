import React from 'react';
import ChatLog from './ChatLog';
import ChatInput from './ChatInput';
import MessageBox from './MessageBox';
import UserList from './UserList';
import bots from './Settings/UserSettings';


//Possible bot statuses in UserList
const statuses = ['Online', 'Away', 'In game'];

//Function to create new chat messages.
function create_message(input_text, current_user) {
  var message = { text        : input_text,
                  user        : current_user,
                  time_stamp  : Date.now()
                };
  return message;
}

class App extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
          chat_log: [],
          users: bots
        }
        this.timer = setInterval(this.tick.bind(this), 1000); //Timer for bot messages.
        this.addMessage = this.addMessage.bind(this);
        this.chatChange = this.chatChange.bind(this);
        this.statusChange = this.statusChange.bind(this);
    }

    //Checks if last message contains bot name, bot responds if name is mentioned.
    chatChange() {
      for (var i = 0; i < this.state.users.length; i++) {
        let user = this.state.users[i];
        var current_bot_name = user.name;
        var last_message = this.state.chat_log[this.state.chat_log.length -1].text;
        var check_message = last_message.indexOf(current_bot_name);
        if (check_message !== -1) {
          this.addMessage(this.state.chat_log[this.state.chat_log.length -1].user + ": " + user.messages.answers[1], user.name);
        }
      }
    }


    //Randomize status for bots.
    statusChange(user) {
        user.timer -= 1;
        if (user.timer <= 0) {
          let bot_status_index = Math.round(Math.random()*(statuses.length -1));
          user.status = statuses[bot_status_index];
          user.timer = user.interval;
        }
    }

     //Time interval for bot messages.
    tick() {
      //Check if chat has changed
      if (this.state.chat_log.length !== 0) {
        this.chatChange();
      }
      for (var i = 0; i < this.state.users.length; i++) {
        let user = this.state.users[i];
        user.timer -= 1;
        if (user.timer <= 0) { //Randomize a bot message after given interval.
          this.statusChange(user);
          let bot_phrase_index =  Math.round(Math.random()*(user.messages.phrases.length -1));
          this.addMessage(user.messages.phrases[bot_phrase_index], user.name);
          user.timer = user.interval;
        }
      }
    }

    //Fucntion to add new message at end of chat log.
    addMessage(message, user) {
      let log = this.state.chat_log;
      log[log.length] = create_message(message, user);
      this.setState(chat_log : log);
    }

    render() {
        return (
            <div id="chat_log">
                <ChatLog chat_log = {this.state.chat_log} onChange = {this.chatChange} add_message = {this.addMessage} />
                <UserList users={this.state.users} />
            </div>
        )
    }
}

export default App;
