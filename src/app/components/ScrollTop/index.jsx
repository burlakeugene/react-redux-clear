import React, { Component } from 'react';
import './styles/styles.scss';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.scroll = this.scroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }
  scroll(event) {
    let { visibleOffset } = this.props,
      { visible } = this.state,
      top = document.body.scrollTop || document.documentElement.scrollTop;
    if (!visible && top >= visibleOffset) {
      this.setState({
        visible: true,
      });
    } else if (visible && top < visibleOffset) {
      this.setState({
        visible: false,
      });
    }
  }
  render() {
    let { visible } = this.state;
    return (
      <button
        data-swipe-blur
        class={['scroll-top', visible ? 'scroll-top--visible' : ''].join(' ')}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <svg viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.5 6.5L6.99999 1L12.5 6.5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    );
  }
}

export default index;
