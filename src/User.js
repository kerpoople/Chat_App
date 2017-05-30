import React from 'react';
import ActiveUser from './ActiveUser';

//Renders username, status and image of bots.
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:     props.settings.name,
      picture:  props.settings.picture,
      status:   props.settings.status[0],
    }
  }


  render() {
    return (
        <div id="user_box">
          <p id="chat_user">{this.state.name}</p>
          <p id="chat_status">{this.props.user_status}</p>
          <img id="user_img" src={"img/" + this.state.picture + ".png"} />
        </div>
    )
  }
}

export default User;
