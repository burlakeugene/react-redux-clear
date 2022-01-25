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
import store from 'store';

const App = (props) => {
  return (
    <>
      {props.text}
      <Link to="/">Index</Link> | <Link to="/page">Page</Link>
      <Counter />
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
