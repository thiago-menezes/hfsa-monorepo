import { render, screen } from '@testing-library/react';
import { Select } from '.';

it('renders select with label', () => {
  render(
    <Select label="Choice">
      <option>1</option>
    </Select>,
  );
  expect(screen.getByText('Choice')).toBeInTheDocument();
});
