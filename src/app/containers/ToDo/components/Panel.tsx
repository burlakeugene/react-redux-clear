import * as React from 'react';
import { useDispatch } from 'react-redux';
import { add } from 'store/reducers/todo';

export default () => {
  const [name, setName] = React.useState(''),
    dispatch = useDispatch<TDispatch>(),
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
      <input
        data-testid="input"
        type="text"
        value={name}
        onChange={changeHandle}
      />
      <button data-testid="button" onClick={addHandler}>
        Add
      </button>
    </div>
  );
};
