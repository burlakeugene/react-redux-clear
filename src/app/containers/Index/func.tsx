import React from 'react';

type TProps = {
  items: any[];
};

function func(props: TProps) {
  return (
    <>
      func
      {props.items.map((item) => (
        <div>{item.name}</div>
      ))}
    </>
  );
}

export default func;
