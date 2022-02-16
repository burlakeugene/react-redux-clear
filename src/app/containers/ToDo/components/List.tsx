import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { edit, remove, get } from 'store/reducers/todo';
import { RootState, IItem } from 'store/types';
import Item from './Item';
export default () => {
  const list = useSelector((state: RootState) => {
      return state.todo.list;
    }),
    dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(get());
  }, []);
  return (
    <>
      {list.length ? (
        <div className="todo__list" data-testid="list">
          {list.map((item, index) => {
            return <Item data={item} key={index} />;
          })}
        </div>
      ) : null}
    </>
  );
};
