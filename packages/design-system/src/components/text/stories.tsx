import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './index';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'inherit',
      ],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is default text with medium size and normal weight.',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'This is small text for captions and secondary information.',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'This is large text for emphasis and readability.',
  },
};

export const Bold: Story = {
  args: {
    weight: 'bold',
    children: 'This is bold text for strong emphasis.',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'This is primary colored text for important information.',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    children: 'This is success colored text for positive feedback.',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    children: 'This is warning colored text for cautionary messages.',
  },
};

export const Error: Story = {
  args: {
    color: 'error',
    children: 'This is error colored text for error messages.',
  },
};

export const AsSpan: Story = {
  args: {
    as: 'span',
    children: 'This text is rendered as a span element.',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text size="xs">Extra Small Text</Text>
      <Text size="sm">Small Text</Text>
      <Text size="md">Medium Text</Text>
      <Text size="lg">Large Text</Text>
      <Text size="xl">Extra Large Text</Text>
    </div>
  ),
};

export const AllWeights: Story = {
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

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text color="primary">Primary Color Text</Text>
      <Text color="secondary">Secondary Color Text</Text>
      <Text color="success">Success Color Text</Text>
      <Text color="warning">Warning Color Text</Text>
      <Text color="error">Error Color Text</Text>
    </div>
  ),
};
