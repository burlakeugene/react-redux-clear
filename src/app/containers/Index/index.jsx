import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Index extends Component {
  render() {
    return (
      <div>
        {this.props.test}
        <Link to='/test'>test</Link>
        <Link to='/test2'>test2</Link>
      </div>
    )
  }
}

export default connect(state => {
  return {
    test: state.appReducer.test
  };
})(Index);