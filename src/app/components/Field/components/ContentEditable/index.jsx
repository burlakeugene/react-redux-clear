import React, { Component } from 'react';

function setCaretToPos(elem, pos, focused) {
  if (!focused || !elem) return;
  var range = document.createRange();
  var sel = window.getSelection();
  range.setStart(elem.childNodes[0] || elem, pos);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
}

class ContentEditable extends Component {
  constructor(props) {
    super(props);
    this.dom = props.domElement || 'div';
    this.emitChange = this.emitChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  emitChange() {
    var html = this.node.innerHTML;
    this.props.onChange(html);
  }
  onClick(e) {
    this.props.onClick && this.props.onClick(e);
  }
  onFocus(e) {
    this.focused = true;
    this.props.onFocus && this.props.onFocus(e);
  }
  onBlur(e) {
    this.focused = false;
    this.props.onBlur && this.props.onBlur(e);
  }
  focus() {
    let node = this.node;
    this.focused = true;
    setCaretToPos(node, node.innerText.length, this.focused);
  }
  blur() {
    let node = this.node;
    node.blur();
  }
  componentDidMount() {
    this.setValue(this.props.value);
  }
  setValue(value) {
    let selection = window.getSelection();
    if (this.node.innerText != value) {
      let pos = selection.anchorOffset - 1;
      if (pos <= 0) pos = 0;
      this.node.innerText = value;
      if (pos > this.node.innerText.length) pos = this.node.innerText.length;
      if (
        selection.anchorNode === this.node.childNodes[0] ||
        selection.anchorNode === this.node
      ) {
        setCaretToPos(this.node, pos, this.focused);
      }
    }
  }
  render() {
    return (
      <this.dom
        onInput={this.emitChange}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        onClick={this.onClick}
        className={this.props.className}
        contentEditable
        ref={(node) => (this.node = node)}
      ></this.dom>
    );
  }
}

export default ContentEditable;
