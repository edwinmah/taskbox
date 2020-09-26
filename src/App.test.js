import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Taskbox element', () => {
  const { getByText } = render(<App />);
  const el = getByText(/Taskbox/i);
  expect(el).toBeInTheDocument();
});
