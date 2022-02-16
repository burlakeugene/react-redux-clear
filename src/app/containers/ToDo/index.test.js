import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ToDo from './index';
import { Provider } from 'react-redux';
import store from 'store';
import { add } from 'store/reducers/todo';

describe('ToDo container', () => {
  it('Adding element', async () => {
    const { container } = render(
      <Provider store={store}>
        <ToDo />
      </Provider>
    );
    let input = screen.getByTestId('input');
    userEvent.type(input, 'test case');
    expect(input.value).toBe('test case');
    let button = screen.getByTestId('button');
    await userEvent.click(button);
    await store.dispatch(add({
      name: 'test'
    }));
    expect(await screen.findByTestId('item')).toBeInTheDocument();
    
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     screen.debug();
    //   }, 1000);
    // });
    // expect(getByTestId('list')).toHaveLength(1);
  });
});
