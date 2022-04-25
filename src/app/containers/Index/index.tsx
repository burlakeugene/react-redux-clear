import React, { useEffect, useState } from 'react';
import FuncText from './func';
import ClassTest from './class';

const index = () => {
  const generate = () => {
    return new Array(1000).fill(1).map(() => ({
      name: 'name ' + Math.random(),
    }));
  };

  const [items, setItems] = useState(generate());

  return <ClassTest items={items} />;
};

export default index;
