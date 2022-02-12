import React, { Component, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Counter from 'components/Counter';
import Hook from 'components/Hook';
import Memo from 'components/Memo';
import Swipe from 'components/Swipe';
import Field from 'components/Field';
import DynamicTime from 'components/DynamicTime';
import Humburger from 'components/Humburger';

const App = (props) => {
  let swipeRef = useRef();
  let [humburgerState, humburgerChange] = useState(false);
  return (
    <>
      {props.text}
      <Counter />
      <Hook />
      <Memo />
      <button
        onClick={() => {
          swipeRef.current.show();
        }}
      >
        Swipe call
      </button>
      <Swipe ref={swipeRef}>lore</Swipe>
      <Field value={1} min={0} max={200} step={1} />
      <DynamicTime to={+new Date() + 121 * 1000} />
      <DynamicTime from={+new Date()} />
      <Humburger
        active={humburgerState}
        onChange={(state) => {
          humburgerChange(state);
        }}
      />
    </>
  );
};

export default App;
