import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/';
import { addUser } from '../../actions/user';

class AddUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }
  render() {
    return (
      <div>
        <input value = { this.state.name } onChange = { this.changeHandler } />
        <button onClick = { this.submitHandler } >Send</button>
        <input type="checkbox" ref="isFavorite"/>
      </div>
    );
  }
  changeHandler = (e) => {
    this.setState({name : e.target.value})
  }

  submitHandler = () => {
    let {name} = this.state;
    if(!name.length){
      alert('Not Engoy!');
      return;
    }
    this.appendFriend(name);
  }

  appendFriend = (name) => {
    let randId = +new Date() + Math.random().toString(),
        user = {
          id: randId,
          name: name,
          favorite: this.refs.isFavorite.checked
        };
    this.setState({name : ''});
    store.dispatch(addUser(user));
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.userReducer.users
  }
};

export default connect(  
  mapStateToProps,
)(AddUser);
