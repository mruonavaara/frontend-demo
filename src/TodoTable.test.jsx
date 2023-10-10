import '@testing-library/jest-dom/vitest';
import { test } from 'vitest';
import { render, screen } from '@testing-library/react';

import TodoTable from './TodoTable';

test('renders todotable', () => {
  const row = [
    { desc: 'Go to coffee', date: '24.01.2023' }
  ];
  render(<TodoTable todos={row} />);
  const table = screen.getByRole('table');
  expect(table).toHaveTextContent((/go to coffee/i));
});