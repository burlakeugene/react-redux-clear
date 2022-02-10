import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
let container = document.getElementById('swipe');
if (!container) {
  container = document.createElement('div');
  container.id = 'swipe';
  document.body.appendChild(container);
}

function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  );
}

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.pointerDown = this.pointerDown.bind(this);
    this.pointerUp = this.pointerUp.bind(this);
    this.pointerMove = this.pointerMove.bind(this);
  }
  pointerDown(event) {
    if (
      event.path.some((item) => {
        return item === this.drag;
      })
    ) {
      this.target.classList.add('draggable');
      this.draggable = {
        start: event.clientY,
        top: window.innerHeight - this.target.clientHeight,
        end: this.target.clientHeight * 0.5,
      };
    }
  }
  pointerUp(event) {
    setTimeout(() => {
      if (this?.draggable?.hide) {
        this.hide();
      }
      this.draggable = false;
      if (this.target) {
        this.target.classList.remove('draggable');
        this.target.style.removeProperty('transform');
      }
    }, 0);
  }
  pointerMove(event) {
    if (!this.draggable) return;
    let y = event.clientY - this.draggable.start;
    if (y < 0) y = 0;
    this.target.style.setProperty('transform', `translateY(${y}px)`);
    this.draggable.hide = y > this.draggable.end;
  }
  componentDidMount() {
    document.addEventListener('pointerdown', this.pointerDown);
    document.addEventListener('pointerup', this.pointerUp);
    document.addEventListener('pointermove', this.pointerMove);
  }
  componentWillUnmount() {
    document.removeEventListener('pointerdown', this.pointerDown);
    document.removeEventListener('pointerup', this.pointerUp);
    document.removeEventListener('pointermove', this.pointerMove);
    this.hide();
  }
  show(props) {
    let targets = document.querySelectorAll('[data-swipe-blur]');
    targets.length &&
      targets.forEach((target) => {
        target.setAttribute('data-swipe-blur', 'blured');
      });
    this.setState(
      {
        show: true,
        props,
      },
      () => {
        this.props.onShow && this.props.onShow();
      }
    );
  }
  hide() {
    let targets = document.querySelectorAll('[data-swipe-blur]');
    targets.length &&
      targets.forEach((target) => {
        target.setAttribute('data-swipe-blur', '');
      });
    this.setState(
      {
        show: false,
      },
      () => {
        this.props.onHide && this.props.onHide();
      }
    );
  }
  render() {
    let { show, props } = this.state,
      { className, settings, children } = this.props,
      dragEnable = true;
    if (settings?.drag?.hasOwnProperty('enable')) {
      dragEnable = settings.drag.enable;
    }
    return ReactDOM.createPortal(
      <div
        className={['swipe', show ? 'swipe--show' : '', className].join(' ')}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!this.draggable) this.hide();
        }}
      >
        <div
          className="swipe__inner"
          ref={(node) => (this.target = node)}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {dragEnable ? (
            <div
              className="swipe__inner__drag"
              ref={(node) => (this.drag = node)}
            ></div>
          ) : null}
          <div className="swipe__inner__content">
            {isFunction(children) ? children(props) : children}
          </div>
        </div>
      </div>,
      container
    );
  }
}

export default index;
