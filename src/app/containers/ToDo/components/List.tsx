import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
            {item.date}
          </div>
        );
      })}
    </div>
  );
};
