import React from 'react';
import User from './User';
import ActiveUser from './ActiveUser';

 //Creates the user list right of chat log.
class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="user_list">
        <h4>Online right now:</h4>
        <div id="user_bots">
          {this.props.users.map(function(user) { return <User settings = {user} user_status = {user.status} key={user.name}/> })}
        </div>
        <ActiveUser />
      </div>
    )
  }
}

export default UserList;
