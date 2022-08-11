import React from 'react';
import { createRoot } from 'react-dom/client';
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

const container = document.getElementById('app');
const root = createRoot(container);
import Notifications from './components/Notifications';

root.render(
  <Provider store={store}>
    <Router>
      <Link to="/">Index</Link> | <Link to="/todolist">ToDo</Link> |{' '}
      <Link to="/demo">Demo</Link>
      <Notifications />
      <Routes>
        <Route path="/" element={<Demos />} />
        <Route path="/todolist" element={<ToDo />} />
      </Routes>
    </Router>
  </Provider>
);
