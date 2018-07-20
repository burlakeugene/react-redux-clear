import React, { Component } from 'react';
import UserList from './User/UserList';
import AddUser from './User/AddUser';
class App extends Component {
  render() {
    return (
      <div>
        <UserList />
        <AddUser />
      </div>
    );
  }
}

export default App;

