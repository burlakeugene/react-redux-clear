import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Demos from 'containers/Demos';
import ToDo from 'containers/ToDo';
import Test from 'containers/Test';
import Number from 'components/Number';
import store from 'store';
import './tests';
import './styles.scss';

const container = document.getElementById('app');
const root = createRoot(container);
import Notifications, { showNotification } from 'components/Notifications';
import Timer, { Circle } from 'components/Timer';
import * as S from './style';

root.render(
  <Provider store={store}>
    <Router>
      <button
        onClick={() => {
          showNotification({
            text: 'dsadas ' + +new Date(),
            type: 'error',
          });
        }}
      >
        ds
      </button>
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
