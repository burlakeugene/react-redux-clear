import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getRandomId = () => {
  return Math.random().toString(16);
};

export const get = createAsyncThunk('todo/get', (data) => {
  return new Promise((resolve) => {
    // resolve(JSON.parse(localStorage.getItem('todolist') || '[]'));
  });
});

export const add = createAsyncThunk('todo/add', (data) => {
  return Promise.resolve(data);
});

export const edit = createAsyncThunk('todo/edit', (data) => {
  return Promise.resolve(data);
});

export const remove = createAsyncThunk('todo/remove', (data) => {
  return Promise.resolve(data);
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list: [],
  },
  reducers: {
    // add: (state, action) => {
    //   console.log(state, action);
    //   state.list.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(add.fulfilled, (state, action) => {
      action.payload.date = new Date().toString();
      action.payload.id = getRandomId();
      action.payload.status = 'NEW';
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
