import React from 'react';
import Panel from './components/Panel';
import List from './components/List';
import './styles/styles.scss';

export default () => {
  return <div className="todo">
    <Panel />
    <List />
  </div>;
};
