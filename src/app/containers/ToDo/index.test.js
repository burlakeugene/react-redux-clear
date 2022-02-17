import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ToDo from './index';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from 'store/reducers/todo';

const renderWithRedux = (
  component,
  {
    preloadedState,
    store = configureStore({ reducer: { todo: toDoReducer }, preloadedState }),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('ToDo container', () => {
  it('render', async () => {
    const render = renderWithRedux(<ToDo />);
    const list = render.queryByTestId('list');
    expect(list).not.toBeInTheDocument();
  });

  it('render', async () => {
    const render = renderWithRedux(<ToDo />);
    expect(render.queryByTestId('list')).not.toBeInTheDocument();
    userEvent.type(render.getByTestId('input'), 'test case');
    userEvent.click(render.getByTestId('button'));
    expect(await render.findByText(/test case/i)).toBeInTheDocument();
    expect(render.queryByTestId('list')).toBeInTheDocument();
  });
});
