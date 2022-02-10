import React, { Component } from 'react';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }
  getTime() {
    let current = +new Date(),
      { from, to } = this.props,
      msPerMinute = 60 * 1000,
      msPerHour = msPerMinute * 60,
      diff = (() => {
        if (to) return to - current;
        if (from) return current - from;
      })();
    if (Math.floor(diff / 1000) <= 0){
      return '0 sec';
    }
    let hours = Math.floor(diff / msPerHour),
      hoursMs = hours * msPerHour,
      minutes = Math.floor((diff - hoursMs) / msPerMinute),
      minutesMs = minutes * msPerMinute,
      seconds = Math.floor((diff - hoursMs - minutesMs) / 1000);
    let result = '';
    if (hours) result += hours + ' h' + ' ';
    if (minutes || hours) result += minutes + ' min' + ' ';
    result += seconds + ' sec';
    return result;
  }
  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }
  render() {
    return this.getTime();
  }
}
