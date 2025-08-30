import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './index';

const PlusIcon = () => <span style={{ fontSize: '1.2em' }}>+</span>;
const HeartIcon = () => <span style={{ fontSize: '1.2em' }}>❤</span>;

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'primary',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'secondary',
    disabled: true,
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const GhostDisabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'ghost',
    disabled: true,
  },
};

export const IconOnlyPrimary: Story = {
  args: {
    icon: <PlusIcon />,
    iconPosition: 'only',
    variant: 'primary',
    'aria-label': 'Add item',
  },
};

export const IconOnlySecondary: Story = {
  args: {
    icon: <HeartIcon />,
    iconPosition: 'only',
    variant: 'secondary',
    'aria-label': 'Like item',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};
