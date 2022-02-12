import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from 'store/reducers/todo';

export default () => {
  const [name, setName] = useState(''),
    dispatch = useDispatch(),
    changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    addHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!name) return;
      dispatch(
        add({
          name,
        })
      ).then(() => {
        setName('');
      });
    };
  return (
    <div className="todo__panel">
      <input type="text" value={name} onChange={changeHandle} />
      <button onClick={addHandler}>Add</button>
    </div>
  );
};
