import React, { Component } from 'react';
import UserList from './User/UserList';
import AddUser from './User/AddUser';
import { NavLink } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <UserList />
        <AddUser />
        <NavLink
          to={'/about'}
          activeClassName="selected"
          >
          to index
        </NavLink>
      </div>
    );
  }
}

export default App;

