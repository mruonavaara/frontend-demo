import '@testing-library/jest-dom/vitest';
import { test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

test("renders App component", () => {
  // renders the App component for testing
  render(<App />);
  const headline = screen.getByText(/My Todolist/i);
  expect(headline).toBeInTheDocument();
});

test('add todo', () => {
  render(<App />);
  const desc = screen.getByPlaceholderText('Description');
  const date = screen.getByPlaceholderText('Date');
  const button = screen.getByText("Add");

  fireEvent.change(desc, { target: { value: "Go to coffee" } });
  fireEvent.change(date, { target: { value: "29.01.2023" } });
  fireEvent.click(button);

  const table = screen.getByRole("table");
  expect(table).toHaveTextContent(/go to coffee/i);
});