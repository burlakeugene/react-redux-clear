import React, { Component, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Counter from 'components/Counter';
import Swipe from 'components/Swipe';
import Field from 'components/Field';
import DynamicTime from 'components/DynamicTime';
import Humburger from 'components/Humburger';
import OfflineDetector from 'components/OfflineDetector';
import FlipNumber from 'components/FlipNumber';
const App = (props) => {
  let swipeRef = useRef();
  let [humburgerState, humburgerChange] = useState(false);
  const aa = React.useCallback(() => {
    humburgerChange(!humburgerState);
  }, [humburgerState]);
  const [number, setNumber] = React.useState(9);

  return (
    <>
      <button
        onClick={() => {
          setNumber((prev) => prev - 1);
        }}
      >
        down
      </button>
      <FlipNumber>{number}</FlipNumber>
      <button
        onClick={() => {
          setNumber((prev) => prev + 1);
        }}
      >
        up
      </button>
      {props.text}
      <Counter />
      <button
        onClick={() => {
          swipeRef.current.open();
        }}
      >
        Swipe call
      </button>
      <OfflineDetector
        render={(online) => {
          return online ? <div>online</div> : <div>offline</div>;
        }}
      />
      <Swipe ref={swipeRef} drag>
        <div onClick={aa}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          ipsam nihil architecto tenetur vel quia sunt doloribus vitae officiis
          molestias nulla pariatur, tempore veniam accusamus eum nemo dolorum.
          Saepe, sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reiciendis ipsam nihil architecto tenetur vel quia sunt doloribus
          vitae officiis molestias nulla pariatur, tempore veniam accusamus eum
          nemo dolorum. Saepe, sit. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Reiciendis ipsam nihil architecto tenetur vel quia
          sunt doloribus vitae officiis molestias nulla pariatur, tempore veniam
          accusamus eum nemo dolorum. Saepe, sit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Reiciendis ipsam nihil architecto
          tenetur vel quia sunt doloribus vitae officiis molestias nulla
          pariatur, tempore veniam accusamus eum nemo dolorum. Saepe, sit. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ipsam
          nihil architecto tenetur vel quia sunt doloribus vitae officiis
          molestias nulla pariatur, tempore veniam accusamus eum nemo dolorum.
          Saepe, sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reiciendis ipsam nihil architecto tenetur vel quia sunt doloribus
          vitae officiis molestias nulla pariatur, tempore veniam accusamus eum
          nemo dolorum. Saepe, sit. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Reiciendis ipsam nihil architecto tenetur vel quia
          sunt doloribus vitae officiis molestias nulla pariatur, tempore veniam
          accusamus eum nemo dolorum. Saepe, sit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Reiciendis ipsam nihil architecto
          tenetur vel quia sunt doloribus vitae officiis molestias nulla
          pariatur, tempore veniam accusamus eum nemo dolorum. Saepe, sit. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ipsam
          nihil architecto tenetur vel quia sunt doloribus vitae officiis
          molestias nulla pariatur, tempore veniam accusamus eum nemo dolorum.
          Saepe, sit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reiciendis ipsam nihil architecto tenetur vel quia sunt doloribus
          vitae officiis molestias nulla pariatur, tempore veniam accusamus eum
          nemo dolorum. Saepe, sit. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Reiciendis ipsam nihil architecto tenetur vel quia
          sunt doloribus vitae officiis molestias nulla pariatur, tempore veniam
          accusamus eum nemo dolorum. Saepe, sit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Reiciendis ipsam nihil architecto
          tenetur vel quia sunt doloribus vitae officiis molestias nulla
          pariatur, tempore veniam accusamus eum nemo dolorum. Saepe, sit.Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ipsam
          nihil architecto tenetur vel quia sunt doloribus vitae officiis
          molestias nulla pariatur, tempore veniam accusamus eum nemo dolorum.
          Saepe, sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reiciendis ipsam nihil architecto tenetur vel quia sunt doloribus
          vitae officiis molestias nulla pariatur, tempore veniam accusamus eum
          nemo dolorum. Saepe, sit. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Reiciendis ipsam nihil architecto tenetur vel quia
          sunt doloribus vitae officiis molestias nulla pariatur, tempore veniam
          accusamus eum nemo dolorum. Saepe, sit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Reiciendis ipsam nihil architecto
          tenetur vel quia sunt doloribus vitae officiis molestias nulla
          pariatur, tempore veniam accusamus eum nemo dolorum. Saepe, sit. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ipsam
          nihil architecto tenetur vel quia sunt doloribus vitae officiis
          molestias nulla pariatur, tempore veniam accusamus eum nemo dolorum.
          Saepe, sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reiciendis ipsam nihil architecto tenetur vel quia sunt doloribus
          vitae officiis molestias nulla pariatur, tempore veniam accusamus eum
          nemo dolorum. Saepe, sit. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Reiciendis ipsam nihil architecto tenetur vel quia
          sunt doloribus vitae officiis molestias nulla pariatur, tempore veniam
          accusamus eum nemo dolorum. Saepe, sit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Reiciendis ipsam nihil architecto
          tenetur vel quia sunt doloribus vitae officiis molestias nulla
          pariatur, tempore veniam accusamus eum nemo dolorum. Saepe, sit. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ipsam
          nihil architecto tenetur vel quia sunt doloribus vitae officiis
          molestias nulla pariatur, tempore veniam accusamus eum nemo dolorum.
          Saepe, sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reiciendis ipsam nihil architecto tenetur vel quia sunt doloribus
          vitae officiis molestias nulla pariatur, tempore veniam accusamus eum
          nemo dolorum. Saepe, sit. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Reiciendis ipsam nihil architecto tenetur vel quia
          sunt doloribus vitae officiis molestias nulla pariatur, tempore veniam
          accusamus eum nemo dolorum. Saepe, sit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Reiciendis ipsam nihil architecto
          tenetur vel quia sunt doloribus vitae officiis molestias nulla
          pariatur, tempore veniam accusamus eum nemo dolorum. Saepe, sit.Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ipsam
          nihil architecto tenetur vel quia sunt doloribus vitae officiis
          molestias nulla pariatur, tempore veniam accusamus eum nemo dolorum.
          Saepe, sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reiciendis ipsam nihil architecto tenetur vel quia sunt doloribus
          vitae officiis molestias nulla pariatur, tempore veniam accusamus eum
          nemo dolorum. Saepe, sit. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Reiciendis ipsam nihil architecto tenetur vel quia
          sunt doloribus vitae officiis molestias nulla pariatur, tempore veniam
          accusamus eum nemo dolorum. Saepe, sit.
        </div>
      </Swipe>
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
