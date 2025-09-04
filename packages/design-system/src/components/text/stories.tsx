import type { Meta, StoryObj } from '@storybook/react-vite';

import { Text } from '.';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['p', 'span', 'div'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'black',
        'inherit',
      ],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is default text.',
  },
};

export const Paragraph: Story = {
  args: {
    as: 'p',
    children: 'This is a paragraph element.',
  },
};

export const Span: Story = {
  args: {
    as: 'span',
    children: 'This is a span element.',
  },
};

export const Div: Story = {
  args: {
    as: 'div',
    children: 'This is a div element.',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'This is small text.',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'This is large text.',
  },
};

export const Bold: Story = {
  args: {
    weight: 'bold',
    children: 'This is bold text.',
  },
};

export const Light: Story = {
  args: {
    weight: 'light',
    children: 'This is light text.',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'This is primary colored text.',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    children: 'This is success colored text.',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    children: 'This is warning colored text.',
  },
};

export const Error: Story = {
  args: {
    color: 'error',
    children: 'This is error colored text.',
  },
};

export const Black: Story = {
  args: {
    color: 'black',
    children: 'This is black colored text.',
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text size="xs">Extra Small Text (xs)</Text>
      <Text size="sm">Small Text (sm)</Text>
      <Text size="md">Medium Text (md)</Text>
      <Text size="lg">Large Text (lg)</Text>
      <Text size="xl">Extra Large Text (xl)</Text>
    </div>
  ),
};

export const AllWeights = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text weight="light">Light Weight Text</Text>
      <Text weight="normal">Normal Weight Text</Text>
      <Text weight="medium">Medium Weight Text</Text>
      <Text weight="semibold">Semibold Weight Text</Text>
      <Text weight="bold">Bold Weight Text</Text>
    </div>
  ),
};

export const AllColors = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text color="black">Black Color Text</Text>
      <Text color="primary">Primary Color Text</Text>
      <Text color="secondary">Secondary Color Text</Text>
      <Text color="success">Success Color Text</Text>
      <Text color="warning">Warning Color Text</Text>
      <Text color="error">Error Color Text</Text>
      <Text color="inherit">Inherit Color Text</Text>
    </div>
  ),
};
