import React, { Component } from 'react';
import './styles/styles.scss';
export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || false,
      label: props.label || false,
      disabled: props.disabled || false,
      ignoreProps: false
    };
    this.toggle = this.toggle.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    if (state.ignoreProps) return null;
    if (state.disabled !== props.disabled || state.value !== props.value) {
      return {
        disabled: props.disabled,
        value: props.value
      };
    }
    return null;
  }
  toggle(e) {
    this.setState(
      {
        ignoreProps: true
      },
      () => {
        let { value } = this.state;
        this.setState(
          {
            value: !value
          },
          this.changed
        );
      }
    );
  }
  changed() {
    this.props.onChange && this.props.onChange(this.state);
    this.setState({
      ignoreProps: false
    });
  }
  render() {
    let { value, label, disabled } = this.state;
    return (
      <div
        className={['checkbox', disabled ? 'checkbox__disabled' : ''].join(' ')}
        onClick={e => {
          this.props.stopPropagation && e.stopPropagation();
        }}
      >
        <label>
          <input type="checkbox" checked={value} onChange={() => {}} />
          <div
            className="checkbox-inner"
            disabled={disabled}
            onClick={this.toggle}
          >
            <div className="checkbox-toggle"></div>
            {label ? <span>{label}</span> : null}
          </div>
        </label>
      </div>
    );
  }
}
