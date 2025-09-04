import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Toggle } from '.';

describe('Toggle', () => {
  it('renders with label', () => {
    render(<Toggle label="Test Toggle" />);
    expect(screen.getByText('Test Toggle')).toBeInTheDocument();
  });

  it('renders without label', () => {
    render(<Toggle aria-label="Hidden label" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('handles controlled state', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Toggle label="Controlled" checked={false} onChange={onChange} />);

    const toggle = screen.getByRole('checkbox');
    await user.click(toggle);

    expect(onChange).toHaveBeenCalled();
  });

  it('handles uncontrolled state', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Toggle
        label="Uncontrolled"
        defaultChecked={false}
        onChange={onChange}
      />,
    );

    const toggle = screen.getByRole('checkbox');
    await user.click(toggle);

    expect(onChange).toHaveBeenCalled();
  });

  it('applies disabled state', () => {
    render(<Toggle label="Disabled" disabled />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<Toggle label="Custom Class" className="custom-class" />);
    const wrapper = screen.getByText('Custom Class').closest('label');
    expect(wrapper).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(<Toggle label="Test Props" data-testid="test-toggle" />);
    const toggle = screen.getByTestId('test-toggle');
    expect(toggle).toBeInTheDocument();
  });

  it('handles focus states', async () => {
    const user = userEvent.setup();
    render(<Toggle label="Focus Test" />);

    const toggle = screen.getByRole('checkbox');
    await user.tab();

    expect(toggle).toHaveFocus();
  });

  it('maintains accessibility attributes', () => {
    render(<Toggle label="Accessible" checked={true} />);
    const toggle = screen.getByRole('checkbox');

    expect(toggle).toHaveAttribute('aria-checked', 'true');
    expect(toggle).toHaveAttribute('aria-label', 'Accessible');
  });
});
