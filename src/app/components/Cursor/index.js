import React, { Component } from 'react';
import './styles/styles.scss';

class Cursor extends Component {
  constructor() {
    super();
    this.state = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      state: 'default'
    };
    this.move = this.move.bind(this);
    this.down = this.down.bind(this);
    this.up = this.up.bind(this);
    this.wheel = this.wheel.bind(this);
  }
  componentDidMount() {
    this.addCursor();
  }
  componentWillUnmount() {
    this.removeCursor();
  }
  addCursor() {
    document.body.classList.add('custom-cursor');
    document.addEventListener('mousemove', this.move);
    document.addEventListener('mousedown', this.down);
    document.addEventListener('mouseup', this.up);
    document.addEventListener('touchstart', this.down);
    document.addEventListener('touchend', this.up);
    document.addEventListener('wheel', this.wheel);
  }
  removeCursor() {
    document.body.classList.remove('custom-cursor');
    document.removeEventListener('mousemove', this.move);
    document.removeEventListener('mousedown', this.down);
    document.removeEventListener('mouseup', this.up);
    document.removeEventListener('touchstart', this.down);
    document.removeEventListener('touchend', this.up);
    document.removeEventListener('wheel', this.wheel);
  }
  checkCursorTarget(target, tag, state) {
    if (target.tagName === tag || target.closest(tag)) {
      this.changeCursorState(state);
      return true;
    }
    return false;
  }
  changeCursorState(state) {
    state &&
      this.setState({
        state
      });
  }
  checkCursorState(e) {
    let { target } = e;
    if (!target) return;
    if (this.checkCursorTarget(target, 'a', 'link')) return;
    if (this.checkCursorTarget(target, 'body', 'default')) return;
  }
  move(e) {
    this.checkCursorState(e);
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  }
  down(e) {
    this.changeCursorState('click');
  }
  up(e) {
    this.checkCursorState(e);
  }
  wheel(e) {
    clearTimeout(this.timeout);
    let y = e.deltaY,
      x = e.deltaX;
    if (parseInt(y) !== 0) {
      y > 20 && this.changeCursorState('scroll-down');
      y < -20 && this.changeCursorState('scroll-up');
    } else {
      if (parseInt(x) !== 0) {
        x > 20 && this.changeCursorState('scroll-right');
        x < -20 && this.changeCursorState('scroll-left');
      }
    }
    this.timeout = setTimeout(() => {
      this.changeCursorState('default');
    }, 600);
  }
  render() {
    let { x, y, state } = this.state,
      styles = {
        left: x + 'px',
        top: y + 'px'
      };
    return (
      <div className={'cursors cursors__' + state}>
        <div className="cursor cursor__mini" style={styles} />
        <div className={'cursor cursor__big'} style={styles} />
      </div>
    );
  }
}

export default Cursor;
