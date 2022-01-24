import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from 'store';
import { Provider } from 'react-redux';
import Counter from './Counter/index';
class App extends Component {
  render() {
    return <>
      <div>test</div>
      <Counter />
    </>;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
