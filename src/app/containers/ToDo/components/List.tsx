import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DynamicTime from 'components/DynamicTime/index.jsx';

interface IItem {
  name: string;
  date: Date;
}
export default () => {
  const list = useSelector((state: any) => {
    return state.todo.list;
  });
  return (
    <div className="todo__list">
      {list.map((item: IItem, index: number) => {
        return (
          <div key={index}>
            {item.name} <br />
            <DynamicTime from={+new Date(item.date)} />
          </div>
        );
      })}
    </div>
  );
};
