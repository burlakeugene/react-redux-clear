import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DynamicTime from 'components/DynamicTime/index.jsx';
import { edit, remove } from 'store/reducers/todo';

interface IItem {
  name: string;
  date: Date;
  id: string;
  status: string;
}
export default () => {
  const list = useSelector((state: any) => {
      return state.todo.list;
    }),
    dispatch = useDispatch();
  return (
    <div className="todo__list">
      {list.map((item: IItem, index: number) => {
        return (
          <div
            key={index}
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              dispatch(
                edit({
                  ...item,
                  status: item.status === 'NEW' ? 'DONE' : 'NEW',
                })
              );
            }}
          >
            <button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                event.stopPropagation();
                dispatch(remove(item));
              }}
            >
              x
            </button>
            {item.name} {item.status === 'DONE' ? 'Done' : 'New'}
            <br />
            <DynamicTime from={+new Date(item.date)} />
          </div>
        );
      })}
    </div>
  );
};
