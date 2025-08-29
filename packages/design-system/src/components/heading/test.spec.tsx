import { render, screen } from '@testing-library/react';
import { Heading } from '.';

describe('Heading', () => {
  it('renders with default props', () => {
    render(<Heading>Test Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Test Heading');
  });

  it('renders with custom as prop', () => {
    render(<Heading as="h3">H3 Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H3');
  });

  it('renders with custom weight', () => {
    render(<Heading weight="light">Light Weight</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Light Weight');
  });

  it('applies custom className', () => {
    render(<Heading className="custom-class">Custom Class</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(<Heading data-testid="test-heading">Test Props</Heading>);
    const heading = screen.getByTestId('test-heading');
    expect(heading).toBeInTheDocument();
  });
});
