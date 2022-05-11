import React, { Component } from 'react';

const index = () => {
  const [blocks, setBlocks] = React.useState([
    {
      background: 'red',
    },
  ]);
  React.useEffect(() => {
    setBlocks([
      ...blocks,
      {
        background: 'green',
      },
    ]);
  }, []);
  return (
    <div>
      {blocks.map((block) => (
        <div
          style={{
            width: '100px',
            height: '100px',
            ...block,
          }}
        ></div>
      ))}
    </div>
  );
};

export default index;
