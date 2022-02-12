import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const add = createAsyncThunk('todo/add', (data) => {
  return new Promise((resolve) => {
    resolve(data);
  });
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
      action.payload.date = '' + new Date();
      state.list.unshift(action.payload);
    });
  },
});
export default todoSlice.reducer;
