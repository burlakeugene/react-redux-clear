import React, { Component } from 'react';
import './styles/styles.scss';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active || false,
    };
    this.toggle = this.toggle.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    if (state.active !== props.active) {
      return {
        active: props.active,
      };
    }
    return null;
  }
  toggle() {
    this.props.onChange && this.props.onChange(!this.state.active);
  }
  render() {
    let { active } = this.state;
    return (
      <div
        onClick={this.toggle}
        className={['humburger', active ? 'humburger--active' : ''].join(' ')}
      >
        <div className="humburger__inner">
          <span className="humburger__line humburger__line--top"></span>
          <span className="humburger__line humburger__line--middle"></span>
          <span className="humburger__line humburger__line--bottom"></span>
        </div>
      </div>
    );
  }
}

export default index;
