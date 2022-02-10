import React, { Component } from 'react';
import './styles/styles.scss';

class index extends Component {
  render() {
    let { value, label, checkedText, uncheckedText, onChange, checkedContent} = this.props;
    return (
      <div className="toggle">
        {label ? <div className="toggle__label">{label}</div> : null}
        <div className="toggle__control">
          <label>
            <input
              type="checkbox"
              checked={value}
              onChange={(e) => {
                onChange && onChange(e.target.checked);
              }}
            />
            <div></div>
          </label>
        </div>
        {value && checkedText ? (
          <div className="toggle__description">{checkedText}</div>
        ) : null}
        {!value && uncheckedText ? (
          <div className="toggle__description">{uncheckedText}</div>
        ) : null}
        {value && checkedContent ? (
          <div className="toggle__content">{checkedContent}</div>
        ) : null}
      </div>
    );
  }
}

export default index;
