import * as React from "react"
import { useDispatch } from 'react-redux';
import DynamicTime from 'components/DynamicTime/index';
import { edit, remove, get } from 'store/reducers/todo';
import { RootState, IItem } from 'store/types';
import RemoveIcon from 'assets/icons/remove.svg?jsx';

export default ({ data }: { data: IItem }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={['todo__item', 'todo__item--' + data.status].join(' ')}
      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
        dispatch(
          edit({
            ...data,
            status: data.status === 'NEW' ? 'DONE' : 'NEW',
          })
        );
      }}
    >
      {data.name}
      <DynamicTime from={+new Date(data.date)} />
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          dispatch(remove(data));
        }}
      >
        <RemoveIcon />
      </button>
    </div>
  );
};
