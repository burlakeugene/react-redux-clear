import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToDo from './index';
import { Provider } from 'react-redux';
import store from 'store';
describe('ToDo container', () => {
  it('Render container', () => {
    const { container, getByText } = render(
      <Provider store={store}>
        <ToDo />
      </Provider>
    );
    expect(getByText('Add')).toBeInTheDocument();
    expect(container).toBeTruthy();
  });
});
