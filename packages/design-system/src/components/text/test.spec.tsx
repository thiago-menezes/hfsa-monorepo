import { render, screen } from '@testing-library/react';
import { Text } from '.';

describe('Text', () => {
  it('renders with default props', () => {
    render(<Text>Test Text</Text>);
    const text = screen.getByText('Test Text');
    expect(text).toBeInTheDocument();
    expect(text.tagName).toBe('P');
  });

  it('renders with custom as prop', () => {
    render(<Text as="span">Span Text</Text>);
    const text = screen.getByText('Span Text');
    expect(text).toBeInTheDocument();
    expect(text.tagName).toBe('SPAN');
  });

  it('renders with custom size', () => {
    render(<Text size="lg">Large Text</Text>);
    const text = screen.getByText('Large Text');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Large Text');
  });

  it('renders with custom weight', () => {
    render(<Text weight="bold">Bold Text</Text>);
    const text = screen.getByText('Bold Text');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Bold Text');
  });

  it('renders with custom color', () => {
    render(<Text color="primary">Primary Text</Text>);
    const text = screen.getByText('Primary Text');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Primary Text');
  });

  it('applies custom className', () => {
    render(<Text className="custom-class">Custom Class</Text>);
    const text = screen.getByText('Custom Class');
    expect(text).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(<Text data-testid="test-text">Test Props</Text>);
    const text = screen.getByTestId('test-text');
    expect(text).toBeInTheDocument();
  });

  it('renders with all props combined', () => {
    render(
      <Text
        as="div"
        size="sm"
        weight="semibold"
        color="success"
        className="combined-class"
      >
        Combined Props
      </Text>,
    );
    const text = screen.getByText('Combined Props');
    expect(text).toBeInTheDocument();
    expect(text.tagName).toBe('DIV');
    expect(text).toHaveClass('combined-class');
  });
});
