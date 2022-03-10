import React from 'react';

import User from './User';
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      users: [
        {
          name: 'Upendra',
          age: 30,
        },
        {
          name: 'Murali',
          age: 35,
        },
        {
          name: 'Ravi',
          age: 40,
        },
      ],
      pageInfo: {
        title: 'Users list',
        pageNum: 1,
        pageElements: [1, 2, 3, 4],
      },
    };
  }
  checkValues = () => {
    console.log('Before ', this.state);
    let newPageInfo = this.state.pageInfo;
    let pageTitle, pageNum;

    if (typeof newPageInfo.title == 'string') {
      pageTitle = newPageInfo.title + ' Updated';
    }
    if (typeof newPageInfo.pageNum == 'number') {
      pageNum = newPageInfo.pageNum += 1;
    }
    if (typeof newPageInfo.pageElements == 'object') {
      newPageInfo.pageElements.push(5);
    }
    this.setState({
      pageInfo: {
        title: pageTitle,
        pageNum: pageNum,
        pageElements: newPageInfo.pageElements,
      },
    });
    setTimeout(this.callMe, 2000);
  };
  updateUsers = () => {
    let newUsers = this.state.users.map((user) => {
      let newUserInfo = user;
      newUserInfo.age += 5;
      return newUserInfo;
    });
    console.log('Before ', this.state);
    this.setState({ user: newUsers });
    this.callMe();
  };
  callMe = () => {
    console.log('Called-->');
    console.log('After ', this.state);
  };
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>

        <button onClick={this.checkValues}>CheckpageInfo</button>
        <br />
        <br />
        <button onClick={this.updateUsers}>UpdateUsers</button>
        <br />
        <ul>
          <li>
            <User age={this.state.users[0].age}>
              {this.state.users[0].name}
            </User>
          </li>
          <li>
            <User age={this.state.users[1].age}>
              {this.state.users[1].name}
            </User>
          </li>
          <li>
            <User age={this.state.users[2].age}>
              {this.state.users[2].name}
            </User>
          </li>
        </ul>
      </div>
    );
  }
}

export default Users;
