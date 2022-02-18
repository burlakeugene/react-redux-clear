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
      msPerDay = msPerHour * 24,
      diff = (() => {
        if (to) return to - current;
        if (from) return current - from;
      })();
    if (Math.floor(diff / 1000) <= 0) {
      return '0 sec';
    }
    let days = Math.floor(diff / msPerDay),
      daysMs = days * msPerDay,
      hours = Math.floor((diff - daysMs) / msPerHour),
      hoursMs = hours * msPerHour,
      minutes = Math.floor((diff - daysMs - hoursMs) / msPerMinute),
      minutesMs = minutes * msPerMinute,
      seconds = Math.floor((diff - daysMs - hoursMs - minutesMs) / 1000);
    let result = '';
    if (days) result += days + ' d' + ' ';
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
