import React from 'react';

//Renders status change button for active user.
class UserStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      selectValue: 'Online',
      }
      this.handleChange = this.handleChange.bind(this);
    }

  //Enable the active user to change online status.
  handleChange(event) {
    this.setState({selectValue: event.target.value});
  }

  render() {
    return (
      <div id="status_switch">
      <select value={this.state.selectValue} onChange={this.handleChange} >
        <option value="Online">Online</option>
        <option value="Away">Away</option>
        <option value="In Game">In Game</option>
      </select>
      </div>
    )
  }
}

export default UserStatus;
