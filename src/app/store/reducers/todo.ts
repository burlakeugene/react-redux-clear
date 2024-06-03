import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, IItem } from '../types';

const getRandomId = () => {
  return Math.random().toString(16);
};

const initialState: RootState['todo'] = {
  list: [],
};

export const get = createAsyncThunk<IItem[]>('todo/get', () => {
  return new Promise((resolve) => {
    resolve(JSON.parse(localStorage.getItem('todolist') || '[]'));
  });
});

export const add = createAsyncThunk<IItem, Pick<IItem, 'name'>>(
  'todo/add',
  (data) => {
    return Promise.resolve({
      ...data,
      id: getRandomId(),
      status: 'NEW',
      date: new Date().toString(),
    });
  }
);

export const edit = createAsyncThunk<IItem, IItem>('todo/edit', (data) => {
  return Promise.resolve(data);
});

export const remove = createAsyncThunk<IItem, IItem>('todo/remove', (data) => {
  return Promise.resolve(data);
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // add: (state, action) => {
    //   console.log(state, action);
    //   state.list.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(add.fulfilled, (state, action) => {
      state.list.unshift(action.payload);
      localStorage.setItem('todolist', JSON.stringify(state.list));
    });
    builder.addCase(edit.fulfilled, (state, action) => {
      state.list = state.list.map((item) => {
        if (action.payload.id === item.id) {
          item = { ...item, ...action.payload };
        }
        return item;
      });
      localStorage.setItem('todolist', JSON.stringify(state.list));
    });
    builder.addCase(remove.fulfilled, (state, action) => {
      state.list = state.list.filter((item) => {
        return item.id !== action.payload.id;
      });
      localStorage.setItem('todolist', JSON.stringify(state.list));
    });
    builder.addCase(get.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default todoSlice.reducer;
