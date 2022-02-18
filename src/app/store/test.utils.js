import * as React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
export const renderWithRedux = (
  component,
  {
    preloadedState,
    reducer,
    store = configureStore({ reducer, preloadedState }),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};
