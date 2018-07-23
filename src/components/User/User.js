import React, { Component } from 'react';
import {store} from '../../store/';
import { removeUser, toggleFavorite } from '../../actions/user';
import {
  push
} from "react-router-redux";
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
        <button onClick={()=>{
          store.dispatch(push('/'))
        }}>index</button>
        <button onClick={()=>{
          store.dispatch(push('/about'))
        }}>to me</button>
        <button onClick = { this.toggleFavorite }> {this.props.user.favorite ? 'Unfavorive' : 'Favorive' }</button>
        <button onClick = { this.deleteHandler } >Delete</button>
        <hr />
    </div>
    );
  }
}

export default User;
