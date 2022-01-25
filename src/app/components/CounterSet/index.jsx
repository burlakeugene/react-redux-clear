import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment, set } from 'store/reducers/counter';
import { withRouter } from 'react-router-dom';
class index extends Component {
  set(value) {
    this.props.set(value);
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.set(this.props.value);
          }}
        >
          Set {this.props.value}, current {this.props.counter}
        </button>
      </div>
    );
  }
}
export default connect(
  (state) => {
    return {
      counter: state.counter.value,
    };
  },
  { set },
  null,
  { forwardRef: true }
)(index);
