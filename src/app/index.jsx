import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Demos from 'containers/Demos';
import ToDo from 'containers/ToDo';
import store from 'store';
import './tests';
import './styles.scss';
import DynamicTime from 'components/DynamicTime';
render(
  <Provider store={store}>
    <Router>
      <Link to="/">Index</Link> | <Link to="/todolist">ToDo</Link>
      <Routes>
        <Route path="/" element={<Demos />} />
        <Route path="/todolist" element={<ToDo />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('app')
);
