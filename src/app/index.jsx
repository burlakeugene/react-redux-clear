import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Counter from 'components/Counter';
import Hook from 'components/Hook';
import store from 'store';
import './tests';
const App = (props) => {
  return (
    <>
      {props.text}
      <Link to="/">Index</Link> | <Link to="/page">Page</Link>
      <Counter />
      <Hook />
    </>
  );
};

render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App text={'index'} />} />
        <Route path="/page" element={<App text={'page'} />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('app')
);
