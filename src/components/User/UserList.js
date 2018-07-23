import React, { Component } from 'react';
import { connect } from 'react-redux';
import {store} from '../../store/';
import User from './User';

class UserList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.users.map((user, i) => {
          return <User key={i} user = {user} />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.userReducer.users
  }
};

export default connect(  
  mapStateToProps,
)(UserList);