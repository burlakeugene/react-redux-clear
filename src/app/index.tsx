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
    <Test />
    <Number value={323.3232} animated />
    <Timer start={new Date().toISOString()} duration={30}>
      {(props) => (
        <div>
          dddd
          <Circle {...props} />
        </div>
      )}
    </Timer>
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
