import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from '.';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1',
  },
};

export const H2: Story = {
  args: {
    as: 'h2',
    children: 'Heading 2',
  },
};

export const H3: Story = {
  args: {
    as: 'h3',
    children: 'Heading 3',
  },
};

export const H4: Story = {
  args: {
    as: 'h4',
    children: 'Heading 4',
  },
};

export const H5: Story = {
  args: {
    as: 'h5',
    children: 'Heading 5',
  },
};

export const H6: Story = {
  args: {
    as: 'h6',
    children: 'Heading 6',
  },
};

export const LightWeight: Story = {
  args: {
    weight: 'light',
    children: 'Light Weight Heading',
  },
};

export const BoldWeight: Story = {
  args: {
    weight: 'bold',
    children: 'Bold Weight Heading',
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading as="h1">Heading 1</Heading>
      <Heading as="h2">Heading 2</Heading>
      <Heading as="h3">Heading 3</Heading>
      <Heading as="h4">Heading 4</Heading>
      <Heading as="h5">Heading 5</Heading>
      <Heading as="h6">Heading 6</Heading>
    </div>
  ),
};
