import React from 'react';

import User from './User';
class Users extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          <li>
            <User age="">Upendra</User>
          </li>
          <li>
            <User age="40"></User>
          </li>
          <li>
            <User age="50">Ravi</User>
          </li>
        </ul>
      </div>
    );
  }
}

export default Users;
