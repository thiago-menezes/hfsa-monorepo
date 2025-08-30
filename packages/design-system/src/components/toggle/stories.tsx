import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Toggle } from './index';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    defaultChecked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Toggle me',
  },
};

export const Checked: Story = {
  args: {
    label: 'Toggle me',
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Toggle me',
    checked: false,
  },
};

export const WithDefaultChecked: Story = {
  args: {
    label: 'Toggle me',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled toggle',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled toggle',
    checked: true,
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Toggle without visible label',
  },
};

export const Controlled: Story = {
  render: () => {
    return (
      <div>
        <p>This toggle demonstrates controlled behavior.</p>
        <p>Use the controls above to change the checked state.</p>
        <Toggle label="Controlled toggle" checked={false} />
      </div>
    );
  },
};
