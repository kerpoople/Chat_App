import React from 'react';
import UserStatus from './UserStatus';

//Renders name, status and picture for the active user in the user list.
class ActiveUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kalle_med_Näven",
      picture: "active_user",
      status: "online",
    }
  }

  render() {
    return (
      <div id="active_user">
        <p>Logged in as:</p>
        <div id="active_user_info">
          <p id="active_user_name">{this.state.name}</p>
          <UserStatus />
          <img id="active_user_img" src={"img/" + this.state.picture + ".png"} />

        </div>
      </div>
    )
  }
}

export default ActiveUser;
