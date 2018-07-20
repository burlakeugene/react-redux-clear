import React, { Component } from 'react';
import store from '../../store/';
import { removeUser, toggleFavorite } from '../../actions/user';

class User extends Component{
  deleteHandler = () => {
    let user = this.props.user;
    store.dispatch(removeUser(user));
  }
  toggleFavorite = () => {
    let user = this.props.user;
    store.dispatch(toggleFavorite(user));
  }
  render(){
    return(
      <div>
        {this.props.user.name}
        <br />
        <button onClick = { this.toggleFavorite }> {this.props.user.favorite ? 'Unfavorive' : 'Favorive' }</button>
        <button onClick = { this.deleteHandler } >Delete</button>
        <hr />
    </div>
    );
  }
}

export default User;
