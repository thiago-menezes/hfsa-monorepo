import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './index';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1',
    weight: 'bold',
  },
};

export const H2: Story = {
  args: {
    as: 'h2',
    children: 'Heading 2',
    weight: 'semibold',
  },
};

export const H3: Story = {
  args: {
    as: 'h3',
    children: 'Heading 3',
    weight: 'medium',
  },
};

export const H4: Story = {
  args: {
    as: 'h4',
    children: 'Heading 4',
    weight: 'medium',
  },
};

export const H5: Story = {
  args: {
    as: 'h5',
    children: 'Heading 5',
    weight: 'normal',
  },
};

export const H6: Story = {
  args: {
    as: 'h6',
    children: 'Heading 6',
    weight: 'normal',
  },
};

export const LightWeight: Story = {
  args: {
    as: 'h2',
    children: 'Light Weight Heading',
    weight: 'light',
  },
};

export const AllWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading as="h1" weight="light">
        Light Weight
      </Heading>
      <Heading as="h1" weight="normal">
        Normal Weight
      </Heading>
      <Heading as="h1" weight="medium">
        Medium Weight
      </Heading>
      <Heading as="h1" weight="semibold">
        Semibold Weight
      </Heading>
      <Heading as="h1" weight="bold">
        Bold Weight
      </Heading>
    </div>
  ),
};
