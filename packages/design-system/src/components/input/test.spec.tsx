import { render, screen } from '@testing-library/react';
import { Input } from '.';

it('renders input with label', () => {
  render(<Input label="Email" />);
  expect(screen.getByText('Email')).toBeInTheDocument();
});
