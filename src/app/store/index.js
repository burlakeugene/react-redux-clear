import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter';
import todoReducer from './reducers/todo';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});

export default store;
