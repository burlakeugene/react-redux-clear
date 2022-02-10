import React, { Component } from 'react';
import ContentEditable from './components/ContentEditable';
import './styles/styles.scss';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
    };
  }
  change(nextValue, callback) {
    let { value } = this.state;
    nextValue = ('' + nextValue).replaceAll('<br>', '');
    if (
      /^[0]\d/.test(nextValue) ||
      /\.\d*\./.test(nextValue) ||
      !/^([\d\.]*)$/.test(nextValue)
    ) {
      nextValue = value;
    }
    if (
      this.props.allowChange &&
      !this.props.allowChange({ value: nextValue })
    ) {
      nextValue = value;
    }
    if (parseFloat(nextValue))
      nextValue = this.checkForLimit({
        value: nextValue,
        min: false,
      });
    this.setValue(nextValue, callback);
  }
  setValue(value, callback) {
    this.setState(
      {
        value,
      },
      () => {
        let { value } = this.state;
        this.input.setValue(value);
        this.props.onChange && this.props.onChange(value, this);
        callback && callback();
      }
    );
  }
  buttonClick(step) {
    let { value } = this.state;
    value = +value + +step;
    value = this.checkForDigits(value);
    value = this.checkForLimit({
      value,
    });
    this.change(value, () => {
      this.props.onBlur && this.props.onBlur(this);
    });
  }
  checkForDigits(value) {
    let { step, digits } = this.props,
      stepArr = step.toString().split('.'),
      stepDigits = stepArr.length > 1 ? stepArr[stepArr.length - 1].length : 0;
    return parseFloat(value.toFixed(digits ? digits : stepDigits));
  }
  checkForLimit({ value, min = true, max = true }) {
    if (min && this.props.hasOwnProperty('min') && value < this.props.min) {
      value = this.props.min;
    }
    if (max && this.props.hasOwnProperty('max') && value > this.props.max) {
      value = this.props.max;
    }
    return value;
  }
  onBlur() {
    let { value } = this.state;
    if (!value || value < this.props.min) {
      this.setValue(this.props.min);
    }
    this.setState({
      focused: false,
    });
    this.props.onBlur && this.props.onBlur(this);
  }
  onFocus() {
    this.setState({
      focused: true,
    });
    this.props.onFocus && this.props.onFocus(this);
  }
  onInput(value) {
    this.props.onInput && this.props.onInput(value, this);
  }
  render() {
    let { value, focused } = this.state,
      { valueAfter, valueBefore, step, min, max } = this.props;
    return (
      <div className={['field', focused ? 'field--focused' : ''].join(' ')}>
        {step ? (
          <button
            className="field__button field__button--dec"
            disabled={min && min >= value}
            onClick={() => {
              this.buttonClick(step * -1);
            }}
          ></button>
        ) : null}
        <div
          className="field__input"
          onClick={() => {
            this.input.focus();
          }}
        >
          {valueBefore ? (
            <div className="field__input__before">{valueBefore}</div>
          ) : null}
          <ContentEditable
            ref={(node) => (this.input = node)}
            className="field__input__value"
            value={value}
            onChange={(value) => {
              this.onInput(value);
              this.change(value);
            }}
            onBlur={() => {
              this.onBlur();
            }}
            onFocus={() => {
              this.onFocus();
            }}
          />
          {valueAfter ? (
            <div className="field__input__after">{valueAfter}</div>
          ) : null}
        </div>
        {step ? (
          <button
            className="field__button field__button--inc"
            disabled={max && max <= value}
            onClick={() => {
              this.buttonClick(step);
            }}
          ></button>
        ) : null}
      </div>
    );
  }
}

export default index;
