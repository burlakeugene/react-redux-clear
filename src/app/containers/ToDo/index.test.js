import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ToDo from './index';
import toDoReducer from 'store/reducers/todo';
import { renderWithRedux } from 'store/test.utils.js';

describe('ToDo container', () => {
  it('Without list element in document if list is empty', async () => {
    const render = renderWithRedux(<ToDo />, {
      reducer: {
        todo: toDoReducer,
      },
    });
    const list = render.queryByTestId('list');
    expect(list).not.toBeInTheDocument();
  });

  it('List element in document if list not empty', async () => {
    const render = renderWithRedux(<ToDo />, {
      preloadedState: {
        todo: {
          list: [
            {
              name: 'test',
            },
          ],
        },
      },
      reducer: {
        todo: toDoReducer,
      },
    });
    expect(render.queryByTestId('list')).toBeInTheDocument();
  });

  it('Addiding new element', async () => {
    const render = renderWithRedux(<ToDo />, {
      reducer: {
        todo: toDoReducer,
      },
    });
    userEvent.type(render.getByTestId('input'), 'test case');
    userEvent.click(render.getByTestId('button'));
    expect(await render.findByText(/test case/i)).toBeInTheDocument();
  });
});
